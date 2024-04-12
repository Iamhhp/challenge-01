import './PLP.css';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';
import Header from '../../components/Header/Header';

const PLP = () => {
  // const dataCard = [
  //   {
  //     id: 1,
  //     amazingTime: '',
  //     models: [
  //       { id: 1, img: model11, isExistBasket: true },
  //       { id: 2, img: model12, isExistBasket: false },
  //       { id: 3, img: model13, isExistBasket: false },
  //       { id: 4, img: model14, isExistBasket: true },
  //     ],
  //     title: 'کراپ‌تاپ آستین بلند زنانه ماییلدا مدل 4423-437 رنگ مشکی ...',
  //     upcomingProduct: false,
  //     brandPalettes: [
  //       { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
  //       { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
  //       { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
  //       { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
  //       { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
  //       { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
  //       { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
  //       { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
  //       { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
  //       { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
  //     ],
  //     isFreeDelivery: true,
  //     rate: 4.8,
  //     stockProduct: 5,
  //     price: 120_000_000,
  //     discountPrice: 0,
  //   },
  //   {
  //     id: 2,
  //     amazingTime: '',
  //     models: [
  //       { id: 1, img: model21, isExistBasket: true },
  //       { id: 2, img: model22, isExistBasket: false },
  //       { id: 3, img: model23, isExistBasket: false },
  //       { id: 4, img: model24, isExistBasket: true },
  //     ],
  //     title: 'کراپ تاپ استین بلند زنانه',
  //     upcomingProduct: false,
  //     brandPalettes: [
  //       { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
  //       { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
  //       { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
  //       { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
  //       { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
  //       { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
  //       { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
  //       { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
  //       { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
  //       { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
  //     ],
  //     isFreeDelivery: false,
  //     rate: 4.8,
  //     stockProduct: 5,
  //     price: 120_000_000,
  //     discountPrice: 0,
  //   },
  //   {
  //     id: 3,
  //     amazingTime: '',
  //     models: [
  //       { id: 1, img: model31, isExistBasket: false },
  //       { id: 2, img: model32, isExistBasket: true },
  //       { id: 3, img: model33, isExistBasket: true },
  //       { id: 4, img: model34, isExistBasket: false },
  //     ],
  //     title: 'کراپ تاپ آستین بلند زنانه',
  //     upcomingProduct: true,
  //     // brandPalettes: [],
  //     // isFreeDelivery: false,
  //     // rate: 0,
  //     // stockProduct: 0,
  //     // price: 0,
  //     // discountPrice: 0,
  //   },
  //   {
  //     id: 4,
  //     amazingTime: '02:24:36',
  //     models: [
  //       { id: 1, img: model41, isExistBasket: true },
  //       { id: 2, img: model42, isExistBasket: true },
  //       { id: 3, img: model43, isExistBasket: false },
  //       { id: 4, img: model44, isExistBasket: true },
  //     ],
  //     title: 'کراپ آستین بلند زنانه ماییلدا مدل 437-4423 رنگ مشکی ...',
  //     upcomingProduct: false,
  //     brandPalettes: [
  //       { id: 1, color: '#FF0000', isExistBasket: true, isSelected: true },
  //       { id: 2, color: '#00FF00', isExistBasket: false, isSelected: false },
  //       { id: 3, color: '#0000FF', isExistBasket: true, isSelected: false },
  //       { id: 4, color: '#FFFF00', isExistBasket: false, isSelected: false },
  //       { id: 5, color: '#FF00FF', isExistBasket: true, isSelected: false },
  //       { id: 6, color: '#00FFFF', isExistBasket: false, isSelected: false },
  //       { id: 7, color: '#800000', isExistBasket: true, isSelected: false },
  //       { id: 8, color: '#008000', isExistBasket: false, isSelected: false },
  //       { id: 9, color: '#000080', isExistBasket: true, isSelected: false },
  //       { id: 10, color: '#808080', isExistBasket: false, isSelected: false },
  //     ],
  //     isFreeDelivery: true,
  //     rate: 4.8,
  //     stockProduct: 0,
  //     price: 80_000_000,
  //     discountPrice: 20,
  //     sizing: [
  //       { size: 1, weight: 3.1, number: 0 },
  //       { size: 2, weight: 3.1, number: 23 },
  //       { size: 3, weight: 3.1, number: 0 },
  //       { size: 4, weight: 3.1, number: 5 },
  //       { size: 5, weight: 3.1, number: 0 },
  //     ],
  //   },
  // ];
  const dataCard = useSelector((state) => state.dataProducts);
  return (
    <div className='page-plp'>
      <Header />

      <main className='body'>
        {dataCard.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </main>
    </div>
  );
};
export default PLP;
