import CommunityOwnedLogo from '../../../public/icons/CommunityOwnedLogo.svg';
import CheaperLogo from '../../../public/icons/CheaperLogo.svg';
import InstantlyAvailaibleLogo from '../../../public/icons/InstantlyAvailableLogo.svg';
import PerpetualLabelledIconsBackground from '../../../public/icons/PerpetualLabelledIconsBackground.svg';
import '../../css/perpetuallabelled.css';

export default function PerpetualLabelledMobile() {
  const labelledDatasetText: any = [
    { Icon: InstantlyAvailaibleLogo, Text: 'Instantly Avaialible', subText: 'labelled before-time and continually' },
    { Icon: CheaperLogo, Text: '10x cheaper', subText: 'shared across users' },
    { Icon: CommunityOwnedLogo, Text: 'Community owned', subText: 'tokenized ownership for data licensing revenue' },
  ];
  return (
    <>
      <div className="w-full pt-[34.359rem]">
        <div className="pl-[12.821rem]">
          <div className="w-[82.051rem]">
            <div className="perpetual-labelled-header">
              <p className="text-[11.795rem]">
                Perpetual <br /> Labelled
              </p>
            </div>

            <div className="pt-[7.179rem] perpetual-labelled-subtext">
              <p className="text-[4.103rem] leading-[7.179rem] text-left">
                Datasets are created proactively based on expected future demand and multiple users can access same
                datasets for their AI requirements
              </p>
            </div>
          </div>
        </div>

        <div className="pt-[20.513rem] ml-[12.821rem] w-[74.615rem]">
          <span className="perpetual-labelled-icon-list-header !text-[4.615rem] !leading-[8.205rem]">
            This proactive model of labelling ensures that datasets are :
          </span>
        </div>

        <div className="relative pt-[9.231rem] pl-[5.385rem]">
          <figure className="absolute top-[14rem] left-[-5rem]">
            <img src={PerpetualLabelledIconsBackground.src} className="w-[42.564rem] h-[85.641rem]" />
          </figure>

          <div className="flex">
            <div className="">
              <figure className="">
                <img
                  src={InstantlyAvailaibleLogo.src}
                  className="w-[20.513rem] h-[20.513rem]"
                  alt="Dataset Icon"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="text-left ml-[10.256rem] pt-[1.282rem] w-[51.79rem]">
              <div className="perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]">
                Instantly available
              </div>
              <div className="perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]">
                labelled before-time and continually
              </div>
            </div>
          </div>

          <div className="flex pt-[10.256rem]">
            <div className="">
              <figure className="">
                <img
                  src={CheaperLogo.src}
                  className="w-[20.513rem] h-[20.513rem]"
                  alt="Dataset Icon"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="text-left ml-[10.256rem] pt-[1.538rem] w-[51.79rem]">
              <div className="perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]">10x cheaper</div>
              <div className="perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]">
                shared across users
              </div>
            </div>
          </div>

          <div className="flex pt-[9.231rem]">
            <div className="">
              <figure className="">
                <img
                  src={CommunityOwnedLogo.src}
                  className="w-[20.513rem] h-[20.513rem]"
                  alt="Dataset Icon"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <div className="text-left ml-[10.256rem] pt-[1.538rem] w-[51.79rem]">
              <div className="perpetual-labelled-icon-header !text-[5.641rem] !leading-[6.667rem]">Community owned</div>
              <div className="perpetual-labelled-icon-subtext !text-[4.103rem] !leading-[5.128rem] pt-[2.051rem]">
                tokenized ownership for data licensing revenue
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
