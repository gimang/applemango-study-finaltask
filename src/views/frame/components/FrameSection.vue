<template>
  <div>
    <!-- <WPerformance v-if="selectedMenu.menuId === 'PERFORMANCE'" />
    <WSettings v-else-if="selectedMenu.menuId === 'SETTINGS'" />-->
    <router-view></router-view>
  </div>
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
      this.$router.push({
        name: 'performance',
        params: {
          treeKey: '1',
        },
      });
    },
  },
};
</script>

<style>
</style>
