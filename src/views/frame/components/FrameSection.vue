<template>
  <WPerformance />
</template>

<script>
import WPerformance from '@/views/performance';

export default {
  name: 'WFrameSection',
  components: {
    WPerformance,
  },
  computed: {
    selectedMenu() {
      return this.$store.getters.selectedMenu;
    },
  },
  watch: {
    selectedMenu(val, oldVal) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>
