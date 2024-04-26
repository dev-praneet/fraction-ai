'use client';

import '../../css/animationtwo.css';
import '../../css/animationone.css';
import React, { useEffect, useState } from 'react';

export default function DataQualityMobile() {
  const [renderComplete, setRenderComplete] = useState<boolean>(false);

  useEffect(() => {
    if (renderComplete) {
      //@ts-ignore
      lottie.loadAnimation({
        container: document.getElementById('data-quality-mobile'), // the dom element that will contain the animation
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
    <>
      <div className="pt-[38.974rem] relative">
        <div className="pl-[5.128rem] pr-[6.667rem]">
          <div className="">
            <div className="ensuring-data-header !text-[11.282rem] !leading-[100%]">
              Ensuring <br />
              Data Quality
            </div>
          </div>
          <div className="pt-[12.821rem] pl-[35.231rem]">
            <div className="ensuring-data-subheader !text-right !text-[5.128rem] !leading-[7.179rem]">
              On chain Reputation System
            </div>
          </div>
        </div>

        <div className="flex relative">
          <div className="flex justify-center items-center w-full h-[87.436rem] overflow-hidden">
            <div id="data-quality-mobile" className="scale-[1.5]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
