import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Notification.css';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNotification } from '../../context/dataNotificationSlice';

const Notification = ({ id, index, msg, backgroundColor }) => {
  const elementNotification = useRef();
  const setNotification = useDispatch();

  useEffect(() => {
    window.setTimeout(() => {
      const elementTimeBar = elementNotification.current.children[1];
      elementNotification.current?.classList.add('notification-show');
      elementNotification.current.style.top = `${index * 40 + 90}px`;
      elementTimeBar.style.width = '0px';
    }, 10);

    window.setTimeout(() => {
      clickHandlerCloseNotification();
    }, 3000);

    // return () => {
    //   window.clearTimeout(timerId);
    // };
  }, []);

  const clickHandlerCloseNotification = () => {
    if (elementNotification.current) {
      elementNotification.current?.classList.remove('notification-show');
      elementNotification.current.style.top = '';

      window.setTimeout(() => {
        setNotification(deleteNotification(id));
      }, 500);
    }
  };

  return (
    <div className='notification' style={{ backgroundColor }} ref={elementNotification}>
      <div className='message'>
        {msg}

        <div className='icon-close-notification' onClick={clickHandlerCloseNotification}>
          <IoIosCloseCircleOutline />
        </div>
      </div>

      <div className='time-out-bar' />
    </div>
  );
};
export default Notification;
