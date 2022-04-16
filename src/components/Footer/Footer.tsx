import React from 'react';

import Button from '../Button';

import './Footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <Button label="Atrás" variant="secondary"/>
    <Button label="Siguiente" variant="primary" icon="chevron-right"/>
  </div>
);

export default Footer;