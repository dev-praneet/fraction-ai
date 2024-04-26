'use client';
import FractionAiFooterLogo from '../../../public/icons/FractionAiFooterLogo.svg';
import TwitterIcon from '../../../public/icons/TwitterIcon.svg';
import LinkednIcon from '../../../public/icons/LinkednIcon.svg';
import FooterBackground from '../../../public/icons/FooterBackground.svg';
import '../../css/footer.css';

export default function FooterMobile() {
  return (
    <>
      <div className="mt-[38.974rem] h-[249.744rem]">
        {/* <div className="">
          <figure className="absolute bottom-[0] right-[0] z-0">
            <img src={FooterBackground.src} className="w-[100rem] h-[34.375rem]" />
          </figure>
        </div> */}

        <div className="flex justify-between w-[36.923rem] ml-[31.538rem]">
          <figure>
            <img src={TwitterIcon.src} className="w-[13.333rem] h-[13.333rem]" />
          </figure>
          <figure>
            <img src={LinkednIcon.src} className="w-[13.333rem] h-[13.333rem]" />
          </figure>
        </div>

        <div className="pt-[4.615rem]">
          <div className="w-full h-[65.897rem] border-y-[0.256rem] border-[#43325F]">
            <div className="pl-[12.308rem] pt-[12.308rem]">
              <div className="">
                <figure>
                  <img src={FractionAiFooterLogo.src} alt="logo" className="w-[39.487rem] h-[6.667rem]" />
                </figure>
              </div>

              <div className="pt-[8.718rem] footer-content !text-[4.103rem] !leading-[6.154rem]">
                <div className="">
                  200 Park Ave South, New York, 10003 <br />
                  info@fractionai.xyz
                </div>
                <div className="pt-[7.179rem]">© Fraction AI 2023</div>
              </div>
            </div>
          </div>

          <div className="pl-[12.308rem]">
            <div className="pt-[11.538rem]">
              <div className="footer-content-header !text-[4.103rem] !leading-[4.103rem]">Products</div>
              <div className="pt-[6.154rem] footer-content !text-[4.103rem] !leading-[4.103rem]">
                <div>Human Powered Labelling </div>
                <div className="pt-[3.077rem]">Auto Verification</div>
                <div className="pt-[3.077rem]">Human Powered Verification</div>
                <div className="pt-[3.077rem]">Dataset Specific Staking</div>
              </div>
            </div>
            <div className="pt-[13.333rem]">
              <div className="footer-content-header !text-[4.103rem] !leading-[4.103rem]">Enterprises</div>
              <div className="pt-[6.154rem] footer-content !text-[4.103rem] !leading-[4.103rem]">
                <div>Request Datasets</div>
                <div className="pt-[3.077rem]">Explore Datasets</div>
                <div className="pt-[3.077rem]">Partnership Opportunities</div>
              </div>
            </div>
            <div className="pt-[13.333rem]">
              <div className="footer-content-header !text-[4.103rem] !leading-[4.103rem]">Company</div>
              <div className="pt-[6.154rem] footer-content !text-[4.103rem] !leading-[4.103rem]">
                <div>Whitepaper</div>
                <div className="pt-[3.077rem]">Litepaper</div>
                <div className="pt-[3.077rem]">Blog</div>
                <div className="pt-[3.077rem]">Overview</div>
                <div className="pt-[3.077rem]">Documentation</div>
                <div className="pt-[3.077rem]">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
