'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import InvestorOneIcon from '../../../public/icons/InvestorOneIcon.svg';
import InvestorTwoIcon from '../../../public/icons/InvestorTwoIcon.svg';
import InvestorBackgroundMobile from '../../../public/icons/InvestorBackgroundMobile.svg';
import '../../css/carousel.css';

export default function InvestorsMobile() {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
  };

  const images = [InvestorOneIcon, InvestorTwoIcon, InvestorOneIcon, InvestorTwoIcon, InvestorOneIcon, InvestorTwoIcon];

  return (
    <>
      <div className="w-[100rem] h-[131.538rem] pt-[37.436rem]">
        <div className="relative">
          <figure className="absolute top-0 left-0">
            <img src={InvestorBackgroundMobile.src} className="w-[100rem] h-[94.103rem]" />
          </figure>

          <div className="relative px-[5.769rem] pt-[36.923rem]">
            <div className="investor-logo-carousel">
              <div style={{ width: '100%' }}>
                <Slider {...settings} className="">
                  {images.map((image, index) => (
                    <figure key={index}>
                      <img src={image.src} alt={`Slide ${index}`} style={{ width: '17.436rem', height: '17.436rem' }} />
                    </figure>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
