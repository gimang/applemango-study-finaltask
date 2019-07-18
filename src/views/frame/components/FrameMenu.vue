<template>
  <!-- Navigation 영역 -->
  <nav>
    <ul style="height: calc(100% - 100px);">
      <li class="logo-wrapper">
        <div>
          <i class="navbar-brand-icon"></i>
          <span>WatchAll</span>
        </div>
      </li>
      <li
        class="unread"
        @click="clickMenu(menuInfo.MENU_PERFORMANCE)"
        :class="checkMenu(menuInfo.MENU_PERFORMANCE.menuId)"
      >
        <div>
          <i class="fa fa-laptop"></i>
          <span>{{menuInfo.MENU_PERFORMANCE.menuLabel}}</span>
        </div>
      </li>
    </ul>
    <ul class="fix-menu" style="height: 100px;">
      <li
        class="unread"
        @click="clickMenu(menuInfo.MENU_SETTINGS)"
        :class="checkMenu(menuInfo.MENU_SETTINGS.menuId)"
      >
        <div>
          <i class="fa fa-laptop"></i>
          <span>{{menuInfo.MENU_SETTINGS.menuLabel}}</span>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import MenuStoreData from '@/data/MenuStoreData';
import MenuInfoData from '@/data/MenuInfoData';

export default {
  name: 'WFrameMenu',
  data() {
    return {
      menuInfo: MenuInfoData,
    };
  },
  computed: {
    currentMenu() {
      return this.$store.getters.currentMenuId;
    },
  },
  methods: {
    checkMenu(menuId) {
      return {
        active: this.currentMenu === menuId,
      };
    },
    clickMenu(menu) {
      this.$store.commit(MenuStoreData.CHANGE_SELECTED_MENU, menu);
    },
  },
};
</script>

<style>
</style>
