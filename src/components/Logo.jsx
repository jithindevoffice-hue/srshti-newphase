import React from 'react';

const Logo = ({ className = '', width = 56, height = 56 }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M25 50 L50 25 L65 40 L40 65 Z" 
        fill="#00E5FF" 
      />
      <path 
        d="M75 50 L50 75 L35 60 L60 35 Z" 
        fill="#0A66C2" 
      />
    </svg>
  );
};

export default Logo;
