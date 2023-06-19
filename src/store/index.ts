import { configureStore } from '@reduxjs/toolkit';
import formDataSlice from './slices/form-slice';
import navigationSlice from './slices/navigation-slice';
import { formApi } from '../services/form-service';

export const store = configureStore({
	reducer: {
		formData: formDataSlice,
		navigation: navigationSlice,
		[formApi.reducerPath]: formApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(formApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
