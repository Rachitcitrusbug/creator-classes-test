import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../pages/Creator/Banner';
import About from '../../pages/Creator/About';
import ClassesByCreator from '../../pages/Creator/ClassesByCreator';
import UpcomingLiveStream from '../../pages/Creator/UpcomingLiveStream';
import MaterialsByCreator from '../../pages/Creator/MaterialsByCreator';
import SimilarCreators from '../../pages/Creator/SimilarCreators';
import CreatorFooter from '../../pages/Creator/CreatorFooter';
import UserHeader from '../../pages/User/UserHeader';

function CreatorDetails(props) {
  return (
    <>
      <div id="wrapper" className="wrapper home-wrapper">
        <UserHeader />
        <div className="main-middle-area pt-custom-0">
          <Banner data={props.location.state} />
          <About />
          <ClassesByCreator />
          <UpcomingLiveStream />
          <MaterialsByCreator />
          <SimilarCreators />
        </div>
        <CreatorFooter />
      </div>
    </>
  );
}

export default CreatorDetails;

CreatorDetails.propTypes = {
  location: PropTypes.object,
};
