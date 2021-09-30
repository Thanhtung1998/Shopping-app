import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import ProductReducer from '../redux/Slice/product/productSlice';
import { authReducer } from '../redux/Slice/authUser/userSlice';
import rootSaga from './rootSaga';


const rootReducer = {
  user: authReducer,
  product: ProductReducer,
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
  reducer: rootReducer
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

