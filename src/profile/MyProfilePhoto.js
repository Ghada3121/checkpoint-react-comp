import React from 'react';
import './style.css';

const MyProfilePhoto = () => {
  return (
    <center><img className='myphotodiv'
      src="./myphoto.jpg" 
      alt=""
     // style={{ width: '200px', height: '200px', borderRadius: '50%' }}
    />
    </center>
  );
};

export default MyProfilePhoto;