import { useContext } from 'react';
import { StoreContext } from 'store/helpers/storeContext';
import RootStore from 'store/rootStore';

export const useStores = () => {
  return useContext<RootStore>(StoreContext);
};
