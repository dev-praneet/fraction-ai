'use client';

import CommunityOwnedLogo from '../../public/icons/CommunityOwnedLogo.svg';
import CheaperLogo from '../../public/icons/CheaperLogo.svg';
import InstantlyAvailaibleLogo from '../../public/icons/InstantlyAvailableLogo.svg';
import SCurve from '../../public/icons/SCurve.svg';
import PerpetualLabelledIconsBackground from '../../public/icons/PerpetualLabelledIconsBackground.svg';
import '../css/perpetuallabelled.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useSpringScrollWithRef, useSpringScroll, useRegularScroll } from '../hooks/useScrollHooks';

export default function PerpetualLabelled() {
  let labelledDatasetText: any = [
    { Icon: InstantlyAvailaibleLogo, Text: 'Instantly Avaialible', subText: 'labelled before-time and continually' },
    { Icon: CheaperLogo, Text: '10x cheaper', subText: 'shared across users' },
    { Icon: CommunityOwnedLogo, Text: 'Community owned', subText: 'tokenized ownership for data licensing revenue' },
  ];

  //   const perpetualLabelledHeaderRef = useRef(null);
  //   const { scrollYProgress: headerScrollYProgress } = useScroll({ target: perpetualLabelledHeaderRef });
  //   const headerTranslateY = useTransform(headerScrollYProgress, [0.4, 1], [0, 100]);
  //   const headerScaleY = useTransform(headerScrollYProgress, [0.4, 1], [1, 1.7]);
  //   const headerOpacity = useTransform(headerScrollYProgress, [0.4, 1], [1, 0]);

  const [perpetualLabelledHeaderRef, headerTranslateY] = useSpringScrollWithRef({
    inputRange: [0.4, 1],
    outputRange: [0, 100],
  });
  const headerScaleY = useSpringScroll({
    ref: perpetualLabelledHeaderRef,
    inputRange: [0.4, 1],
    outputRange: [1, 1.7],
  });
  const headerOpacity = useRegularScroll({
    ref: perpetualLabelledHeaderRef,
    inputRange: [0.4, 1],
    outputRange: [1, 0],
  });

  //   const perpetualLabelledSubtextRef = useRef(null);
  //   const { scrollYProgress: subtextScrollYProgress } = useScroll({ target: perpetualLabelledSubtextRef });
  //   const subtextTranslateY = useTransform(subtextScrollYProgress, [0.4, 1], [0, 150]);
  //   const subtextScaleY = useTransform(subtextScrollYProgress, [0.5, 1], [1, 1.7]);
  //   const subtextOpacity = useTransform(headerScrollYProgress, [0.4, 1], [1, 0]);

  const [perpetualLabelledSubtextRef, subtextTranslateY] = useSpringScrollWithRef({
    inputRange: [0.4, 1],
    outputRange: [0, 150],
  });
  const subtextScaleY = useSpringScroll({
    ref: perpetualLabelledSubtextRef,
    inputRange: [0.5, 1],
    outputRange: [1, 1.7],
  });
  const subtextOpacity = useRegularScroll({
    ref: perpetualLabelledSubtextRef,
    inputRange: [0.4, 1],
    outputRange: [1, 0],
  });

  //   const proactiveModelRef = useRef(null);
  //   const { scrollYProgress: proactiveScrollYProgress } = useScroll({ target: proactiveModelRef });
  //   const proactiveOpacity = useTransform(proactiveScrollYProgress, [0.4, 1], [1, 0]);

  //   let proactiveTranslateY = useTransform(proactiveScrollYProgress, [0.4, 1], [0, 150]);
  //   proactiveTranslateY = useSpring(proactiveTranslateY, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });
  //   const proactiveScaleY = useTransform(proactiveScrollYProgress, [0.5, 1], [1, 1.7]);
  const [proactiveModelRef, proactiveTranslateY] = useSpringScrollWithRef({
    inputRange: [0.4, 1],
    outputRange: [0, 150],
  });
  const proactiveOpacity = useRegularScroll({
    ref: proactiveModelRef,
    inputRange: [0.4, 1],
    outputRange: [1, 0],
  });
  const proactiveScaleY = useSpringScroll({
    ref: proactiveModelRef,
    inputRange: [0.5, 1],
    outputRange: [1, 1.7],
  });

  return (
    <>
      <div className="w-full h-[28.875rem] mt-[13.75rem] relative snap-start scroll-mt-28">
        <figure className="absolute top-0 left-0">
          <img src={SCurve.src} className="w-[100rem] h-[28.875rem]" />
        </figure>

        <figure className="absolute top-[9rem] left-[42.9375rem]">
          <img src={PerpetualLabelledIconsBackground.src} className="w-[10.375rem] h-[20.875rem]" />
        </figure>

        <div className="relative flex">
          <div className="pt-[3rem] pl-[13.75rem]">
            <div className="flex flex-col justify-between w-[24.25rem] h-[15.125rem]">
              <motion.div
                ref={perpetualLabelledHeaderRef}
                className="perpetual-labelled-header"
                style={{ y: headerTranslateY, opacity: headerOpacity, scaleY: headerScaleY }}
              >
                <p>
                  Perpetual <br /> Labelled
                </p>
              </motion.div>

              <motion.div
                ref={perpetualLabelledSubtextRef}
                className="perpetual-labelled-subtext pl-[2.6875rem]"
                style={{ y: subtextTranslateY, opacity: subtextOpacity, scaleY: subtextScaleY }}
              >
                <p>
                  Datasets are created proactively based on expected future demand and multiple users can access same
                  datasets for their AI requirements
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            ref={proactiveModelRef}
            // initial={{ y: 150 }}
            // whileInView={{ y: 0, marginTop: 100 }}
            // transition={{ duration: 1 }}
            // viewport={{ margin: '-100px' }}
            className="pt-[3.75rem] pl-[7.375rem]"
            style={{
              y: proactiveTranslateY,
              opacity: proactiveOpacity,
              scaleY: proactiveScaleY,
              transformOrigin: 'center top',
            }}
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
