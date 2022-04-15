import React, { FC } from 'react';

import Steps from './Steps';
import './Header.styles.scss';

const MOCKED_STEPS = [
  { stepNumber: 1, finished: false },
  { stepNumber: 2, finished: false },
  { stepNumber: 3, finished: false },
];

const Header: FC = () => (
  <div className="app-header">
    <Steps steps={MOCKED_STEPS} currentStep={1} />
  </div>
);

export default Header;