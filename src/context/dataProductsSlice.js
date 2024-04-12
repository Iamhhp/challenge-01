import { createSlice } from '@reduxjs/toolkit';
import model11 from './../assets/imgs/1-1.jpg';
import model12 from './../assets/imgs/1-2.jpg';
import model13 from './../assets/imgs/1-3.jpg';
import model14 from './../assets/imgs/1-4.jpg';
import model21 from './../assets/imgs/2-1.jpg';
import model22 from './../assets/imgs/2-2.jpg';
import model23 from './../assets/imgs/2-3.jpg';
import model24 from './../assets/imgs/2-4.jpg';
import model31 from './../assets/imgs/3-1.jpg';
import model32 from './../assets/imgs/3-2.jpg';
import model33 from './../assets/imgs/3-3.jpg';
import model34 from './../assets/imgs/3-4.jpg';
import model41 from './../assets/imgs/4-1.jpg';
import model42 from './../assets/imgs/4-2.jpg';
import model43 from './../assets/imgs/4-3.jpg';
import model44 from './../assets/imgs/4-4.jpg';
import iconColorYellow from './../assets/icons/iconColorYellow.svg';
import iconColorWhite from './../assets/icons/iconColorWhite.svg';
import iconColorPurple from './../assets/icons/iconColorPurple.svg';

const initialState = [
  {
    id: 1,
    amazingTime: '',
    models: [
      { id: 1, img: model11, isExistBasket: true },
      { id: 2, img: model12, isExistBasket: false },
      { id: 3, img: model13, isExistBasket: false },
      { id: 4, img: model14, isExistBasket: true },
    ],
    title: 'کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
      { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
      { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
      { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
      { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
      { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
      { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
      { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
      { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
      { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
    ],
    isFreeDelivery: true,
    rate: 4.8,
    stockProduct: 5,
    price: 120_000_000,
    discountPrice: 0,
    modelsColoring: [
      {
        id: 1,
        name: 'زرد',
        icon: iconColorYellow,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 2,
        name: 'رزگلد',
        icon: iconColorPurple,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 3,
        name: 'سفید',
        icon: iconColorWhite,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
    ],
  },
  {
    id: 2,
    amazingTime: '',
    models: [
      { id: 1, img: model21, isExistBasket: true },
      { id: 2, img: model22, isExistBasket: false },
      { id: 3, img: model23, isExistBasket: false },
      { id: 4, img: model24, isExistBasket: true },
    ],
    title: 'کراپ تاپ استین بلند زنانه',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
      { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
      { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
      { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
      { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
      { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
      { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
      { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
      { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
      { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
    ],
    isFreeDelivery: false,
    rate: 4.8,
    stockProduct: 5,
    price: 120_000_000,
    discountPrice: 0,
    modelsColoring: [
      {
        id: 1,
        name: 'زرد',
        icon: iconColorYellow,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 2,
        name: 'رزگلد',
        icon: iconColorPurple,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 3,
        name: 'سفید',
        icon: iconColorWhite,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
    ],
  },
  {
    id: 3,
    amazingTime: '',
    models: [
      { id: 1, img: model31, isExistBasket: false },
      { id: 2, img: model32, isExistBasket: true },
      { id: 3, img: model33, isExistBasket: true },
      { id: 4, img: model34, isExistBasket: false },
    ],
    title: 'کراپ تاپ آستین بلند زنانه',
    upcomingProduct: true,
    // brandPalettes: [],
    // isFreeDelivery: false,
    // rate: 0,
    // stockProduct: 0,
    // price: 0,
    // discountPrice: 0,
  },
  {
    id: 4,
    amazingTime: '02:24:36',
    models: [
      { id: 1, img: model41, isExistBasket: true },
      { id: 2, img: model42, isExistBasket: true },
      { id: 3, img: model43, isExistBasket: false },
      { id: 4, img: model44, isExistBasket: true },
    ],
    title: 'کراپ آستین بلند زنانه ماییلدا مدل 437-4423 رنگ مشکی ...',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
      { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
      { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
      { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
      { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
      { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
      { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
      { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
      { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
      { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
    ],
    isFreeDelivery: true,
    rate: 4.8,
    stockProduct: 0,
    price: 80_000_000,
    discountPrice: 20,
    modelsColoring: [
      {
        id: 1,
        name: 'زرد',
        icon: iconColorYellow,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 2,
        name: 'رزگلد',
        icon: iconColorPurple,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
      {
        id: 3,
        name: 'سفید',
        icon: iconColorWhite,
        colorSizing: [
          { id: 1, size: 1, weight: 3.1, number: 0, stock: 100 },
          { id: 2, size: 2, weight: 3.1, number: 0, stock: 100 },
          { id: 3, size: 3, weight: 3.1, number: 0, stock: 100 },
          { id: 4, size: 4, weight: 3.1, number: 0, stock: 100 },
          { id: 5, size: 5, weight: 3.1, number: 0, stock: 100 },
        ],
      },
    ],
  },
];

const dataProductsSlice = createSlice({
  name: 'dataProducts',
  initialState,
  reducers: {
    changeSelectedBrandPalette: (state, action) => {
      const { idBrandPalette, idProductSelected } = action.payload;
      const newState = JSON.parse(JSON.stringify(state));
      newState.forEach((product) => {
        if (product.id === idProductSelected) {
          product.brandPalettes.forEach((palette) => {
            if (palette.id === idBrandPalette) {
              palette.isSelected = true;
            } else {
              palette.isSelected = false;
            }
          });
        }
      });

      return newState;
    },
  },
});

export const dataProductReducer = dataProductsSlice.reducer;
export const { changeSelectedBrandPalette } = dataProductsSlice.actions;
