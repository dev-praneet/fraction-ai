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

export default function Home() {
  return (
    <>
      <div className="global-bg">
        <div style={{ paddingBottom: '20px' }}>
          <Navbar />
        </div>
        <div className="frac-body">
          <AnimationOne />
          <SimpleSlider />
          <PerpetualLabelled />
          <NovelProtocol />
          <AnimationTwo />
          <Testimonials />
          <OrganisationSlider />
          <FeatureDataset />
          <Blog />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}
