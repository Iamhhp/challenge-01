import './ItemMeter.css';
import iconDelDis from './../../assets/icons/iconDel-Dis.svg';
import iconDelEn from './../../assets/icons/iconDel-En.svg';
import { memo, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProductItemBasket } from '../../context/dataProductsBasketSlice';
import { useSelector } from 'react-redux';
import { addNotificationError, addNotificationMsg } from '../../context/dataNotificationSlice';

const ItemMeter = ({ setIsShowItemMeter, idProductSelected, idBrandPaletteSelected, idModelColorSelected, idColorSizeSelected, number, stock }) => {
  const dataProductSelected = useSelector((state) => state.dataProducts.find((product) => product.id === idProductSelected));
  const optionMeter = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const elementInputNumber = useRef(null);
  const elementItemMeter = useRef(null);
  const changeItemBasket = useDispatch();
  const setNotification = useDispatch();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region Auto Show-MenuItem in First Rending
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      elementItemMeter.current?.classList.add('show');
    }, 10);

    return () => {
      window.setTimeout(timerId);
    };
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region Hide-MenuItem by itSelf
  const clickHandlerHideMenu = (e) => {
    e.stopPropagation();
    const target = e.target.className;
    if (target !== 'overlay-item-meter' && target !== 'btn-close') {
      return;
    }

    elementItemMeter.current.classList.remove('show');
    window.setTimeout(() => {
      setIsShowItemMeter(() => '');
    }, 200);
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //#region FilterNumbering inputNumber ItemMeter
  const keyDownHandlerInput = (e) => {
    const letter = e.target.value.slice(-1);
    const charCode = letter.charCodeAt();
    if (charCode < 48 || charCode > 57) {
      e.target.value = e.target.value.slice(0, -1);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //#region Function Handler Select Number Of Product Selected
  const clickHandlerBtnConfirm = (e) => {
    const inputNumberItemMeter = Number(e.target.previousElementSibling.value);
    if (!inputNumberItemMeter) {
      setNotification(addNotificationMsg('ابتدا تعداد مدنظر را وارد کنید.'));
      return;
    } else if (inputNumberItemMeter > stock) {
      setNotification(addNotificationError('تعداد مد نظر از موجودی در انبار بیشتر است.'));
      return;
    }

    changeItemBasket(addProductItemBasket({ idProductSelected, idBrandPaletteSelected, idModelColorSelected, idColorSizeSelected, inputNumberItemMeter, dataProductSelected }));
    clickHandlerHideMenu({ target: { className: 'btn-close' }, stopPropagation: () => {} });
  };

  const clickHandlerDeleteItemMeter = () => {
    const inputNumberItemMeter = 0;
    if (!number) {
      return;
    }

    changeItemBasket(addProductItemBasket({ idProductSelected, idBrandPaletteSelected, idModelColorSelected, idColorSizeSelected, inputNumberItemMeter, dataProductSelected }));
    clickHandlerHideMenu({ target: { className: 'btn-close' }, stopPropagation: () => {} });
  };

  const clickHandlerOptionNumber = (e) => {
    const inputNumberItemMeter = Number(e.target.innerText);

    changeItemBasket(addProductItemBasket({ idProductSelected, idBrandPaletteSelected, idModelColorSelected, idColorSizeSelected, inputNumberItemMeter, dataProductSelected }));
    clickHandlerHideMenu({ target: { className: 'btn-close' }, stopPropagation: () => {} });
  };

  return (
    <div className='overlay-item-meter' onClick={clickHandlerHideMenu}>
      <div className='item-meter' ref={elementItemMeter}>
        <div className='title'>انتخاب تعداد مد نظر</div>
        <div className='desc'>تعداد مدنظر را از لیست انتخاب و یا در کادر، عدد دلخواه را وارد و تایید نمایید</div>
        <p className='hr' />

        <div className='options-meter'>
          <p className='vr' style={{ right: '7.2rem' }} />
          <p className='vr' style={{ right: '14.4rem' }} />
          <p className='vr' style={{ right: '21.6rem' }} />
          <p className='vr' style={{ right: '28.8rem' }} />

          <div className='icon-del' onClick={clickHandlerDeleteItemMeter}>
            <img src={number === 0 ? iconDelDis : iconDelEn} alt='' />
          </div>
          {optionMeter.map((option, i) => {
            return (
              <div key={i} className='option' onClick={clickHandlerOptionNumber}>
                {option}
              </div>
            );
          })}
        </div>

        <div className='manual-meter'>
          <input type='text' inputMode='decimal' pattern='[0,9]' placeholder='تعداد دلخواه' className='input-number' ref={elementInputNumber} onChange={keyDownHandlerInput} />
          <button type='button' className='btn-confirm' onClick={clickHandlerBtnConfirm}>
            تایید
          </button>
        </div>

        <button type='button' className='btn-close' onClick={clickHandlerHideMenu}>
          بستن
        </button>
      </div>
    </div>
  );
};
export default memo(ItemMeter);
