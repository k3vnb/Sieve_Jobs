import React from 'react';
import logoface from './../assets/logo-face.png';

const footer = {
  height: 10,
  display: 'flex',
  justifyContent: 'center',
  borderTop: '1px solid black',
  marginTop: '5vw',
  width: '100vw',
  backgroundColor: '#ffffff52',
  position: 'fixed',
  bottom: '20'
};
function Footer(){
  return (
    <div style={footer}><style jsx>{`
        img {
          height: 50px;
        }`}</style>
      <img src={logoface} alt='logo' />
    </div>
  );
}

export default Footer;
