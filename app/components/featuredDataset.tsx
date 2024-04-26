import FeatureDatasetsIconOne from '../../public/icons/FeatureDatasetsIconOne.svg';
import FeatureDatasetsIconTwo from '../../public/icons/FeatureDatasetsIconTwo.svg';
import FeatureDatasetsIconThree from '../../public/icons/FeatureDatasetsIconThree.svg';
import FeaaturedDatasetsEllipse from '../../public/icons/FeaaturedDatasetsEllipse.svg';
import '../css/featureddatasets.css';

export default function FeatureDataset() {
  let FeatureDatasetIcons = [FeatureDatasetsIconOne, FeatureDatasetsIconTwo, FeatureDatasetsIconThree];

  return (
    <>
      <div>
        <div className='relative h-[8rem] w-full'>
          <div className='pl-[13.75rem] pt-[3rem] featured-datasets-header'>Featured Datasets</div>
          <div className='absolute top-0 left-[77.25rem]'>
            <div className="relative transparent-bg-parent w-[9rem] h-[9rem]">
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0">
              </div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className='circle-button-content'>All Datasets</span>
              </div>
            </div>
          </div>
          <figure className='absolute top-[24.625rem] left-[5.3125rem] z-10'>
            <img src={FeaaturedDatasetsEllipse.src} className="w-[88.125rem] h-[16.3125rem]"/>
          </figure>
        </div>

        <div className='flex justify-between px-[11.25rem]'>
          {FeatureDatasetIcons.map((image, index) => (
            <div key={index}>
              <figure className="">
                <img
                  // alt={`Slide ${index}`}
                  loading="lazy"
                  className="w-[25.125rem] h-[24.8125rem]" 
                  decoding="async"
                  src={image.src}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
