import React, { FC } from 'react';

import { IconProps } from './types';

const Chevron: FC<IconProps> = ({ size = 20, className, color = 'white' }) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0 0 92 92"
    enableBackground="new 0 0 92 92"
    xmlSpace="preserve"
    className={className}
  >
    <path
      id="XMLID_439_"
      d="M63,46c0,1.1-0.4,2.1-1.2,2.9l-26,25C35,74.6,34,75,33,75c-1.1,0-2.1-0.4-2.9-1.2c-1.5-1.6-1.5-4.1,0.1-5.7 l23-22.1l-23-22.1c-1.6-1.5-1.6-4.1-0.1-5.7c1.5-1.6,4.1-1.6,5.7-0.1l26,25C62.6,43.9,63,44.9,63,46z"
      fill={color}
    />
  </svg>
);

export default Chevron;