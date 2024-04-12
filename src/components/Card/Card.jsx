import './Card.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import iconDelivery from './../../assets/icons/delivery.svg';
import iconVector from './../../assets/icons/Vector.svg';
import iconBoxOpen from './../../assets/icons/system-uicons_box-open.svg';
import iconAddBasket from './../../assets/icons/add-basket.svg';
import iconTimer from './../../assets/icons/timer.svg';
import iconNotification from './../../assets/icons/notification.svg';
import { useDispatch } from 'react-redux';
import { memo, useState } from 'react';
import { changeSelectedBrandPalette } from '../../context/dataProductsSlice';
import MenuProductSizingColor from '../MenuProductSizingColor/MenuProductSizingColor';

const Card = ({ id: idProductSelected, amazingTime, models, title, upcomingProduct, brandPalettes, rate, isFreeDelivery, stockProduct, price, discountPrice, modelsColoring }) => {
  const [isShowMenuProduct, setIsShowMenuProduct] = useState(false);

  const clickHandlerAddProductBasket = () => {
    if (upcomingProduct) {
      return;
    }

    setIsShowMenuProduct(() => true);
  };

  return (
    <>
      <div className='card'>
        <div className='amazing-time'>
          {amazingTime && (
            <>
              <span className='time'>{amazingTime}</span>
              <span className='text'>شگفت انگیز </span>
            </>
          )}
        </div>

        <div className='show-models'>
          <Swiper
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='my-swiper-models'
          >
            {models.map((model) => {
              return (
                <SwiperSlide key={model.id}>
                  <img src={model.img} alt='' className='img-model' />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className='btn-add-basket' onClick={clickHandlerAddProductBasket}>
            <img src={iconAddBasket} alt='' className='icon' />
          </div>
        </div>

        <h3 className='title'>{title}</h3>

        {upcomingProduct ? (
          <div className='upcoming-product'>
            <div className='coming'>
              <img src={iconTimer} alt='' className='icon' />
              به زودی...
            </div>

            <div className='available-notification'>
              <img src={iconNotification} alt='' className='icon' />
              موجود شد خبرم کن
            </div>
          </div>
        ) : (
          <>
            <div className='brand-palettes'>
              <Swiper modules={[FreeMode]} slidesPerView={5.7} spaceBetween={0} className='my-swiper-palettes'>
                {brandPalettes.map((palette) => {
                  return (
                    <SwiperSlide key={palette.id}>
                      <BrandPalette {...{ ...palette, idProductSelected }} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className='blur-right'></div>
            </div>

            <div className='rate-delivery'>
              {isFreeDelivery ? (
                <div className='free-delivery'>
                  <span className='text'>ارسال رایگان</span> <img src={iconDelivery} alt='' className='icon' />
                </div>
              ) : (
                <div className='stuck-product'>
                  <span className='text'>{`تنها ${stockProduct} عدد در انبار باقی مانده`}</span> <img src={iconBoxOpen} alt='' className='icon' />
                </div>
              )}

              <div className='rate'>
                <img src={iconVector} alt='' className='icon' /> <span className='number'>{rate}</span>
              </div>
            </div>
            <div className='price'>
              <div className='main-price'>
                <span className='unit'>تومان</span> <span className='number'>{((price * (100 - discountPrice)) / 100).toLocaleString()}</span>
              </div>

              <div className='discount-price'>
                {discountPrice !== 0 && (
                  <>
                    <span className='discount'>%{discountPrice}</span>
                    <span className='number'>{price.toLocaleString()}</span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {isShowMenuProduct && <MenuProductSizingColor {...{ setIsShowMenuProduct, idProductSelected, modelsColoring }} />}
    </>
  );
};
export default memo(Card);

const BrandPalette = ({ id: idBrandPalette, idProductSelected, color, isSelected, isExistBasket }) => {
  const setSelectedBrandPalette = useDispatch();

  const clickHandlerBrandPalette = () => {
    setSelectedBrandPalette(changeSelectedBrandPalette({ idBrandPalette, idProductSelected }));
  };

  return (
    <>
      <div className={`palette ${isSelected && 'palette-active'}`} style={{ background: color, backgroundClip: 'content-box' }} onClick={clickHandlerBrandPalette} />
      {isExistBasket && <div className='is-exit-basket' />}
    </>
  );
};
