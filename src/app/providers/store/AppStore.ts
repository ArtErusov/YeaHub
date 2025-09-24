import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '@/features/questionsFilters/skills/model/filtersSlice';
import baseApi from '@/shared/api/baseApi';

const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      filters: filtersReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
