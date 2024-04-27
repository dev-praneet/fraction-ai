import React from 'react';
import Navbar from './components/navbar';
import AnimationOne from './components/animationOne';
import Footer from './components/footer';
import FAQ from './components/faq';
import AnimationTwo from './components/animationTwo';
import NovelProtocol from './components/novelProtocol';
import SimpleSlider from './components/sub-components/carousel';
import PerpetualLabelled from './components/perpetualLabelled';
import Testimonials from './components/testimonials';
import OrganisationSlider from './components/organisationSlider';
import FeatureDataset from './components/featuredDataset';
import Blog from './components/Blog';
import '../app/globals.css';
import Newsletter from './components/newsletter';
import IntroductionMobile from './components/mobile/introduction';
import InvestorsMobile from './components/mobile/investors';
import PerpetualLabelledMobile from './components/mobile/perpetualLabelled';
import NovelProtocolMobile from './components/mobile/novelProtocol';
import DataQualityMobile from './components/mobile/dataQuality';
import TestimonialsMobile from './components/mobile/testimonials';
import OrganisationSliderMobile from './components/mobile/organisationSlider';
import FeatureDatasetMobile from './components/mobile/featuredDatasets';
import BlogMobile from './components/mobile/blog';
import FAQMobile from './components/mobile/faq';
import NewsletterMobile from './components/mobile/newsletter';
import FooterMobile from './components/mobile/footer';

export default function Home() {
  return (
    <>
      <div className="hidden md:block home-page">
        <div className="bg-img section-1">
          <div className="component-div">
            <Navbar />
            <AnimationOne />
          </div>
        </div>
        <div className="bg-img section-2">
          <div className="component-div">
            <SimpleSlider />
          </div>
        </div>
        <div className="bg-img section-3">
          <div className="component-div">
            <PerpetualLabelled />
            <NovelProtocol />
            <AnimationTwo />
          </div>
        </div>
        <div className="bg-img section-4">
          <div className="component-div">
            <Testimonials />
          </div>
        </div>
        <div className="bg-img section-5">
          <div className="component-div">
            <OrganisationSlider />
          </div>
        </div>
        <div className="bg-img section-6">
          <div className="component-div">
            <FeatureDataset />
          </div>
        </div>
        <div className="bg-img section-7">
          <div className="component-div">
            <Blog />
          </div>
        </div>
        <div className="bg-img section-8">
          <div className="component-div">
            <FAQ />
          </div>
        </div>
        <div className="bg-img section-9">
          <div className="component-div">
            <Newsletter />
            <Footer />
          </div>
        </div>

        {/* <div className="section-scroll"></div>
        <div className="section-scroll"></div>
        <div className="section-scroll"></div>
        <div className="section-scroll"></div> */}
      </div>

      <div className="block md:hidden home-page-mobile bg-[#080808] mobile-background">
        <IntroductionMobile />
        <InvestorsMobile />
        <PerpetualLabelledMobile />
        <NovelProtocolMobile />
        <DataQualityMobile />
        <TestimonialsMobile />
        <OrganisationSliderMobile />
        <FeatureDatasetMobile />
        <BlogMobile />
        <FAQMobile />
        <NewsletterMobile />
        <FooterMobile />
      </div>
    </>
  );
}
