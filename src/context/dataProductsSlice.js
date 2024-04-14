import { createSlice } from '@reduxjs/toolkit';
import model1 from './../assets/imgs/model-1.png';
import model2 from './../assets/imgs/model-2.png';
import model3 from './../assets/imgs/model-3.png';
import model4 from './../assets/imgs/model-4.png';
import circle1 from './../assets/imgs/circle-1.png';
import circle2 from './../assets/imgs/circle-2.png';
import circle3 from './../assets/imgs/circle-3.png';
import circle4 from './../assets/imgs/circle-4.png';
import circle5 from './../assets/imgs/circle-5.png';
import iconColorYellow from './../assets/icons/iconColorYellow.svg';
import iconColorWhite from './../assets/icons/iconColorWhite.svg';
import iconColorPurple from './../assets/icons/iconColorPurple.svg';

const initialState = [
  {
    id: 1,
    amazingTime: '',
    models: [
      { id: 1, img: model1 },
      { id: 2, img: model2 },
      { id: 3, img: model3 },
      { id: 4, img: model4 },
    ],
    title: 'کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, color: '#FF0000', isSelected: true },
      { id: 2, color: '#00FF00', isSelected: false },
      { id: 3, color: '#0000FF', isSelected: false },
      { id: 4, color: '#FFFF00', isSelected: false },
      { id: 5, color: '#FF00FF', isSelected: false },
      { id: 6, color: '#00FFFF', isSelected: false },
      { id: 7, color: '#800000', isSelected: false },
      { id: 8, color: '#008000', isSelected: false },
      { id: 9, color: '#000080', isSelected: false },
      { id: 10, color: '#808080', isSelected: false },
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
      { id: 1, img: model2 },
      { id: 2, img: model3 },
      { id: 3, img: model4 },
      { id: 4, img: model1 },
    ],
    title: 'کراپ تاپ استین بلند زنانه',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, img: circle1, color: '', isSelected: true },
      { id: 2, img: circle2, color: '', isSelected: false },
      { id: 3, img: circle3, color: '', isSelected: false },
      { id: 4, img: circle4, color: '', isSelected: false },
      { id: 5, img: circle5, color: '#FF00FF', isSelected: false },
      { id: 6, color: '#00FFFF', isSelected: false },
      { id: 7, color: '#800000', isSelected: false },
      { id: 8, color: '#008000', isSelected: false },
      { id: 9, color: '#000080', isSelected: false },
      { id: 10, color: '#808080', isSelected: false },
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
      { id: 1, img: model3 },
      { id: 2, img: model4 },
      { id: 3, img: model1 },
      { id: 4, img: model2 },
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
      { id: 1, img: model4 },
      { id: 2, img: model1 },
      { id: 3, img: model2 },
      { id: 4, img: model3 },
    ],
    title: 'کراپ آستین بلند زنانه ماییلدا مدل 437-4423 رنگ مشکی ...',
    upcomingProduct: false,
    brandPalettes: [
      { id: 1, color: '#FF0000', isSelected: true },
      { id: 2, color: '#00FF00', isSelected: false },
      { id: 3, color: '#0000FF', isSelected: false },
      { id: 4, color: '#FFFF00', isSelected: false },
      { id: 5, color: '#FF00FF', isSelected: false },
      { id: 6, color: '#00FFFF', isSelected: false },
      { id: 7, color: '#800000', isSelected: false },
      { id: 8, color: '#008000', isSelected: false },
      { id: 9, color: '#000080', isSelected: false },
      { id: 10, color: '#808080', isSelected: false },
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
