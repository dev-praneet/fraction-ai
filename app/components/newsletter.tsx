'use client';

import { useRef } from 'react';
import NewsletterBackground from '../../public/icons/NewsletterBackground.svg';

import '../css/faq.css';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Newsletter() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const opacity = useTransform(scrollYProgress, [0.3, 1], [1, 0.1]);

  return (
    <>
      <motion.div ref={targetRef} style={{ opacity }}>
        <figure className="absolute bottom-[24.875rem] z-0 snap-start">
          <img src={NewsletterBackground.src} className="w-[100rem] h-[27.75rem]" />
        </figure>

        <div className="absolute bottom-[29.3125rem] h-[19.5rem] flex justify-center w-full">
          <div>
            <div>
              <div className="pt-[2rem] newsletter-header">Newsletter</div>
              <div className="pt-[0.75rem] newsletter-subtext">Subscribe to our newsletter to get our updates</div>
            </div>
            <div className="h-[9rem] mt-[1rem] flex justify-between items-center w-[41.9375rem]">
              <div className="pl-[1.4375rem]">
                <input
                  className="bg-transparent border-none outline-none input-email"
                  placeholder="Email address"
                ></input>
              </div>
              <div className="relative w-[9rem] h-[9rem]">
                <div className="absolute solid-bg-parent w-[9rem] h-[9rem] top-[0] left-[0] z-20">
                  <div className="absolute flex justify-center items-center circle-button w-full h-full solid-bg top-0 left-0 z-0"></div>
                  <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                    <span className="circle-button-content">Subscribe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
