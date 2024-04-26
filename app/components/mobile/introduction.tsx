import MobileNavbarMenu from '../../../public/icons/MobileNavbarMenu.svg';
import loginArrowIcon from '../../../public/icons/LoginIcon.svg';
import FractionAiHeader from '../../../public/icons/FractionAiHeader.svg';
import HeroImage from '../../../public/icons/HeroImageMobile.svg';
import DatasetsTextIcon from '../../../public/icons/DatasetsTextIcon.svg';
import RectangleOne from '../../../public/icons/RectangleOne.svg';
import RectangleTwo from '../../../public/icons/RectangleTwo.svg';
import '../../css/navbar.css';

export default function IntroductionMobile() {
  return (
    <>
      <div>
        <div className="pl-[4.871rem] pr-[4.615rem] py-[5.128rem] flex items-center w-full">
          <figure>
            <img
              alt="logo"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={FractionAiHeader.src}
              className="text-transparent w-[40rem] h-[7.179rem]"
            />
          </figure>
          <div className="pl-[8.718rem]">
            <figure>
              <img
                alt="logo"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                src={MobileNavbarMenu.src}
                className="text-transparent w-[6.153rem] h-[6.153rem]"
              />
            </figure>
          </div>
          <div className="flex pl-[14.615rem]">
            <figure className="">
              <img
                alt="arrow"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                src={loginArrowIcon.src}
                className="text-transparent w-[5.128rem] h-[5.128rem]"
              />
            </figure>
            <div>
              <span className="pl-[2.051rem] !text-[4.615rem] text-login">Log In</span>
            </div>
          </div>
        </div>

        <div className="flex hero-banner-text pl-[10.769rem] pt-[13.333rem]">
          <div className="w-[78.205rem] text-center">
            <span className="text-[9.231rem] leading-[9.231rem]">Perpetual Datasets for AI</span>
          </div>
        </div>

        <div className="pl-[14.102rem] pt-[6.154rem]">
          <div className="flex gap-[5.128rem]">
            <div className="relative solid-bg-parent w-[36.923rem] h-[36.923rem]">
              <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="!text-[4.615rem] circle-button-content">Contribute</span>
              </div>
            </div>
            <div className="relative transparent-bg-parent w-[29.487rem] h-[36.923rem]">
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="!text-[4.615rem] circle-button-content">Stake</span>
              </div>
            </div>
          </div>
        </div>

        <figure className="pt-[11.282rem]">
          <img
            alt="logo"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            src={HeroImage.src}
            className="text-transparent w-[100rem] h-[199.487rem]"
          />
        </figure>

        <div className="w-[43.846rem] ml-[5.128rem] pt-[7.436rem]">
          <div className="hero-banner-problem-header pb-[0.6875rem]">
            <span className="text-[3.077rem] leading-[6.154rem]">problem</span>
          </div>
          <div className="hero-banner-problem-content">
            <span className="text-[3.589rem]">
              GenAi model requires a ton of human <em>labelled data</em> and <em>web2</em> <em>platforms</em> can&apos;t
              keep up
            </span>
          </div>
        </div>

        <figure className="pt-[5.128rem] pl-[46.410rem]">
          <img
            alt="centralized"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            src={DatasetsTextIcon.src}
            className="text-transparent w-[48.205rem] h-[24.615rem]"
          />
        </figure>

        <div className="flex justify-center items-center pt-[20.513rem]">
          <figure className="solution-line">
            <img src={RectangleOne.src} className="w-[11.026rem] h-[0.256rem]" />
          </figure>
          <span className="solution-header px-[3.077rem] !text-[3.077rem] !leading-[6.154rem]">Solutions</span>
          <figure className="solution-line">
            <img src={RectangleTwo.src} className="w-[11.026rem] h-[0.256rem]" />
          </figure>
        </div>
        <div className="flex flex-col items-center text-white pt-[4.102rem]">
          <div className="hero-banner-title !text-[9.231rem]">Enter Perpetual Datasets</div>
          <div className="hero-banner-subtext pt-[4.103rem] !text-[5.128rem] !leading-[7.179rem] w-[89.487rem]">
            The{' '}
            <em>
              <b>100x</b>
            </em>{' '}
            solution offering instant availaiblity, lower price, and community ownership
          </div>
        </div>
      </div>
    </>
  );
}
