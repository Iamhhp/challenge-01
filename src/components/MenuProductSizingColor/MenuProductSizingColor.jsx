import './MenuProductSizingColor.css';
import iconPluse from './../../assets/icons/eva_plus-outline.svg';
import { memo, useEffect, useRef, useState } from 'react';
import ItemMeter from '../ItemMeter/ItemMeter';
import { useSelector } from 'react-redux';

const MenuProductSizingColor = ({ idProductSelected, setIsShowMenuProduct, modelsColoring }) => {
  const [modelColor, setModelColor] = useState(modelsColoring[0]);
  const elementMenuSizing = useRef(null);
  const elementBoxSizing = useRef(null);
  const [isShowItemMeter, setIsShowItemMeter] = useState('');

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region Auto Show-MenuProduct in First Rending
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      elementMenuSizing.current?.classList.add('show');
    }, 10);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region Hide-MenuProduct by itSelf
  const clickHandlerHideMenuProduct = (e) => {
    e.stopPropagation();
    const target = e.target.className;
    if (target !== 'overlay-sizing' && target !== 'btn-close') {
      return;
    }

    elementMenuSizing.current.classList.remove('show');
    window.setTimeout(() => {
      setIsShowMenuProduct(() => false);
    }, 400);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region Hide MenuProduct by ItemMeter
  useEffect(() => {
    if (isShowItemMeter) {
      elementMenuSizing.current.classList.remove('show');
    } else {
      window.setTimeout(() => {
        elementMenuSizing.current?.classList.add('show');
      }, 10);
    }
  }, [isShowItemMeter]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // #region  Effect Element Model Size
  useEffect(() => {
    elementBoxSizing.current?.classList.add('hide');
    const timerId = window.setTimeout(() => {
      elementBoxSizing.current?.classList.remove('hide');
    }, 300);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [modelColor]);

  return (
    <>
      <div className='overlay-sizing' onClick={clickHandlerHideMenuProduct}>
        <div className='menu-sizing' ref={elementMenuSizing}>
          <div className='title'>انتخاب تعداد و اندازه مدنظر</div>
          <p className='line' />

          <div className='sizing-coloring'>
            <div className='sizing' ref={elementBoxSizing}>
              {modelColor.colorSizing?.map((colorSize) => (
                <BoxSize key={colorSize.id} {...colorSize} {...{ idProductSelected, idModelColorSelected: modelColor.id, elementMenuSizing, setIsShowItemMeter }} />
              ))}
            </div>

            <div className='coloring'>
              <div className='title'>:رنگ</div>

              <div className='colors'>
                {modelsColoring.map((color) => (
                  <ModelColoring key={color.id} {...color} {...{ idProductSelected, modelsColoring, setModelColor, modelColor }} />
                ))}
              </div>
            </div>
          </div>

          <button type='button' className='btn-close' onClick={clickHandlerHideMenuProduct}>
            بستن
          </button>
        </div>
      </div>

      {/*  isShowItemMeter  => {idModelColor,idColorSize}  */}
      {isShowItemMeter !== '' && <ItemMeter {...{ setIsShowItemMeter, idProductSelected, ...isShowItemMeter }} />}
    </>
  );
};
export default memo(MenuProductSizingColor);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region Component BoxSize
const BoxSize = ({ id: idColorSizeSelected, idProductSelected, idModelColorSelected, size, weight, stock, elementMenuSizing, setIsShowItemMeter }) => {
  const dataProductGoal = useSelector((state) => state.dataProductsBasket.find((product) => product.id === idProductSelected));
  const number = !dataProductGoal ? 0 : dataProductGoal.modelsColoring[idModelColorSelected - 1].colorSizing[idColorSizeSelected - 1].number;

  const clickHandlerShowItemMeter = () => {
    elementMenuSizing.current.classList.remove('show');
    window.setTimeout(() => {
      setIsShowItemMeter(() => {
        return { idModelColorSelected, idColorSizeSelected, number, stock };
      });
    }, 400);
  };

  return (
    <div className='size'>
      <div className='num-size'>
        <span className='title'>سایز :</span> <span className='number'>{size}</span>
      </div>

      <div className='weight-size'>
        <span className='title'>وزن : </span> <span className='weight'>گرم: {weight}</span>
      </div>

      <div className='add-size' onClick={clickHandlerShowItemMeter}>
        {number === 0 ? <img src={iconPluse} alt='' className='icon' /> : <div className='num-basket'>{number}</div>}
      </div>
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//#region Component ModelColoring
const ModelColoring = ({ id: idModelColor, idProductSelected, name, icon, modelsColoring, setModelColor, modelColor }) => {
  const dataProductGoal = useSelector((state) => state.dataProductsBasket.find((product) => product.id === idProductSelected));
  const isExistBasket = !dataProductGoal ? false : dataProductGoal.modelsColoring[idModelColor - 1].colorSizing.some((colorSize) => colorSize.number !== 0);
  const clickHandlerSelectModelColor = (indexModelColor) => {
    setModelColor(() => modelsColoring[indexModelColor]);
  };

  return (
    <div
      className={`color-${idModelColor} ${modelColor.id === idModelColor && ' color-active'}`}
      onClick={() => {
        clickHandlerSelectModelColor(idModelColor - 1); // index array from 0
      }}
    >
      <img src={icon} alt='' className='icon' />
      <span className='color-name'>{name}</span>

      {isExistBasket && <div className='is-exist-basket' />}
    </div>
  );
};
