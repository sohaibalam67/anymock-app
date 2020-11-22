import React from 'react';

const Shape = ({width = 32, height = 32}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      height={height}
      width={width}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
      />
    </svg>
  );
};

export default Shape;
