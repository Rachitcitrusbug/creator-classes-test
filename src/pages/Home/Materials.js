import React from "react";
import Material from "../../assets/images/latest/material.png";

function Materials() {
  return (
    <>
      <section className="block-banner-new-classes-section block-banner-classes-04">
        <div className="block-banner-new-classes-div">
          <div className="block-banner-classes-root">
            <div className="container">
              <div className="row align-items-center-row">
                <div className="col-lg-5 col-md-6">
                  <div className="center-content-div">
                    <div className="center-content-row">
                      <h2>
                        {" "}
                        <span className="block">Materials </span>{" "}
                      </h2>
                      <div className="title-line-div">
                        <h4>Level up your work with our vast library</h4>
                      </div>
                      <div className="img-thumb-div d-none">
                        <div className="img-thumb-inner">
                          <img
                            src={Material}
                            className="img-fluid img-responsive"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="desc-div">
                        <p>
                          Donec sollicitudin molestie malesuada. Praesent sapien
                          massa, convallis a pellentesque nec, egestas non nisi.
                          Curabitur aliquet quam id dui posuere blandit.
                        </p>
                      </div>
                      <div className="button-group-div">
                        <a
                          href="#"
                          className="btn btn-primary-outline btn-primary-outline-big"
                        >
                          <span className="text">Learn More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-md-6">
                  <div className="img-thumb-div m-none blur-bg">
                    <div className="img-thumb-inner">
                      <img
                        src={Material}
                        className="img-fluid img-responsive"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Materials;
