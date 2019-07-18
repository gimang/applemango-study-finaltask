<template>
  <div>
    <router-view class="fit-main-wrapper"></router-view>
  </div>
</template>

<script>
import MenuInfoData from '@/data/MenuInfoData';

export default {
  name: 'WFrameSection',
  created() {
    this.$router.push(this.getMenuRouterData(MenuInfoData.MENU_PERFORMANCE));
  },
  computed: {
    selectedMenu() {
      return this.$store.getters.selectedMenu;
    },
  },
  watch: {
    selectedMenu(val) {
      this.$router.push(this.getMenuRouterData(val));
    },
  },
  methods: {
    getMenuRouterData({ menuId, routerName }) {
      let params = {};

      if (menuId === MenuInfoData.MENU_PERFORMANCE.menuId) {
        params = {
          treekey: this.$store.getters.currentTreeNode.tempTreeKey,
        };
      }

      return {
        name: routerName,
        params,
      };
    },
  },
};
</script>

<style>
</style>
