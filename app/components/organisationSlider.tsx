'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CollabOrganisationIcon from '../../public/icons/CollabOrganisationIcon.svg';
import SlowOrganisationIcon from '../../public/icons/SlowOrganisationIcon.svg';
import SyndicateOrganisationIcon from '../../public/icons/SyndicateOrganisationIcon.svg';
import OrganizationSliderTextBackground from '../../public/icons/OrganizationSliderTextBackground.svg';
import '../css/organisationslider.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OrganisationSlider = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
  };

  const images = [
    {
      icon: CollabOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '8.5rem',
      height: '4.3125rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '8.5rem',
      height: '4.3125rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '8.5rem',
      height: '4.3125rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '8.5rem',
      height: '4.3125rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '13rem',
      height: '6.1875rem',
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'start end'],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 1], [1, 0.1]);
  const translateY = useTransform(scrollYProgress, [0.4, 1], [0, 300]);

  return (
    <>
      <div className="snap-start scroll-mt-20">
        <motion.div ref={targetRef} className="organisation-conatiner relative" style={{ y: translateY, opacity }}>
          <div className="w-full flex justify-center">
            <div className="w-[68.5625rem] pt-[6rem] text-center organisation-slider-header">
              <span>Trusted by over 150 organizations</span>
              <br />
              <span>in more than 50 countries</span>
            </div>
          </div>

          <figure className="absolute top-[5.5rem] left-[47rem] z-10">
            <img src={OrganizationSliderTextBackground.src} className="w-[39.6875rem] h-[10.5rem]" />
          </figure>

          <div className="pt-[7.75rem] px-[5rem]">
            {/* class for border :organisation-border */}
            <Slider {...settings} className="organisation-border">
              {images.map((image, index) => (
                <div key={index} className="">
                  <figure className="h-[6.1875rem] flex items-center ">
                    <img
                      alt={`Slide ${index}`}
                      loading="lazy"
                      decoding="async"
                      className={`w-[${image.width}] h-[${image.height}]`}
                      src={image.icon.src}
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default OrganisationSlider;
