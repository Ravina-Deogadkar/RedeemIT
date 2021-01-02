import { combineReducers } from 'redux';
import {offerReducer} from './offerReducer';
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from '@react-native-community/async-storage'
import { createStore } from 'redux';

import storage from 'redux-persist/lib/storage'
const rootreducer=combineReducers(
	{
		offers: offerReducer
	}
);

const persistConfig={
	key:'Redeem',
	storage: storage
};

const persistedReducer=persistReducer(persistConfig,rootreducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
	return store.getState();
};

export {
	getStore,
	getState,
	getPersistor
}

export default {
	getStore,
	getState,
	getPersistor
}
