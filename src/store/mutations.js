import MenuStoreData from '@/data/MenuStoreData';

export default {
  [MenuStoreData.CHANGE_SELECTED_MENU]: (state, payload) => {
    state.currentMenuId = payload.menuId;
  },
  [MenuStoreData.CHANGE_SELECTED_TREE_NODE]: (state, payload) => {
    state.currentTreeNode = payload;
  },
};
