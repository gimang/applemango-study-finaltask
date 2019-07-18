export default {
  currentMenuId(state) {
    return state.currentMenuId;
  },
  selectedMenu(state) {
    return state.menus.filter((menu) => { return menu.menuId === state.currentMenuId; })[0];
  },
  currentTreeNode(state) {
    return state.currentTreeNode;
  },
};
