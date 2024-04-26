import FeatureDatasetsIconOne from '../../../public/icons/FeatureDatasetsIconOne.svg';
import FeatureDatasetsIconTwo from '../../../public/icons/FeatureDatasetsIconTwo.svg';
import FeatureDatasetsIconThree from '../../../public/icons/FeatureDatasetsIconThree.svg';
import FeaturedDatasetMobileGlow from '../../../public/icons/FeaturedDatasetMobileGlow.svg';
import '../../css/featureddatasets.css';

export default function FeatureDatasetMobile() {
  let FeatureDatasetIcons = [FeatureDatasetsIconOne, FeatureDatasetsIconTwo, FeatureDatasetsIconThree];

  return (
    <>
      <div className="relative h-[345.128rem] pt-[38.974rem]">
        <div className="w-full">
          <div className="flex justify-center featured-datasets-header !text-[7.179rem] !leading-[100%]">
            Featured Datasets
          </div>
        </div>

        <div className="absolute top-[53.333rem] flex justify-center w-full">
          <div className="relative transparent-bg-parent w-[36.923rem] h-[36.923rem]">
            <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
            <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
              <span className="circle-button-content !text-[4.615rem]">All Datasets</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full mt-[39.744rem] h-[229.231rem]">
          {FeatureDatasetIcons.map((image, index) => (
            <div key={index}>
              <figure className="">
                <img
                  // alt={`Slide ${index}`}
                  loading="lazy"
                  className="w-[75.385rem] h-[74.359rem]"
                  decoding="async"
                  src={image.src}
                />
              </figure>
            </div>
          ))}
        </div>

        <figure className="absolute bottom-[-20rem]">
          <img src={FeaturedDatasetMobileGlow.src} className="w-full h-[60.256rem]" />
        </figure>
      </div>
    </>
  );
}
