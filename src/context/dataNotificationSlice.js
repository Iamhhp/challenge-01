import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // {
  //   id: 1,
  //   msg: 'Iamhhp-01',
  //   colorMsg: 'green',
  // },
];

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotificationMsg: (state, action) => {
      return [...state, { id: Math.random(), backgroundColor: '#00B31D', msg: action.payload }];
    },

    addNotificationError: (state, action) => {
      return [...state, { id: Math.random(), backgroundColor: '#ED303D', msg: action.payload }];
    },

    deleteNotification: (state, action) => {
      return state.filter((noti) => noti.id !== action.payload);
    },
  },
});

export const dataNotificationReducer = notificationSlice.reducer;
export const { addNotificationError, addNotificationMsg, deleteNotification } = notificationSlice.actions;
