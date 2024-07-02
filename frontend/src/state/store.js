import { configureStore } from "@reduxjs/toolkit";
import productApis from "./apis/productAPi";
import productReducer from "./slices/productSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    [productApis.reducerPath]: productApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApis.middleware),
});

export default store;
