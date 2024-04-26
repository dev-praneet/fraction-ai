'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RapidClaimsLogo from '../../../public/icons/RapidClaimsLogo.svg';
import MetaAlLogo from '../../../public/icons/MetaAlLogo.svg';
import MorphicLogo from '../../../public/icons/MorphicLogo.svg';
import BlockQuote from '../../../public/icons/BlockQuote.svg';
import TestimonialBgMobile from '../../../public/icons/TestimonialBgMobile.svg';

import '../../css/testimonial.css';
import { useRef, useState } from 'react';

export default function TestimonialsMobile() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    infinite: true,
    centerPadding: '0px',
    swipeToSlide: true,
    arrows: false,
  };

  const testimonials = [
    {
      icon: MetaAlLogo,
      header: 'Suvam Patra',
      subtext: 'Research Scientist, Meta Al',
      text: '"I was blown away by the extensive library of labelled datasets. This is like a candy store for anyone working in Al"',
    },
    {
      icon: RapidClaimsLogo,
      header: 'Dushyant Mishra',
      subtext: 'CEO, Rapid Claims',
      text: '"Fraction Al is providing exceptional data quality, crucial for our Al-driven medical solutions."',
    },
    {
      icon: MorphicLogo,
      header: 'Jaynti Kanani',
      subtext: 'CEO, Morphic',
      text: '"Fraction Al were really quick in identifying our data needs and were even quicker in providing us the required dataset"',
    },
  ];

  const handleAfterChange = (currentSlide: number) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <div className="relative">
      <figure className="absolute top-[20rem] left-0 z-0">
        <img src={TestimonialBgMobile.src} className="w-full h-[242.051rem]" />
      </figure>

      <div className="relative">
        <div className="absolute w-full h-[0.256rem] bg-[#43325F] top-[86.974rem]"></div>
      </div>

      <div className="flex justify-center items-center pt-[39.231rem] w-full">
        <div className="">
          <span className="testimonial-header-text !text-[11.795rem]">Testimonials</span>
        </div>
      </div>

      <div className="pt-[22.821rem] slick-mobile overflow-hidden max-w-[100rem]">
        <Slider
          {...settings}
          className=""
          ref={sliderRef}
          afterChange={(currentSlide: number) => handleAfterChange(currentSlide)}
        >
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="">
              <MainCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function MainCard({ testimonial }: any) {
  return (
    <div className="w-[84.103rem] pb-[32.964rem] flex flex-col items-center">
      <figure>
        <img src={testimonial.icon.src} className="w-[25.641rem] h-[25.641rem]" />
      </figure>
      <div className="flex flex-col items-center text-center pt-[5.128rem]">
        <div className="main-card-header !text-[6.154rem]">{testimonial.header}</div>
        <div className="main-card-subtext pt-[1.282rem] !text-[3.076rem] !leading-[6.154rem]">
          {testimonial.subtext}
        </div>
        <figure className="pt-[1.023rem]">
          <img src={BlockQuote.src} className="w-[9.231rem] h-[9.231rem]" />
        </figure>
        <div className="main-card-text pt-[1.795rem] w-[84.103rem] !text-[4.615rem] !leading-[6.667rem]">
          {testimonial.text}
        </div>
      </div>
    </div>
  );
}
