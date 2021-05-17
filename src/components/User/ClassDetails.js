import React from "react";
import ClassHeader from "../../pages/Class/ClassHeader";
import Details from "../../pages/Class/Details";
import Reviews from "../../pages/Class/Reviews";
import SimilarClasses from "../../pages/Class/SimilarClasses";

function ClassDetails() {
  return (
    <>
      <div id="wrapper" class="wrapper user-home-wrapper">
        <ClassHeader />
        <div class="main-middle-area pt-custom-default">
          <Details />
          <Reviews />
          <SimilarClasses />
        </div>
      </div>
    </>
  );
}

export default ClassDetails;
