import { createContext } from 'react';
import RootStore from 'store/rootStore';
import { createStore } from './createStore';

const contextStoreValue = createStore();
export const StoreContext = createContext<RootStore>(contextStoreValue);
export const StoreProvider = StoreContext.Provider;
