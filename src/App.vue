<script setup></script>

<template>
  <div class="app-container">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
