'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CollabOrganisationIcon from '../../../public/icons/CollabOrganisationIcon.svg';
import SlowOrganisationIcon from '../../../public/icons/SlowOrganisationIcon.svg';
import SyndicateOrganisationIcon from '../../../public/icons/SyndicateOrganisationIcon.svg';
import OrganizationSliderTextBackground from '../../../public/icons/OrganizationSliderTextBackground.svg';
import '../../css/organisationslider.css';

export default function OrganisationSliderMobile() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 2,
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
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: CollabOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SlowOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
    {
      icon: SyndicateOrganisationIcon,
      width: '21.576rem',
      height: '8.443rem',
    },
  ];

  return (
    <>
      <div className="">
        <div className="mt-[38.974rem] organisation-conatiner-mobile relative">
          <div className="flex justify-center">
            <div className="w-[89.744rem] pt-[14.359rem] text-center organisation-slider-header">
              <span className="text-[6.41rem] leading-[110%]">
                Trusted by over
                <br />
                150 organizations in
                <br />
                more than 50 countries
              </span>
            </div>
          </div>

          <figure className="absolute top-[7.5rem] left-[35rem] z-10">
            <img src={OrganizationSliderTextBackground.src} className="w-[162.821rem] h-[43.077rem]" />
          </figure>

          <div className="pt-[20.513rem] px-[5.128rem] overflow-hidden max-w-[100rem]">
            <Slider {...settings} className="organisation-border">
              {images.map((image, index) => (
                <div key={index} className="">
                  <figure className="h-[32.051rem] flex items-center ">
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
        </div>
      </div>
    </>
  );
}
