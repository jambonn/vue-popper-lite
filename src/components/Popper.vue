<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import { Props, Options, Instance } from '../types';

const props = withDefaults(defineProps<Props>(), {
  trigger: 'hover',
  delayOnMouseOver: 10,
  delayOnMouseOut: 10,
  disabled: false,
  forceShow: false,
  appendToBody: false,
  visibleArrow: true,
  arrowPadding: 0,
  enableFlip: true,
  offsetSkidding: 0,
  offsetDistance: 8,
  transition: '',
  stopPropagation: false,
  preventDefault: false,
  placement: 'bottom',
  strategy: 'absolute',
});
const emit = defineEmits<{
  (e: 'created'): void;
  (e: 'documentClick'): void;
  (e: 'show'): void;
  (e: 'hide'): void;
}>();

const referenceElm = ref();
const popperElm = ref();
const popperJS = ref<Instance | null>(null);
const timer = ref();
const popperNode = ref(null);
const showPopper = ref(false);
const appendedToBody = ref(props.appendToBody);
const popperOptions = ref<Options>({
  placement: props.placement,
  modifiers: [
    preventOverflow,
    flip,
    {
      name: 'flip',
      enabled: props.enableFlip,
    },
    arrow,
    {
      name: 'arrow',
      options: {
        padding: props.arrowPadding,
      },
    },
    offset,
    {
      name: 'offset',
      options: {
        offset: [props.offsetSkidding, props.offsetDistance],
      },
    },
    {
      name: 'computeStyles',
      options: {
        gpuAcceleration: false,
      },
    },
  ],
  strategy: props.strategy,
});

const isVisible = computed(() => {
  if (props.appendToBody) {
    return appendedToBody.value;
  }

  return true;
});

function on(
  element: Document | Element,
  event: string,
  handler: (event: any) => void
) {
  if (element && event && handler) {
    typeof document.addEventListener === 'function'
      ? element.addEventListener(event, handler, false)
      : (element as any).attachEvent('on' + event, handler);
  }
}
function off(
  element: Document | Element,
  event: string,
  handler: (event: any) => void
) {
  if (element && event) {
    typeof document.removeEventListener === 'function'
      ? element.removeEventListener(event, handler, false)
      : (element as any).detachEvent('on' + event, handler);
  }
}
function doToggle(event: Event) {
  if (props.stopPropagation) {
    event.stopPropagation();
  }

  if (props.preventDefault) {
    event.preventDefault();
  }

  if (!props.forceShow) {
    showPopper.value = !showPopper.value;
  }
}
function doShow() {
  showPopper.value = true;
}
function doClose() {
  showPopper.value = false;
}
function doDestroy() {
  if (showPopper.value) {
    return;
  }

  if (popperJS.value) {
    popperJS.value.destroy();
    popperJS.value = null;
  }
}
function updatePopper() {
  popperJS.value ? popperJS.value.update() : initializePopper();
}
function initializePopper() {
  nextTick(() => {
    if (popperJS.value && popperJS.value.destroy) {
      popperJS.value.destroy();
    }

    popperOptions.value.onFirstUpdate = () => {
      emit('created');
      nextTick(updatePopper);
    };

    popperJS.value = createPopper(
      referenceElm.value,
      popperElm.value,
      popperOptions.value
    );
  });
}
function onMouseOver() {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    showPopper.value = true;
  }, props.delayOnMouseOver);
}
function onMouseOut() {
  clearTimeout(timer.value);
  timer.value = setTimeout(() => {
    showPopper.value = false;
  }, props.delayOnMouseOut);
}
function elementContains(elm: HTMLElement, otherElm: Node) {
  if (typeof elm.contains === 'function') {
    return elm.contains(otherElm);
  }

  return false;
}
function handleDocumentClick(e: MutationRecord) {
  if (
    !popperNode.value ||
    !referenceElm.value ||
    elementContains(popperNode.value, e.target) ||
    elementContains(referenceElm.value, e.target) ||
    !popperElm.value ||
    elementContains(popperElm.value, e.target)
  ) {
    return;
  }

  emit('documentClick');

  if (props.forceShow) {
    return;
  }

  showPopper.value = false;
}
function destroyPopper() {
  off(referenceElm.value, 'click', doToggle);
  off(referenceElm.value, 'mouseup', doClose);
  off(referenceElm.value, 'mousedown', doShow);
  off(referenceElm.value, 'focus', doShow);
  off(referenceElm.value, 'blur', doClose);
  off(referenceElm.value, 'mouseout', onMouseOut);
  off(referenceElm.value, 'mouseover', onMouseOver);
  off(document, 'click', handleDocumentClick);

  showPopper.value = false;
  doDestroy();

  if (appendedToBody.value) {
    appendedToBody.value = false;
  }
}

onMounted(() => {
  switch (props.trigger) {
    case 'clickToOpen':
      on(referenceElm.value, 'click', doShow);
      on(document, 'click', handleDocumentClick);
      on(document, 'touchstart', handleDocumentClick);
      break;
    case 'clickToToggle':
      on(referenceElm.value, 'click', doToggle);
      on(document, 'click', handleDocumentClick);
      on(document, 'touchstart', handleDocumentClick);
      break;
    case 'hover':
      on(referenceElm.value, 'mouseover', onMouseOver);
      on(popperElm.value, 'mouseover', onMouseOver);
      on(referenceElm.value, 'mouseout', onMouseOut);
      on(popperElm.value, 'mouseout', onMouseOut);
      break;
    case 'focus':
      on(referenceElm.value, 'focus', onMouseOver);
      on(popperElm.value, 'focus', onMouseOver);
      on(referenceElm.value, 'blur', onMouseOut);
      on(popperElm.value, 'blur', onMouseOut);
      break;
  }
});

onUnmounted(() => {
  destroyPopper();
});

watch(showPopper, (value) => {
  if (value) {
    emit('show');
    if (popperJS.value) {
      popperJS.value.setOptions((options) => ({
        ...options,
        modifiers: [
          ...(options.modifiers || []),
          { name: 'eventListeners', enabled: true },
        ],
      }));
    }
    updatePopper();
  } else {
    if (popperJS.value) {
      popperJS.value.setOptions((options) => ({
        ...options,
        modifiers: [
          ...(options.modifiers || []),
          { name: 'eventListeners', enabled: false },
        ],
      }));
    }
    emit('hide');
  }
});
watch(
  () => props.forceShow,
  (value) => {
    if (value) {
      doShow();
    } else {
      doClose();
    }
  },
  { immediate: true }
);
watch(
  () => props.disabled,
  (value) => {
    if (value) {
      showPopper.value = false;
    }
  }
);
</script>

<template>
  <div ref="popperNode" :class="['popper', { 'popper--active': showPopper }]">
    <div
      ref="referenceElm"
      class="popper__reference"
      aria-describedby="tooltip"
    >
      <slot name="reference"></slot>
    </div>
    <teleport to="body" :disabled="!appendToBody">
      <transition
        :name="transition"
        :enter-active-class="enterActiveClass"
        :leave-active-class="leaveActiveClass"
        @after-leave="doDestroy"
      >
        <div
          v-if="isVisible"
          v-show="!disabled && showPopper"
          ref="popperElm"
          :class="['popper__content', contentClass]"
          role="tooltip"
        >
          <slot>{{ content }}</slot>
          <div
            v-if="visibleArrow"
            class="popper__arrow"
            data-popper-arrow
          ></div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<style>
.popper__reference {
  display: inline;
}

.popper__content {
  background: var(--popper-background, #333333);
  color: var(--popper-color, #ffffff);
  padding: var(--popper-padding, 8px);
  font-size: var(--popper-font-size, 14px);
  border-radius: var(--popper-radius, 4px);
}

.popper__arrow,
.popper__arrow::before {
  position: absolute;
  width: var(--popper-arrow-width, 8px);
  height: var(--popper-arrow-height, 8px);
  background: inherit;
}

.popper__arrow {
  visibility: hidden;
}

.popper__arrow::before {
  content: '';
  visibility: visible;
  transform: rotate(45deg);
}

.popper__content[data-popper-placement^='top'] > .popper__arrow {
  bottom: calc(var(--popper-arrow-height, 8px) / 2 - var(--popper-arrow-height, 8px));
}

.popper__content[data-popper-placement^='bottom'] > .popper__arrow {
  top: calc(var(--popper-arrow-width, 8px) / 2 - var(--popper-arrow-width, 8px));
}

.popper__content[data-popper-placement^='left'] > .popper__arrow {
  right: calc(var(--popper-arrow-width, 8px) / 2 - var(--popper-arrow-width, 8px));
}

.popper__content[data-popper-placement^='right'] > .popper__arrow {
  left: calc(var(--popper-arrow-height, 8px) / 2 - var(--popper-arrow-height, 8px));
}
</style>
