import React from "react";
import Logo from "../../assets/images/white-icon-logo.svg";

function CreatorFooter() {
  return (
    <>
      <footer>
        <div class="footer-div footer-bg2">
          <div class="container container-1000">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="footer-logo-row">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="footer-logo-box-root">
                        <div class="footer-logo-thumb">
                          <a href="" class="logo-link">
                            <img
                              src={Logo}
                              class="img-fluid logo_img footer-logo"
                              alt="logo"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="footer-content-row">
                  <div class="row">
                    <div class="col-lg-5 col-md-5">
                      <div class="about-desc-footer-div">
                        <h4>About us</h4>
                        <p>
                          Creator Classes is a collection of online tutorials
                          from a team of top creators in the creative social
                          industry. We provide you with unprecedented resources
                          and invaluable tools straight from your favourite
                          creators all in one place. Our library of classes
                          covers photography, videography, editing, social
                          insights, business know-how and more. Start your
                          creative career.
                        </p>
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-3">
                      <div class="footer-nav-list-inner">
                        <ul class="footer-list-ul">
                          <li>
                            <a href="" class="link">
                              FAQs
                            </a>
                          </li>
                          <li>
                            <a href="" class="link">
                              Login
                            </a>
                          </li>
                          <li>
                            <a href="" class="link">
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a href="" class="link">
                              Terms of use
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                      <div class="es-box-div">
                        <div class="e-div">
                          <a
                            class="link"
                            href="mailto:support@creatorclasses.co"
                          >
                            {" "}
                            <i class="bg-custom-icon mail-icon"></i>{" "}
                            <span class="text">support@creatorclasses.co</span>{" "}
                          </a>
                        </div>

                        <div class="social-icon-div-root">
                          <ul class="footer-social-ul">
                            <li>
                              <a href="" class="social-link linkedin-link">
                                <i class="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" class="social-link facebook-link">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" class="social-link twitter-link">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="" class="social-link google-plus-link">
                                <i class="fab fa-google-plus-g"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="footer-copyright-div">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="footer-copyright-box-root">
                        <p>
                          {" "}
                          <a href="" class="link">
                            CreatorClasses
                          </a>{" "}
                          &copy; 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default CreatorFooter;
