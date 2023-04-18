'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
interface Props {
  children: React.ReactNode;
}
export default function MultiCarousel({ children }: Props) {
  return (
    <Carousel infinite autoPlay responsive={responsive} itemClass='m-2'>
      {children}
    </Carousel>
  );
}
