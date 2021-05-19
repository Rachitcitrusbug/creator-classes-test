import React from 'react';
import UserBannerWithSearch from '../../pages/User/UserBannerWithSearch';
import UserClassCategoryContent from '../../pages/User/UserClassCategoryContent';
import UserPopularClasses from '../../pages/User/UserPopularClasses';
import UserHeader from '../../pages/User/UserHeader';
import UserUpcomingLiveStream from '../../pages/User/UserUpcomingLiveStream';
import UserFooter from '../../pages/User/UserFooter';

function UserHome() {
  return (
    <>
      <div id="wrapper" className="wrapper user-home-wrapper">
        <UserHeader />
        <div className="main-middle-area user-main-middle-area pt-custom-0">
          <div className="pattern-inner-div">
            <UserBannerWithSearch />
            <UserPopularClasses />
            <UserClassCategoryContent />
            <UserUpcomingLiveStream />
          </div>
        </div>
        <UserFooter />
      </div>
    </>
  );
}

export default UserHome;
