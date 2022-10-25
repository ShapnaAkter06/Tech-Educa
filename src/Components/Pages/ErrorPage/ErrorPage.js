import React from 'react';
import image404 from '../../../assets/404.gif'

const ErrorPage = () => {
    return (
      <div className='flex justify-center items-center'>
        <img src={image404} alt="" />
      </div>
  
    );
};

export default ErrorPage;