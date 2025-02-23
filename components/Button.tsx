"use client";
import { ArrowRight } from '@carbon/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  url: string;
  text: string;
  isButton2?: boolean;
  svgColor?: string;
  // Other props could be added as needed
}

const Button: React.FC<ButtonProps> = ({
  url,
  text,
  isButton2 = false,
  svgColor = '#159B48', // For this variant, the SVG color is fixed as in the example
}) => {
  return !isButton2 ? (
    <Link
      to={url}
      className="relative inline-flex items-center justify-between rounded-md text-white no-underline px-4 py-2 hover:bg-opacity-20 transition-all border border-white border-solid"
    >
      <p className="text-sm lg:text-base">{text}</p>
      <span className="absolute right-2 w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
        <ArrowRight size={19.5} color={svgColor} />
      </span>
      <div className="overlay absolute inset-0 bg-black bg-opacity-10 rounded-md"></div>
    </Link>
  ) : (
    <Link
      to={url}
      className="inline-flex items-center rounded-lg text-white no-underline px-4 py-2 ml-2 border border-white border-solid"
    >
      <p className="text-sm lg:text-base">{text}</p>
      <span className="absolute right-2 w-7 h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
        <ArrowRight size={19.5} color="#159B48" />
      </span>
    </Link>
  );
};

export default Button;
