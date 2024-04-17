import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer, {authSliceName} from "./authSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    [authSliceName]: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
