import { createContext } from 'react';
import RootStore from 'data/sources/local/store/rootStore';
import { createStore } from './createStore';

const contextStoreValue = createStore();
export const StoreContext = createContext<RootStore>(contextStoreValue);
export const StoreProvider = StoreContext.Provider;
