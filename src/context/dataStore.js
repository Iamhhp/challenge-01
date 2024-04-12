import { configureStore } from '@reduxjs/toolkit';
import { dataProductReducer } from './dataProductsSlice';
import { dataBasketReducer } from './dataProductsBasketSlice';
import { dataNotificationReducer } from './dataNotificationSlice';

export default configureStore({
  reducer: {
    dataProducts: dataProductReducer,
    dataProductsBasket: dataBasketReducer,
    dataNotification: dataNotificationReducer,
  },
});
