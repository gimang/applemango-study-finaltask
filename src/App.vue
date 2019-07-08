<template>
  <app-frame></app-frame>
</template>

<script>
import AppFrame from '@/views/frame/AppFrame';
import MenuRouter from '@/router/MenuRouter';

export default {
  name: 'app',
  components: {
    AppFrame,
  },
  router: MenuRouter,
};
</script>

<style>
</style>
