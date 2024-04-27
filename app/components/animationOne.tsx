'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../css/animationone.css';
import StakeButton from '../../public/icons/StakeButton.svg';
import ContributeButton from '../../public/icons/ContributeButton.svg';
import Datasets from '../../public/icons/Datasets.svg';
import DatasetsTextIcon from '../../public/icons/DatasetsTextIcon.svg';
import Fraction from '../../public/icons/Fraction.svg';
import RectangleOne from '../../public/icons/RectangleOne.svg';
import RectangleTwo from '../../public/icons/RectangleTwo.svg';
import HeroImage from '../../public/icons/HeroImage.svg';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import { motion, useScroll, useTransform } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

const AnimationOne = () => {
  // const [renderComplete, setRenderComplete] = useState<boolean>(false);

  // useEffect(() => {
  //   if (renderComplete) {
  //     //@ts-ignore
  //     lottie.loadAnimation({
  //       container: document.getElementById('animation-one-container'),
  //       renderer: 'canvas',
  //       loop: true,
  //       autoplay: true,
  //       path: 'videos/AnimationOne.json',
  //       rendererSettings: {
  //         preserveAspectRatio: 'xMidYMid slice',
  //       },
  //     });
  //   }
  // }, [renderComplete]);

  // useEffect(() => {
  //   const handleScriptLoad = () => {
  //     setRenderComplete(true);
  //   };

  //   const scriptElement = document.createElement('script');
  //   scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.4/lottie.min.js';
  //   scriptElement.async = true;
  //   scriptElement.onload = handleScriptLoad;

  //   document.body.appendChild(scriptElement);

  //   return () => {
  //     document.body.removeChild(scriptElement);
  //   };
  // }, []);

  const problemNodeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: problemNodeRef,
  });

  const problemNodeScaleY = useTransform(scrollYProgress, [0.4, 1], [1, 1.4]);
  const problemNodeOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const problemNodeTranslateY = useTransform(scrollYProgress, [0.2, 1], [0, 100]);

  const solutionsNode = useRef(null);
  const { scrollYProgress: solutionsNodeScrollYProgress } = useScroll({
    target: solutionsNode,
  });
  const solutionsNodeOpacity = useTransform(solutionsNodeScrollYProgress, [0.4, 1], [1, 0]);
  const solutionsNodeTranslateY = useTransform(solutionsNodeScrollYProgress, [0.2, 1], [0, 100]);

  //   console.log('problem node translateY value', problemNodeTranslateY);
  //   console.log('problem node opacity value', problemNodeOpacity);

  return (
    <>
      <div className="flex justify-between pt-[3.375rem] pb-[5.375rem] pl-[20rem] pr-[24rem]">
        <motion.div
          className="flex items-center hero-banner-text animate-text"
          //   initial={{ y: 150, scaleY: 1.3, opacity: 0 }}
          //   animate={{ y: 0, scaleY: 1, opacity: 1 }}
          //   transition={{ ease: 'easeOut', duration: 0.4 }}
        >
          <span>
            Perpetual <br /> Datasets for AI
          </span>
        </motion.div>

        <div className={inter.className}>
          <div className="flex text-[1.125rem] gap-[1.25rem]">
            <motion.div
              className="relative solid-bg-parent w-[9rem] h-[9rem] animate-circle"
              //   initial={{ scale: 0 }}
              //   animate={{ scale: 1 }}
              //   transition={{ ease: 'easeOut', duration: 0.4 }}
            >
              <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content">Contribute</span>
              </div>
            </motion.div>
            <motion.div
              className="relative transparent-bg-parent w-[7.1875rem] h-[9rem] animate-circle"
              //   initial={{ scale: 0 }}
              //   animate={{ scale: 1 }}
              //   transition={{ ease: 'easeOut', duration: 0.4 }}
            >
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content">Stake</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="ml-[10.9375rem] mr-[15.9375rem] animate-image"
          //   initial={{ y: 150 }}
          //   animate={{ y: 0 }}
          //   transition={{ ease: 'easeOut', duration: 0.4 }}
        >
          <div className="relative w-full h-[87.5rem]">
            <Image className="" src={HeroImage} alt="Fraction" fill={true} priority={true} />
          </div>
        </motion.div>

        <motion.div
          ref={problemNodeRef}
          className="absolute w-full top-[46.57%] left-0 pl-[3.75rem] pr-[6.75rem] flex justify-between"
          style={{
            scaleY: problemNodeScaleY,
            opacity: problemNodeOpacity,
            // transform: `translateY(${problemNodeTranslateY}px)`,
            y: problemNodeTranslateY,
          }}
        >
          <div className="w-[27%]">
            <div className="hero-banner-problem-header pb-[0.6875rem] snap-start scroll-mt-16">
              <span>problem</span>
            </div>
            <div className="hero-banner-problem-content">
              <span>
                GenAi model requires a ton of human <em>labelled data</em> and <em>web2</em> <em>platforms</em>{' '}
                can&apos;t keep up
              </span>
            </div>
          </div>
          <figure className="pt-[3rem]">
            <img
              alt="centralized"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={DatasetsTextIcon.src}
              className="text-transparent w-[22rem] h-[7.625rem]"
            />
          </figure>
        </motion.div>
      </div>
      {/* <div className="block pt-8 md:hidden px-4 w-full">
            <div className="flex flex-col justify-between " >
              <div className="">
                <div className="hero-banner-problem-text">
                  <span>problem</span>
                </div>
                <div className="hero-banner-problem-subtext flex justify-left" style={{width:'50%'}}>
                  <span>
                    GenAi model requires a ton of human <em>labelled data</em> and <em>web2</em> <em>platforms</em>{' '}
                    can&apos;t keep up
                  </span>
                </div>
              </div>
              <div className=" pt-8 flex justify-end" >
                <div style={{width:'50%'}}>
                <Image className="" src={DatasetsTextIcon} width="252" height="100" alt="DatasetsTextIcon" />
                </div>
              </div>
            </div>
        </div> */}

      <motion.div ref={solutionsNode} style={{ opacity: solutionsNodeOpacity, y: solutionsNodeTranslateY }}>
        <div className="flex justify-center items-center pt-16">
          <figure className="solution-line">
            <img src={RectangleOne.src} className="w-[2.6875rem] h-[0.0625rem]" />
          </figure>
          <span className="solution-header px-[0.75rem] snap-start scroll-mt-12">Solutions</span>
          <figure className="solution-line">
            <img src={RectangleTwo.src} className="w-[2.6875rem] h-[0.0625rem]" />
          </figure>
        </div>
        <div className="flex flex-col items-center text-white pt-4">
          <div className="hero-banner-title">Enter Perpetual Datasets</div>
          <div className="hero-banner-subtext pt-[1.375rem]">
            The{' '}
            <em>
              <b>100x</b>
            </em>{' '}
            solution offering instant availaiblity,
            <br className="md:hidden" />
            <span className="md:block">lower price, and community ownership</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default AnimationOne;
