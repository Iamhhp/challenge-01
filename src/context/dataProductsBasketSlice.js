import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // {
  //   id: 1,
  //   amazingTime: '',
  //   models: [
  //     // { id: 1, img: model11,  },
  //     // { id: 2, img: model12,   },
  //     // { id: 3, img: model13,   },
  //     // { id: 4, img: model14,  },
  //   ],
  //   title: 'کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...',
  //   upcomingProduct: false,
  //   brandPalettes: [
  //     { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
  //     { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
  //     { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
  //     { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
  //     { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
  //     { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
  //     { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
  //     { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
  //     { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
  //     { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
  //   ],
  //   isFreeDelivery: true,
  //   rate: 4.8,
  //   stockProduct: 5,
  //   price: 120_000_000,
  //   discountPrice: 0,
  //   modelsColoring: [
  //     {
  //       id: 1,
  //       name: 'زرد',
  //       // icon: iconColorYellow,
  //       colorSizing: [
  //         { id: 1, size: 1, weight: 3.1, number: 0 },
  //         { id: 2, size: 2, weight: 3.1, number: 0 },
  //         { id: 3, size: 3, weight: 3.1, number: -90 },
  //         { id: 4, size: 4, weight: 3.1, number: 0 },
  //         { id: 5, size: 5, weight: 3.1, number: 0 },
  //       ],
  //     {
  //       id: 2,
  //       name: 'رزگلد',
  //       // icon: iconColorPurple,
  //       colorSizing: [
  //         { id: 1, size: 1, weight: 3.1, number: 0 },
  //         { id: 2, size: 2, weight: 3.1, number: 0 },
  //         { id: 3, size: 3, weight: 3.1, number: -10 },
  //         { id: 4, size: 4, weight: 3.1, number: 0 },
  //         { id: 5, size: 5, weight: 3.1, number: 0 },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       name: 'سفید',
  //       // icon: iconColorWhite,
  //       colorSizing: [
  //         { id: 1, size: 1, weight: 3.1, number: 0 },
  //         { id: 2, size: 2, weight: 3.1, number: 0 },
  //         { id: 3, size: 3, weight: 3.1, number: -80 },
  //         { id: 4, size: 4, weight: 3.1, number: 0 },
  //         { id: 5, size: 5, weight: 3.1, number: 0 },
  //       ],
  //     },
  //   ],
  // },
];

const dataProductsBasketSlice = createSlice({
  name: 'dataProductsBasket',
  initialState,
  reducers: {
    addProductItemBasket: (state, action) => {
      const { idProductSelected, idBrandPaletteSelected, idModelColorSelected, idColorSizeSelected, inputNumberItemMeter } = action.payload;
      const dataProductsBasket = JSON.parse(JSON.stringify(state));

      const indexOfProductSelectedInBasket = dataProductsBasket.findIndex((product) => product.id === idProductSelected);
      const dataProductSelected = indexOfProductSelectedInBasket === -1 ? JSON.parse(JSON.stringify(action.payload.dataProductSelected)) : dataProductsBasket[indexOfProductSelectedInBasket];
      dataProductSelected.modelsColoring.some((modelColor, indexModel) => {
        if (modelColor.id === idModelColorSelected) {
          modelColor.colorSizing.some((colorSize, indexColor) => {
            if (colorSize.id === idColorSizeSelected) {
              dataProductSelected.modelsColoring[indexModel].colorSizing[indexColor].number = inputNumberItemMeter;
              return true;
            } else {
              return false;
            }
          });
          return true;
        } else {
          return false;
        }
      });

      // checked number products sizing,delete from basket if all of size numbers = 0
      const isExistInBasketStill = dataProductSelected.modelsColoring.some((modelColor) => {
        return modelColor.colorSizing.some((colorSize) => colorSize.number !== 0);
      });

      if (isExistInBasketStill) {
        // isExistBrandPalette => true;
        dataProductSelected.brandPalettes.some((brandPalette) => {
          if (brandPalette.id === idBrandPaletteSelected) {
            brandPalette.isExistBasket = true;
            return true;
          } else {
            return false;
          }
        });

        if (indexOfProductSelectedInBasket === -1) {
          dataProductsBasket.push(dataProductSelected);
        } else {
          dataProductsBasket[indexOfProductSelectedInBasket] = dataProductSelected;
        }
      } else {
        dataProductsBasket.splice(indexOfProductSelectedInBasket);
      }

      return dataProductsBasket;
    },
  },
});

export const dataBasketReducer = dataProductsBasketSlice.reducer;
export const { addProductItemBasket } = dataProductsBasketSlice.actions;
