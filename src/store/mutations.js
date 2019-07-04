import MenuStoreData from '@/data/MenuStoreData';

export default {
  [MenuStoreData.CHANGE_SELECTED_MENU]: (state, payload) => {
    state.selectedMenu = payload;
  },
};
