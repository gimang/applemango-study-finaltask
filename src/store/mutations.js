import MenuStoreData from '@/data/MenuStoreData';

export default {
  [MenuStoreData.CHANGE_SELECTED_MENU]: (state, payload) => {
    state.currentMenuId = payload.menuId;
  },
};
