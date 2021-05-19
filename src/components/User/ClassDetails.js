import React from 'react';
import Details from '../../pages/Class/Details';
import Reviews from '../../pages/Class/Reviews';
import SimilarClasses from '../../pages/Class/SimilarClasses';
import UserHeader from '../../pages/User/UserHeader';

function ClassDetails() {
  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        <UserHeader />
        <div className="main-middle-area pt-custom-default">
          <Details />
          <Reviews />
          <SimilarClasses />
        </div>
      </div>
    </>
  );
}

export default ClassDetails;
