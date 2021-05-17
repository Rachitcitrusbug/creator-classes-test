import React from "react";
import CreatorHeader from "../../pages/Creator/CreatorHeader";
import Banner from "../../pages/Creator/Banner";
import About from "../../pages/Creator/About";
import ClassesByCreator from "../../pages/Creator/ClassesByCreator";
import UpcomingLiveStream from "../../pages/Creator/UpcomingLiveStream";
import MaterialsByCreator from "../../pages/Creator/MaterialsByCreator";
import SimilarCreators from "../../pages/Creator/SimilarCreators";
import CreatorFooter from "../../pages/Creator/CreatorFooter";

function CreatorDetails() {
  return (
    <>
      <div id="wrapper" class="wrapper home-wrapper">
        <CreatorHeader />
        <div class="main-middle-area pt-custom-0">
          <Banner />
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
