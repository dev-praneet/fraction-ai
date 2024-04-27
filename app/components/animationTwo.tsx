'use client';

import animationData from '../../public/videos/AnimationThree.json';
import Content from '../../public/icons/Content.svg';
import '../css/animationtwo.css';
import '../css/animationone.css';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimationTwo = () => {
  const [renderComplete, setRenderComplete] = useState<boolean>(false);

  const textWrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textWrapperRef,
  });

  const scaleY = useTransform(scrollYProgress, [0.4, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0.3, 1], [0, 200]);

  useEffect(() => {
    if (renderComplete) {
      //@ts-ignore
      lottie.loadAnimation({
        container: document.getElementById('animation-two-container'), // the dom element that will contain the animation
        renderer: 'svg', // Specify the renderer to use: 'svg', 'canvas', 'html'
        loop: true,
        autoplay: true,
        path: 'videos/AnimationThree.json', // the path to the animation json
      });
    }
  }, [renderComplete]);

  useEffect(() => {
    const handleScriptLoad = () => {
      setRenderComplete(true);
    };
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.9.4/lottie.min.js';
    scriptElement.async = true;
    scriptElement.onload = handleScriptLoad;

    document.body.appendChild(scriptElement);

    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="pt-[13.75rem] relative">
      <motion.div
        ref={textWrapperRef}
        className="flex justify-between items-center pt-[1.3125rem] pl-[11.375rem] pr-[9.25rem] snap-start scroll-mt-20"
        style={{ y: translateY, opacity }}
      >
        <div className="">
          <div className="ensuring-data-header">Ensuring Data Quality</div>
        </div>
        <div className="">
          <div className="ensuring-data-subheader">On Chain Reputation System</div>
        </div>
      </motion.div>

      <div className="flex relative">
        <div className="flex justify-center">
          <div id="animation-two-container" className="w-[79.35rem] h-[50.84875rem] ml-[9.3125rem]"></div>
          <figure className="absolute top-[27.72625rem] left-[16.1075rem]">
            <img src={Content.src} className="w-[69.2675rem] h-[7rem]" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AnimationTwo;
