import './Header.css';
import iconArrowRight from './../../assets/icons/arrow-right.svg';
import iconBasket from './../../assets/icons/bag-2.svg';
import iconHome from './../../assets/icons/home-2.svg';
import iconMore from './../../assets/icons/more.svg';
import iconSearch from './../../assets/icons/search-normal.svg';
import Notification from '../Notification/Notification';
import { useSelector } from 'react-redux';

const Header = () => {
  const notification = useSelector((state) => state.dataNotification);
  const numberProductBasket = useSelector((state) => state.dataProductsBasket.length);

  return (
    <header>
      {notification.map((noti, index) => (
        <Notification key={noti.id} {...{ ...noti, index }} />
      ))}

      <nav className='header'>
        <section className='left'>
          <ul>
            <li>
              <a href='' className='menu'>
                <img src={iconMore} alt='' />
              </a>
            </li>
            <li>
              <a href='' className='search'>
                <img src={iconSearch} alt='' />
              </a>
            </li>
          </ul>
        </section>

        <section className='right'>
          <ul>
            <li>
              <a href='' className='basket'>
                <img src={iconBasket} alt='' />
                {numberProductBasket !== 0 && <div className='number-exist-basket'>{numberProductBasket}</div>}
              </a>
            </li>

            <li>
              <a href='' className='home'>
                <img src={iconHome} alt='' />
              </a>
            </li>

            <li>
              <a href='' className='back'>
                <img src={iconArrowRight} alt='' />
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
export default Header;
