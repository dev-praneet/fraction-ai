'use client';

import animationData from '../../public/videos/AnimationThree.json';
import Content from '../../public/icons/Content.svg';
import '../css/animationtwo.css';
import '../css/animationone.css';
import React, { useEffect, useState } from 'react';

const AnimationTwo = () => {
  const [renderComplete, setRenderComplete] = useState<boolean>(false);

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
      <div className="flex justify-between items-center pt-[1.3125rem] pl-[11.375rem] pr-[9.25rem]">
        <div className="">
          <div className="ensuring-data-header">Ensuring Data Quality</div>
        </div>
        <div className="">
          <div className="ensuring-data-subheader">On Chain Reputation System</div>
        </div>
      </div>

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
