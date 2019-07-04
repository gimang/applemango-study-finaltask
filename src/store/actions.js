import MenuStoreData from '@/data/MenuStoreData';

export default {
  [MenuStoreData.CHANGE_SELECTED_MENU]: (store, payload) => {
    store.commit(MenuStoreData.CHANGE_SELECTED_MENU, payload);
  },
};
