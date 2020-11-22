import React from 'react';

const Laptop = ({width = 32, height = 32}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      height={height}
      width={width}
    >
      <rect
        x="48"
        y="96"
        width="416"
        height="304"
        rx="32.14"
        ry="32.14"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M16 416h480"
      />
    </svg>
  );
};

export default Laptop;
