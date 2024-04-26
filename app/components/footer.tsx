'use client';
import FractionAiFooterLogo from '../../public/icons/FractionAiFooterLogo.svg';
import TwitterIcon from '../../public/icons/TwitterIcon.svg';
import LinkednIcon from '../../public/icons/LinkednIcon.svg';
import FooterBackground from '../../public/icons/FooterBackground.svg';
import '../css/footer.css';

export default function Footer() {
  return (
    <>
      <div className="">
        <div className="">
          <figure className="absolute bottom-[0] right-[0] z-0">
            <img src={FooterBackground.src} className="w-[100rem] h-[34.375rem]" />
          </figure>
        </div>

        <div className="absolute flex justify-between bottom-[15.3125rem] left-[28.4375rem] w-[9rem]">
          <figure>
            <img src={TwitterIcon.src} className="w-[3.25rem] h-[3.25rem]" />
          </figure>
          <figure>
            <img src={LinkednIcon.src} className="w-[3.25rem] h-[3.25rem]" />
          </figure>
        </div>

        <div className="absolute bottom-[0] left-[0]">
          <div className="h-[15.75rem] w-full mb-[2.8125rem] pt-[2.8125rem] pl-[3.75rem] flex">
            <div className="">
              <div>
                <div className="">
                  <figure>
                    <img src={FractionAiFooterLogo.src} alt="logo" className="w-[10.1875rem] h-[1.625rem]" />
                  </figure>
                </div>

                <div className="footer-content">
                  <div className="pt-[2.125rem]">
                    200 Park Ave South, New York, 10003 <br />
                    info@fractionai.xyz
                  </div>
                  <div className="pt-[1.75rem]">© Fraction AI 2023</div>
                </div>
              </div>
            </div>
            <div className="pl-[25.75rem]">
              <div className="pt-[0.1875rem] footer-content-header">Products</div>
              <div className="pt-[1.5rem] footer-content">
                <div>Human Powered Labelling </div>
                <div className="pt[0.25rem]">Auto Verification</div>
                <div className="pt[0.25rem]">Human Powered Verification</div>
                <div className="pt[0.25rem]">Dataset Specific Staking</div>
              </div>
            </div>
            <div className="pl-[6rem]">
              <div className="pt-[0.1875rem] footer-content-header">Enterprises</div>
              <div className="pt-[1.5rem] footer-content">
                <div>Request Datasets</div>
                <div className="pt[0.25rem]">Explore Datasets</div>
                <div className="pt[0.25rem]">Partnership Opportunities</div>
              </div>
            </div>
            <div className="pl-[7.375rem]">
              <div className="pt-[0.1875rem] footer-content-header">Company</div>
              <div className="pt-[1.5rem] footer-content">
                <div>Whitepaper</div>
                <div className="pt[0.25rem]">Litepaper</div>
                <div className="pt[0.25rem]">Blog</div>
                <div className="pt[0.25rem]">Overview</div>
                <div className="pt[0.25rem]">Documentation</div>
                <div className="pt[0.25rem]">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
