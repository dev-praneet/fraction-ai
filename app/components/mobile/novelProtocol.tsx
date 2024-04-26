import Cube from '../../../public/icons/Cube.svg';
import Cylinder from '../../../public/icons/Cylinder.svg';
import Pyramid from '../../../public/icons/Pyramid.svg';
import FracLogo from '../../../public/icons/FracLogo.svg';
import '../../css/novelprotocol.css';

export default function NovelProtocolMobile() {
  return (
    <>
      <div className="relative h-[403.077rem]">
        <figure className="absolute top-0 left-0 z-10"></figure>

        <div className="relative pt-[27.179rem] px-[2rem] flex justify-center z-20">
          <div className="novel-protocol-header !text-[11.795rem] w-full">
            <span>Made Possible by our Novel Protocol</span>
          </div>
        </div>

        <div className="absolute top-[58.918rem] z-10">
          <div className="h-[97.692rem] w-full overflow-hidden flex justify-center items-center rounded-full opacity-60">
            <video autoPlay loop muted playsInline disableRemotePlayback className="scale-[4]">
              <source src="videos/BlackHole.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="absolute top-[118.205rem] left-[5.128rem] z-30">
          <figure className="">
            <img src={Cube.src} className="w-[110.769rem] h-[116.667rem]" />
          </figure>
        </div>

        <div className="absolute top-[188.487rem] left-[-6.667rem] z-40">
          <figure>
            <img src={Pyramid.src} className="w-[109.487rem] h-[84.615rem]" />
          </figure>
        </div>

        <div className="absolute top-[258.197rem] z-50">
          <figure>
            <img src={Cylinder.src} className="w-[97.945rem] h-[112.821rem]" />
          </figure>
        </div>

        <div className="absolute top-[155.282rem] w-full flex justify-center text-center z-[55]">
          <div className="w-[46.154rem]">
            <div className="shape-header">
              <span>Labellers</span>
            </div>
            <div className="shape-subtext pt-[4.872rem]">
              <span>Help label your favorite datasets and earn Frac tokens</span>
            </div>
          </div>
        </div>

        <div className="absolute top-[225.282rem] w-full flex justify-center text-center z-[55]">
          <div className="w-[64.359rem]">
            <div className="shape-header">
              <span>Verifiers</span>
            </div>
            <div className="shape-subtext pt-[4.872rem]">
              <span>
                Buy ownership tokens for your favorite dataset and earn staking rewards + data licensing revenue
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-[300.282rem] w-full flex justify-center text-center z-[55]">
          <div className="">
            <div className="shape-header w-[56.923rem]">
              <span>Data-owner</span>
            </div>
            <div className="shape-subtext pt-[4.872rem] w-[50.513rem]">
              <span>Verify the labelling and earn Frac tokens</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[18.462rem] z-50 flex justify-center w-full">
          <div className="w-[89.744rem] h-[43.077rem] rounded-[5.128rem] border-[0.256rem] bg-[#080808] border-[#BC87FF] border-solid">
            <div className="flex pl-[10.769rem] pt-[8.974rem]">
              <figure>
                <img src={FracLogo.src} className="w-[12.821rem] h-[8.205rem]" />
              </figure>
              <div className="pl-[4.103rem] h-[8.205rem] flex items-center powered-by-text">
                <span>Powerded by Frac Token</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex justify-center w-full z-[60]">
          <div className="relative solid-bg-parent w-[36.923rem] h-[36.923rem]">
            <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0"></div>
            <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
              <span className="!text-[4.615rem] circle-button-content">Participate</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
