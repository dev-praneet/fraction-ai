'use client';

import Image from 'next/image';
import Menu from '../../public/icons/Menu.svg';
import loginArrowIcon from '../../public/icons/LoginIcon.svg';
import FractionAiHeader from '../../public/icons/FractionAiHeader.svg';
import xIcon from '../../public/icons/x.svg';
import { useState } from 'react';
import Link from 'next/link';
import '../css/navbar.css';
import { Inter } from 'next/font/google';

import { motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const navItems: Array<NavItem> = [
  {
    label: 'Products',
    children: [
      {
        label: 'Image Annotation',
        subLabel: 'Image description, bounding box annotation, segmentation',
        href: '#',
      },
      {
        label: 'Video Annotation',
        subLabel: 'Video clipping, description in multiple languages, bounding box annotation, segmentation',
        href: '#',
      },
      {
        label: 'Text Generation',
        subLabel: 'Prompt generation, Question Answering, Domain specific chats',
        href: '#',
      },
      {
        label: 'RLHF',
        subLabel: 'Context based ranking of model outputs for safety and performance',
        href: '#',
      },
    ],
  },
  {
    label: 'Enterprises',
    children: [
      {
        label: 'Image Generation',
        subLabel:
          'Images with descriptive annotations for finetuning models similar to Stable Diffusion and Midjourney',
        href: '#',
      },
      {
        label: 'Video Generation',
        subLabel:
          'Fully annotated video clips across from diverse sources and multiple languages, useful for training video generation  and annotation models',
        href: '#',
      },
      {
        label: 'Programming',
        subLabel:
          'Datasets across programming languages and frameworks including React, Angular, FastAPI and much more',
        href: '#',
      },
      {
        label: 'Marketing',
        subLabel: 'Writing copy for tweets, email marketing, blogs and social media',
        href: '#',
      },
      {
        label: 'Sales',
        subLabel: 'Industry specific personalized emails for cold outreach',
        href: '#',
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Image Generation',
        subLabel:
          'Images with descriptive annotations for finetuning models similar to Stable Diffusion and Midjourney',
        href: '#',
      },
      {
        label: 'Video Generation',
        subLabel:
          'Fully annotated video clips across from diverse sources and multiple languages, useful for training video generation  and annotation models',
        href: '#',
      },
      {
        label: 'Programming',
        subLabel:
          'Datasets across programming languages and frameworks including React, Angular, FastAPI and much more',
        href: '#',
      },
      {
        label: 'Marketing',
        subLabel: 'Writing copy for tweets, email marketing, blogs and social media',
        href: '#',
      },
      {
        label: 'Sales',
        subLabel: 'Industry specific personalized emails for cold outreach',
        href: '#',
      },
    ],
  },
  {
    label: 'About Us',
    children: [
      {
        label: 'Image Generation',
        subLabel:
          'Images with descriptive annotations for finetuning models similar to Stable Diffusion and Midjourney',
        href: '#',
      },
      {
        label: 'Video Generation',
        subLabel:
          'Fully annotated video clips across from diverse sources and multiple languages, useful for training video generation  and annotation models',
        href: '#',
      },
      {
        label: 'Programming',
        subLabel:
          'Datasets across programming languages and frameworks including React, Angular, FastAPI and much more',
        href: '#',
      },
      {
        label: 'Marketing',
        subLabel: 'Writing copy for tweets, email marketing, blogs and social media',
        href: '#',
      },
      {
        label: 'Sales',
        subLabel: 'Industry specific personalized emails for cold outreach',
        href: '#',
      },
    ],
  },
];

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeDropdown = () => {
    setMobileDrawerOpen(false);
  };

  const preventCloseDropdown = (e: any) => {
    e.stopPropagation();
  };

  return (
    <>
      <motion.div
        className="px-[3.75rem] py-0 flex items-center h-[5rem] add-border snap-start"
        // initial={{ skewY: -5 }}
        // animate={{ skewY: 0 }}
        // transition={{
        //   duration: 0.2,
        //   delay: 0,
        // }}
      >
        {/* <motion.div */}
        <div
          className="w-[31.3125rem] drop-animation"
          //   initial={{ y: -40 }}
          //   animate={{ y: 0 }}
          //   transition={{ ease: 'easeOut', duration: 0.15, delay: 0 }}
          //   style={{ transform: 'translateY(-40px)' }}
        >
          <figure>
            <img
              alt="logo"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              src={FractionAiHeader.src}
              className="text-transparent w-[10.3125rem] h-[1.625rem]"
            />
          </figure>
        </div>
        {/* </motion.div> */}

        {/* <div className="pl-10  menu-hamburger" onClick={toggleMobileNav}>
          <img
            alt="ham"
            loading="lazy"
            width="24"
            height="24"
            decoding="async"
            data-nimg="1"
            src={Menu.src}
            style={{ color: 'transparent' }}
          />
        </div> */}

        {/* <div className="navbar-center navbar-visiblity" style={{ color: 'white' }}>
          <ul className="menu menu-horizontal px-1 pl-20 text-small3">
            {navItems.map((item, index) => (
              <li key={index} className="dropdown dropdown-hover dropdown-bottom">
                <button>{item.label}</button>
                <ul className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-96">
                  {item.children?.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.href} className="w-full flex flex-col items-start">
                        <p className="text-lg font-bold">{subItem.label}</p>
                        <p className="w-full">{subItem.subLabel}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div> */}
        <div className={`${inter.className} w-[29.875rem] list-none flex justify-between text-small3`}>
          {navItems.map((item, index) => (
            // <motion.li
            <li
              key={index}
              className="move-above-vp drop-animation"
              //   initial={{ y: -40 }}
              //   animate={{ y: 0 }}
              //   transition={{ ease: 'easeOut', duration: 0.15, delay: (index + 1) * 0.05 }}
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <button>{item.label}</button>
            </li>
            // </motion.li>
          ))}
        </div>

        {/* <motion.div */}
        <div
          className="flex ml-auto move-above-vp drop-animation"
          //   initial={{ y: -40 }}
          //   animate={{ y: 0 }}
          //   transition={{ ease: 'easeOut', duration: 0.15, delay: (navItems.length + 1) * 0.050 }}
          style={{ animationDelay: `${(navItems.length + 1) * 50}ms` }}
        >
          <img
            alt="arrow"
            loading="lazy"
            decoding="async"
            data-nimg="1"
            src={loginArrowIcon.src}
            className="text-transparent w-[1.25rem] h-[1.25rem]"
          />
          <span className="px-2 text-login">Log In</span>
        </div>
        {/* </motion.div> */}
      </motion.div>

      {mobileDrawerOpen && (
        <div
          className="absolute z-50 -mt-1 mobile-hamburger w-full backdrop-blur-2xl bg-purple-50"
          onClick={closeDropdown}
        >
          <div className="bg-purple-50 text-small3 text-black rounded-b-xl" onClick={preventCloseDropdown}>
            <div className="w-full py-4 px-4 font-medium">
              {navItems.map((item, index) => {
                return (
                  <div key={index} className="collapse">
                    <input type="checkbox" className="peer" />
                    <div
                      style={{ color: 'white' }}
                      className="collapse-title collapse-title-custom flex justify-center pl-0 text-small2 peer-checked:text-bpurple"
                    >
                      {item.label}
                    </div>
                    <div className="collapse-content text-small2">
                      {item.children?.map((subItem, subIndex) => {
                        return (
                          <p key={subIndex} className="pt-2 pb-4">
                            <a href={subItem.href}>{subItem.label}</a>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
