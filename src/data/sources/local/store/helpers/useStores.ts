import { useContext } from 'react';
import { StoreContext } from 'data/sources/local/store/helpers/storeContext';
import RootStore from 'data/sources/local/store/rootStore';

export const useStores = () => {
  return useContext<RootStore>(StoreContext);
};
