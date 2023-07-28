<template>
  <div class="popperjs">
    <v-popper
      trigger="hover"
      placement="top"
      transition="fade"
      :append-to-body="true"
    >
      <div>Popper Content</div>

      <template #reference>
        <button aria-describedby="tooltip">My button</button>
      </template>
    </v-popper>
    <v-popper
      trigger="hover"
      placement="bottom"
      transition="fade"
      :append-to-body="true"
    >
      <div>Popper Content</div>

      <template #reference>
        <button aria-describedby="tooltip">My button</button>
      </template>
    </v-popper>
    <v-popper
      trigger="clickToOpen"
      placement="left"
      transition="fade"
      :append-to-body="true"
    >
      <div>Popper Content</div>

      <template #reference>
        <button aria-describedby="tooltip">My button</button>
      </template>
    </v-popper>
    <v-popper
      trigger="clickToToggle"
      placement="right"
      transition="fade"
      :append-to-body="true"
    >
      <div>Popper Content</div>

      <template #reference>
        <button aria-describedby="tooltip">My button</button>
      </template>
    </v-popper>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.popperjs {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.6;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
  min-height: 500px;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
