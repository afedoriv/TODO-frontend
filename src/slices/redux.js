import {
	configureStore,
	combineReducers,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
	persistStore,
	FLUSH,
	PURGE,
	PAUSE,
	REGISTER,
	REHYDRATE,
	PERSIST,
	persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './authSlice';

const persistConfig = { key: 'root', storage, version: 1 };
const rootReducer = combineReducers({
	auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [
					FLUSH,
					PURGE,
					PAUSE,
					REGISTER,
					REHYDRATE,
					PERSIST,
				],
			},
		}),
});

export const persistor = persistStore(store);
