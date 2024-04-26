'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InvestorOneIcon from '../../../public/icons/InvestorOneIcon.svg';
import InvestorTwoIcon from '../../../public/icons/InvestorTwoIcon.svg';
import InvestorBackground from '../../../public/icons/InvestorBackground.svg';
import '../../css/carousel.css';

const SimpleSlider = () => {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 12,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  let images = [
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
    InvestorTwoIcon,
    InvestorOneIcon,
  ];

  return (
    <>
      {/* <div className=''>
        <div className="relative" >
          <div className="absolute flex" style={{ width: '100%', height: '118%' }}>
            <div className="global-custom-border investor-first-border" ></div>
            <div className="global-custom-border investor-second-border" style={{ border: '1px solid var(--Purple-800, #43325F)' }}></div>
            <div className="global-custom-border investor-third-border" ></div>
          </div>

          <div className="investors_content">
            <div className="px-10" style={{ zIndex: '10', marginTop: '-11px' }}>
              <span>Investors</span>
            </div>
          </div>
          <div className="px-10">
            <div className='investor-carousel-slider'>
              <div style={{ width: '100%'}}>
                <Slider {...settings} className="">
                  {images.map((image, index) => (
                    <figure key={index}>
                      <img src={image.src} alt={`Slide ${index}`} style={{ width: '60px', height: '60px' }} />
                    </figure>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='relative'>
        <figure className='absolute top-0 left-0'>
          <img src={InvestorBackground.src} className="w-[100rem] h-[22.5625rem]"/>
        </figure>
        <div className="relative px-[4rem]">
            <div className='investor-logo-carousel'>
              <div style={{ width: '100%'}}>
                <Slider {...settings} className="">
                  {images.map((image, index) => (
                    <figure key={index}>
                      <img src={image.src} alt={`Slide ${index}`} style={{ width: '6rem', height: '6rem' }} />
                    </figure>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
export default SimpleSlider;
