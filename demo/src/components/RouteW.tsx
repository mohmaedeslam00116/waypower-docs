import React from 'react';
import {theme} from '../theme';

/** waypower route-W mark. */
export const RouteW: React.FC<{size?: number}> = ({size = 132}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 132 132">
      <rect width="132" height="132" rx="28" fill={theme.panel} />
      <polyline
        points="27,33 47.5,95 66,56 84.5,95 105,33"
        fill="none"
        stroke="#F4FAFB"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27" cy="33" r="10.5" fill={theme.amber} />
      <circle cx="47.5" cy="95" r="8.5" fill="#F4FAFB" />
      <circle cx="66" cy="56" r="8.5" fill="#F4FAFB" />
      <circle cx="84.5" cy="95" r="8.5" fill="#F4FAFB" />
      <circle cx="105" cy="33" r="10.5" fill="#F4FAFB" />
    </svg>
  );
};
