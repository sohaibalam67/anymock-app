import React from 'react';

const Watch = ({width = 32, height = 32}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      height={height}
      width={width}
    >
      <rect
        x="112"
        y="112"
        width="288"
        height="288"
        rx="64"
        ry="64"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M176 112V40a8 8 0 018-8h144a8 8 0 018 8v72M336 400v72a8 8 0 01-8 8H184a8 8 0 01-8-8v-72"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export default Watch;
