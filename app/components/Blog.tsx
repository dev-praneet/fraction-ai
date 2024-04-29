'use client';

import BlogOne from '../../public/icons/BlogOne.svg';
import BlogTwo from '../../public/icons/BlogTwo.svg';
import BlogThree from '../../public/icons/BlogThree.svg';
import BlogFour from '../../public/icons/BlogFour.svg';
import ReadItArrow from '../../public/icons/ReadItArrow.svg';
import BlogLeftCurve from '../../public/icons/BlogLeftCurve.svg';
import BlogRightCurve from '../../public/icons/BlogRightCurve.svg';
import '../css/blog.css';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Blog() {
  let BlogIcons = [
    {
      icon: BlogOne,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogTwo,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogThree,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogFour,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
  ];

  const textRef = useRef(null);
  const circleButtonRef = useRef(null);
  const datasetWrapperRef = useRef(null);

  const { scrollYProgress: textScrollYProgress } = useScroll({ target: textRef });
  const { scrollYProgress: circleScrollYProgress } = useScroll({ target: circleButtonRef });
  const { scrollYProgress: datasetScrollYProgress } = useScroll({
    target: datasetWrapperRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(textScrollYProgress, [0.4, 1], [1, 0.3]);
  const textTranslateY = useTransform(textScrollYProgress, [0.5, 1], [0, 200]);

  const circleOpacity = useTransform(circleScrollYProgress, [0.4, 1], [1, 0.1]);
  const circleTranslateY = useTransform(circleScrollYProgress, [0.6, 1], [0, 250]);

  const datasetOpacity = useTransform(datasetScrollYProgress, [0.5, 1], [1, 0.3]);
  let datasetTranslateY = useTransform(datasetScrollYProgress, [0.6, 1], [0, 150]);
  datasetTranslateY = useSpring(datasetTranslateY, { damping: 30 });

  return (
    <>
      <div>
        <div className="relative h-[8rem] w-full snap-start scroll-mt-16">
          <motion.div
            ref={textRef}
            className="pl-[13.75rem] pt-[3rem] blog-header"
            style={{ y: textTranslateY, opacity: textOpacity }}
          >
            Blog
          </motion.div>
          <div className="absolute top-0 left-[77.25rem] z-10">
            <motion.div
              ref={circleButtonRef}
              className="relative transparent-bg-parent w-[9rem] h-[9rem]"
              style={{ y: circleTranslateY, opacity: circleOpacity }}
            >
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content">More news</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute top-[6.75rem] left-[3rem]">
            <figure className="">
              <img
                alt={`Blog Left Curve`}
                loading="lazy"
                decoding="async"
                src={BlogLeftCurve.src}
                className="w-[9.5625rem] h-[28.5625rem]"
              />
            </figure>
          </div>
          <div className="absolute top-[6.75rem] right-[3rem]">
            <figure className="">
              <img
                alt={`Blog Right Curve`}
                loading="lazy"
                decoding="async"
                src={BlogRightCurve.src}
                className="w-[9.5625rem] h-[28.5625rem]"
              />
            </figure>
          </div>
        </div>

        <motion.div
          ref={datasetWrapperRef}
          className="flex justify-between px-[11.25rem]"
          style={{ y: datasetTranslateY, opacity: datasetOpacity }}
        >
          {BlogIcons.map((image, index) => (
            <div key={index} className="">
              <figure className="">
                <img
                  alt={`Slide ${index}`}
                  loading="lazy"
                  decoding="async"
                  src={image.icon.src}
                  className="w-[18.375rem] h-[18.375rem]"
                />
              </figure>

              <div className="pt-[1.25rem] w-[16.875rem]">
                <div className="blog-card-text">
                  <span className="">{image.text}</span>
                </div>
                <div className="pt-[1.75rem] flex">
                  <div className="blog-readme-text">
                    <span>Read it</span>
                  </div>
                  <figure className="pl-[0.375rem]">
                    <img
                      alt={`Arrow`}
                      loading="lazy"
                      decoding="async"
                      src={ReadItArrow.src}
                      className="w-[1rem] h-[1rem]"
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
