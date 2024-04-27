'use client';

import FeatureDatasetsIconOne from '../../public/icons/FeatureDatasetsIconOne.svg';
import FeatureDatasetsIconTwo from '../../public/icons/FeatureDatasetsIconTwo.svg';
import FeatureDatasetsIconThree from '../../public/icons/FeatureDatasetsIconThree.svg';
import FeaaturedDatasetsEllipse from '../../public/icons/FeaaturedDatasetsEllipse.svg';
import '../css/featureddatasets.css';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FeatureDataset() {
  let FeatureDatasetIcons = [FeatureDatasetsIconOne, FeatureDatasetsIconTwo, FeatureDatasetsIconThree];

  const textRef = useRef(null);
  const circleButtonRef = useRef(null);
  const datasetWrapperRef = useRef(null);

  const { scrollYProgress: textScrollYProgress } = useScroll({ target: textRef });
  const { scrollYProgress: circleScrollYProgress } = useScroll({
    target: circleButtonRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: datasetScrollYProgress } = useScroll({ target: datasetWrapperRef });

  const textOpacity = useTransform(textScrollYProgress, [0.4, 1], [1, 0.3]);
  const textTranslateY = useTransform(textScrollYProgress, [0.5, 1], [0, 200]);

  const circleOpacity = useTransform(circleScrollYProgress, [0.5, 1], [1, 0.3]);
  const circleTranslateY = useTransform(circleScrollYProgress, [0.6, 1], [0, 150]);

  const datasetOpacity = useTransform(datasetScrollYProgress, [0.5, 1], [1, 0.3]);
  const datasetTranslateY = useTransform(datasetScrollYProgress, [0.6, 1], [0, 150]);

  return (
    <>
      <div>
        <div className="relative h-[8rem] w-full">
          <motion.div
            ref={textRef}
            className="pl-[13.75rem] pt-[3rem] featured-datasets-header snap-start scroll-mt-24"
            style={{ y: textTranslateY, opacity: textOpacity }}
          >
            Featured Datasets
          </motion.div>

          <motion.div
            className="absolute top-0 left-[77.25rem] z-10"
            ref={circleButtonRef}
            style={{ y: circleTranslateY, opacity: circleOpacity }}
          >
            <div className="relative transparent-bg-parent w-[9rem] h-[9rem]">
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content">All Datasets</span>
              </div>
            </div>
          </motion.div>
          <figure className="absolute top-[24.625rem] left-[5.3125rem] z-10">
            <img src={FeaaturedDatasetsEllipse.src} className="w-[88.125rem] h-[16.3125rem]" />
          </figure>
        </div>

        <motion.div
          ref={datasetWrapperRef}
          className="flex justify-between px-[11.25rem]"
          style={{ y: datasetTranslateY, opacity: datasetOpacity }}
        >
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
        </motion.div>
      </div>
    </>
  );
}
