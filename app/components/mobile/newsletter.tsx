import NewsletterBgMobile from '../../../public/icons/NewsletterBgMobile.svg';

import '../../css/faq.css';

export default function NewsletterMobile() {
  return (
    <>
      <div className="newsletter-mobile relative pt-[27.692rem]">
        <figure className="absolute z-0">
          <img src={NewsletterBgMobile.src} className="w-[100rem] h-[105.385rem]" />
        </figure>

        <div className="relative flex flex-col items-center w-full z-10">
          <div>
            <div className="pt-[8.205rem] newsletter-header !text-[9.231rem] !leading-[110%]">Newsletter</div>
            <div className="pt-[4.103rem] w-[62.308rem] newsletter-subtext">
              Subscribe to our newsletter to get our updates
            </div>
          </div>

          <div className="pt-[13.333rem] w-[75.385rem]">
            <input
              className="pl-[5.897rem] bg-transparent border-none outline-none input-email"
              placeholder="Email address"
            ></input>
          </div>

          <div className="mt-[12.564rem] relative w-[36.923rem] h-[36.923rem]">
            <div className="absolute solid-bg-parent w-[36.923rem] h-[36.923rem] z-20">
              <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content !text-[4.615rem]">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
