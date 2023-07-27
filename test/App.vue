<template>
  <div class="popperjs">
    <popper trigger="hover" placement="right">
      <div>Popper Content</div>

      <template #reference>
        <button aria-describedby="tooltip">My button</button>
      </template>
    </popper>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.popperjs {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.6;
}
</style>
