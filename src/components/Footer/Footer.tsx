import React, { FC } from 'react';

import Button from '../Button';

import { Props } from './Footer.types';
import './Footer.styles.scss';

const Footer: FC<Props> = ({ onClickNext, onClickBack }) => (
  <div className="footer">
    <Button label="Atrás" variant="secondary" onClick={onClickBack} />
    <Button label="Siguiente" variant="primary" icon="chevron-right" onClick={onClickNext} />
  </div>
);

export default Footer;