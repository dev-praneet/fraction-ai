'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrowIcon from '../../public/icons/LeftArrowIcon.svg';
import RightArrowIcon from '../../public/icons/RightArrowIcon.svg';
import TestimonialsBackground from '../../public/icons/TestimonialsBackground.svg';
import RapidClaimsLogo from '../../public/icons/RapidClaimsLogo.svg';
import MetaAlLogo from '../../public/icons/MetaAlLogo.svg';
import MorphicLogo from '../../public/icons/MorphicLogo.svg';
import BlockQuote from '../../public/icons/BlockQuote.svg';

import '../css/testimonial.css';
import { useRef, useState } from 'react';

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
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
      <figure className="absolute top-[-4.25rem] left-0 z-0">
        <img src={TestimonialsBackground.src} className="w-full h-[59rem]" />
      </figure>
      <div className="relative flex justify-between items-center px-[27.75rem] z-10">
        <figure className="" onClick={() => sliderRef.current?.slickPrev()}>
          <img alt="" loading="lazy" className="w-[3.25rem] h-[3.25rem]" decoding="async" src={LeftArrowIcon.src} />
        </figure>

        <div>
          <span className="testimonial-header-text">Testimonials</span>
        </div>

        <figure className="" onClick={() => sliderRef.current?.slickNext()}>
          <img alt="" loading="lazy" className="w-[3.25rem] h-[3.25rem]" decoding="async" src={RightArrowIcon.src} />
        </figure>
      </div>

      <div className="relative pt-[5.875rem] px-[6rem]">
        <Slider
          {...settings}
          className=""
          ref={sliderRef}
          afterChange={(currentSlide: number) => handleAfterChange((currentSlide + 1) % 3)}
        >
          {testimonials.map((testimonial: any, index: number) => (
            <div key={index} className="">
              {index === currentSlide ? <MainCard testimonial={testimonial} /> : <SideCard testimonial={testimonial} />}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export function MainCard({ testimonial }: any) {
  return (
    <div className="w-[20.5rem] h-[18.9375rem] flex flex-col items-center">
      <figure>
        <img src={testimonial.icon.src} className="w-[6.25rem] h-[6.25rem]" />
      </figure>
      <div className="flex flex-col items-center text-center pt-[1.25rem]">
        <div className="main-card-header">{testimonial.header}</div>
        <div className="main-card-subtext pt-[0.3125rem]">{testimonial.subtext}</div>
        <figure className="pt-[0.25rem]">
          <img src={BlockQuote.src} className="w-[2.25rem] h-[2.25rem]" />
        </figure>
        <div className="main-card-text pt-[0.4375rem]">{testimonial.text}</div>
      </div>
    </div>
  );
}

export function SideCard({ testimonial }: any) {
  return (
    <div className="mt-[3rem] w-[14.375rem] h-[14.0625rem] flex flex-col items-center">
      <figure>
        <img src={testimonial.icon.src} className="w-[5rem] h-[5rem]" />
      </figure>
      <div className="flex flex-col items-center text-center pt-[1rem]">
        <div className="side-card-header">{testimonial.header}</div>
        <div className="side-card-subtext pt-[0.25rem]">{testimonial.subtext}</div>
        <figure>
          <img src={BlockQuote.src} className="w-[1.375rem] h-[1.375rem]" />
        </figure>
        <div className="side-card-text pt-[0.25rem]">{testimonial.text}</div>
      </div>
    </div>
  );
}
