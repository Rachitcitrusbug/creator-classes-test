import React from 'react';
import BuildYourFuture from '../pages/Home/BuildYourFuture';
import Header from '../pages/Home/Header';
import OurClasses from '../pages/Home/OurClasses';
import HundredsOfClasses from '../pages/Home/HundredsOfClasses';
import LearnLive from '../pages/Home/LearnLive';
import OneToOneSessions from '../pages/Home/OneToOneSessions';
import Materials from '../pages/Home/Materials';
import MeetTheCreators from '../pages/Home/MeetTheCreators';
import Testimonials from '../pages/Home/Testimonials';
import PricingPlan from '../pages/Home/PricingPlan';
import CreativeCareer from '../pages/Home/CreativeCareer';
import Footer from '../pages/Home/Footer';
import UserHeader from '../pages/User/UserHeader';

function Main() {
  const authToken = localStorage.getItem('token');

  return (
    <>
      <div id="ip-container" className="ip-container">
        <div className="preloader" id="preloader">
          <div className="loading-text">Loading...</div>
        </div>
        <div id="wrapper" className="wrapper home-wrapper main-bg-color">
          {authToken ? <UserHeader /> : <Header />}
          <div className="main-middle-area pt-custom-0">
            <BuildYourFuture />
            <OurClasses />
            <div className="block-classes-common-pattern-root">
              <HundredsOfClasses />
              <LearnLive />
              <OneToOneSessions />
              <Materials />
            </div>
            <MeetTheCreators />
            <Testimonials />
          </div>
          <PricingPlan />
          <CreativeCareer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
