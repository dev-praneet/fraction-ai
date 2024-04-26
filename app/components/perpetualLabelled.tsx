import CommunityOwnedLogo from '../../public/icons/CommunityOwnedLogo.svg';
import CheaperLogo from '../../public/icons/CheaperLogo.svg';
import InstantlyAvailaibleLogo from '../../public/icons/InstantlyAvailableLogo.svg';
import SCurve from '../../public/icons/SCurve.svg';
import PerpetualLabelledIconsBackground from '../../public/icons/PerpetualLabelledIconsBackground.svg';
import '../css/perpetuallabelled.css';

export default function PerpetualLabelled() {
  let labelledDatasetText: any = [
    { Icon: InstantlyAvailaibleLogo, Text: 'Instantly Avaialible', subText: 'labelled before-time and continually' },
    { Icon: CheaperLogo, Text: '10x cheaper', subText: 'shared across users' },
    { Icon: CommunityOwnedLogo, Text: 'Community owned', subText: 'tokenized ownership for data licensing revenue' },
  ];

  return (
    <>
      <div className="w-full h-[28.875rem] mt-[13.75rem] relative">
        <figure className="absolute top-0 left-0">
          <img src={SCurve.src} className="w-[100rem] h-[28.875rem]" />
        </figure>

        <figure className="absolute top-[9rem] left-[42.9375rem]">
          <img src={PerpetualLabelledIconsBackground.src} className="w-[10.375rem] h-[20.875rem]" />
        </figure>

        <div className="relative flex">
          <div className="pt-[3rem] pl-[13.75rem]">
            <div className="flex flex-col justify-between w-[24.25rem] h-[15.125rem]">
              <div className="perpetual-labelled-header">
                <p>
                  Perpetual <br /> Labelled
                </p>
              </div>

              <div className="perpetual-labelled-subtext pl-[2.6875rem]">
                <p>
                  Datasets are created proactively based on expected future demand and multiple users can access same
                  datasets for their AI requirements
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[3.75rem] pl-[7.375rem]">
            <div>
              <span className="perpetual-labelled-icon-list-header">
                This proactive model of labelling ensures that datasets are :
              </span>
            </div>

            <div className="pt-[2.0625rem]">
              {labelledDatasetText.map((el: any, index: number) => (
                <div className="flex pt-[1.75rem]" key={index}>
                  <div className="relative">
                    <figure className="relative">
                      <img
                        src={el.Icon.src}
                        className="w-[5rem] h-[5rem]"
                        alt="Dataset Icon"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </div>
                  <div className="text-left pl-[2.5rem] pt-[0.3125rem]">
                    <span className="perpetual-labelled-icon-header">{el.Text}</span>
                    <br />
                    <span className="perpetual-labelled-icon-subtext">{el.subText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
