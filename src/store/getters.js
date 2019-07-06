export default {
  currentMenuId(state) {
    return state.currentMenuId;
  },
  selectedMenu(state) {
    return state.menus.filter((menu) => menu.menuId === state.currentMenuId)[0];
  },
};
