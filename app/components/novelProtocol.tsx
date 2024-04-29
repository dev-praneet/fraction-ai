'use client';

import Cube from '../../public/icons/Cube.svg';
import Cylinder from '../../public/icons/Cylinder.svg';
import Pyramid from '../../public/icons/Pyramid.svg';
import ParticipateButton from '../../public/icons/PartcipateButton.svg';
import FracIcon from '../../public/icons/FracIcon.svg';
import ParticipateBackground from '../../public/icons/ParticipateBackground.svg';
import '../css/novelprotocol.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRegularScroll, useSpringScroll, useSpringScrollWithRef } from '../hooks/useScrollHooks';

export default function NovelProtocol() {
  const figureRef = useRef(null);
  const { scrollYProgress: figureScrollYProgress } = useScroll({
    target: figureRef,
    offset: ['start start', 'start end'],
  });
  let figureTranslateY = useTransform(figureScrollYProgress, [0.2, 1], [0, 350]);
  figureTranslateY = useSpring(figureTranslateY, { damping: 30 });
  const figureScaleY = useTransform(figureScrollYProgress, [0.2, 1], [1, 2]);

  //   const [figureRef, figureTranslateY] = useSpringScrollWithRef({
  //     inputRange: [0.2, 1],
  //     outputRange: [0, 250],
  //     offset: ['start start', 'start end'],
  //   });
  //   const figureScaleY = useSpringScroll({
  //     ref: figureRef,
  //     inputRange: [0.2, 1],
  //     outputRange: [0, 250],
  //     offset: ['start start', 'start end'],
  //   });

  const textRef = useRef(null);
  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: textRef,
    offset: ['start start', 'end end'],
  });
  let textTranslateY = useTransform(textScrollYProgress, [0.3, 0.7], [0, 50]);
  textTranslateY = useSpring(textTranslateY);
  const textOpacity = useTransform(textScrollYProgress, [0.3, 0.7], [1, 0]);

  //   const [textRef, textTranslateY] = useSpringScrollWithRef({
  //     inputRange: [0.3, 0.7],
  //     outputRange: [0, 50],
  //     offset: ['start start', 'end end'],
  //   });
  //   const textOpacity = useRegularScroll({
  //     ref: textRef,
  //     inputRange: [0.3, 0.7],
  //     outputRange: [1, 0],
  //     offset: ['start start', 'end end'],
  //   });

  return (
    // <div className="protocol-content protocol-main-conatiner relative novel-protocol-screen-padding">
    //   <div className="relative z-10 flex flex-col rounded-full novel-protocol-video-content">
    //     <div className='absolute rounded-sm md:rounded-md novel-protocol-video'>
    //       <video
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //       disableRemotePlayback
    //       className="video-black-hole"
    //     >
    //       <source src="videos/BlackHole.mp4" type="video/mp4" />
    //     </video>
    //     </div>

    //     <div className=" novel-protocol-header  relative" style={{ zIndex: '10' }}>
    //       <div className="novel-protocol-header-text md:pb-0">
    //         <span>Made Possible by our </span>
    //         <span className=""> Novel Protocol</span>
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center justify-center" style={{ zIndex: '10' }}>
    //       <div className="flex flex-col md:flex-row justify-between w-full">
    //         <figure className="relative novel-animation-cube block flex justify-center">
    //           <img
    //             alt=""

    //             loading="lazy"
    //             decoding="async"
    //             className="novel-animation-img-cube"
    //             style={{ color: 'transparent' }}
    //             src={Cube.src}
    //           />
    //         </figure>
    //         <figure className="relative novel-animation-pyramid flex justify-center ">
    //           <img
    //             alt=""
    //             loading="lazy"
    //             decoding="async"
    //             className="novel-animation-img-pyramid"
    //             style={{ color: 'transparent' }}
    //             src={Pyramid.src}
    //           />
    //         </figure>
    //       </div>
    //       <div className="flex flex-col items-center justify-center relative cylinder-img-container">
    //         <div>
    //           <figure className="relative mx-auto items-center justify-center">
    //             <img
    //               alt=""
    //               loading="lazy"
    //               decoding="async"
    //               className="novel-animation-img-cylinder"
    //               style={{ color: 'transparent' }}
    //               src={Cylinder.src}
    //             />
    //           </figure>
    //         </div>
    //         <div className='absolute frac-conatiner' >
    //         <div className="flex flex-col items-center justify-center relative ">
    //           <div className="flex fractoken-input items-center px-4" style={{ bottom: '30px' }}>
    //             <figure className="px-2 absolute">
    //               <img
    //                 alt=""
    //                 loading="lazy"
    //                 width="30"
    //                 height="30"
    //                 decoding="async"
    //                 className=""
    //                 style={{ color: 'transparent' }}
    //                 src={FracIcon.src}
    //               />
    //             </figure>
    //             <input
    //               className="pl-16 fractoken-input fractoken-input-mobile w-full"
    //               style={{border:0}}
    //               placeholder="Powered by Frac token"
    //             />
    //           </div>

    //           <div className="absolute bottom-0 participate-button">
    //             <figure>
    //               <img
    //                 alt=""
    //                 loading="lazy"
    //                 width="80"
    //                 height="80"
    //                 decoding="async"
    //                 className=""
    //                 style={{ color: 'transparent' }}
    //                 src={ParticipateButton.src}
    //               />
    //             </figure>
    //           </div>
    //         </div>
    //         </div>

    //       </div>
    //     </div>{' '}

    //        </div>
    // </div>
    <div className="relative mt-[13.75rem] h-[58.5rem] snap-start">
      <figure className="absolute top-0 left-0 z-10">
        <motion.img
          src={ParticipateBackground.src}
          className="w-[100rem] h-[58.5rem]"
          ref={figureRef}
          style={{ y: figureTranslateY, scaleY: figureScaleY, transformOrigin: 'center top' }}
        />
      </figure>

      <div className="absolute w-full flex justify-center z-20 mt-[7.3125rem]">
        <motion.div ref={textRef} style={{ y: textTranslateY, opacity: textOpacity }}>
          <span className="novel-protocol-header">Made Possible by our </span>
          <span className="novel-protocol-header"> Novel Protocol</span>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <div className="novel-protocol-video w-[60rem] h-[45rem]">
          <video autoPlay loop muted playsInline disableRemotePlayback className="video-black-hole">
            <source src="videos/BlackHole.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute solid-bg-parent w-[9rem] h-[9rem] top-[49.5rem] left-[63.375rem] z-20">
        <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0"></div>
        <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
          <span className="circle-button-content">Participate</span>
        </div>
      </div>
    </div>
  );
}
