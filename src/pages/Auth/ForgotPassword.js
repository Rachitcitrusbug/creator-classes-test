import React from "react";
import { useHistory } from "react-router-dom";
import AuthLeftBanner from "./AuthLeftBanner";

function ForgotPassword() {
  const history = useHistory();
  const handleSignupClick = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  return (
    <>
      <div id="wrapper" className="wrapper login-wrapper">
        <div className="main-middle-area pt-custom-0">
          <section className="auth-section" id="login-section">
            <div className="auth-div">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-12 p-0">
                    <div className="auth-root-div">
                      <AuthLeftBanner />

                      <div className="auth-right-side">
                        <div className="auth-content-broot-div">
                          <div className="auth-content-div">
                            <div className="auth-top-area-div">
                              <div className="heading-div">
                                <h2>Forgot your password?</h2>
                              </div>

                              <div className="form-auth-root form-general-root">
                                <div className="form-root-main">
                                  <form className="form-root common-form-div">
                                    <div className="row mlr-8">
                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="message-info-div">
                                          <p>
                                            Enter your email address below and
                                            we'll get you back on track.
                                          </p>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="form-group mb-30">
                                          <label className="label-text">
                                            Username or email
                                          </label>
                                          <div className="form-group-control">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder=""
                                            />
                                          </div>
                                          <div className="invalid-feedback">
                                            This field is required
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="general-form-btn">
                                          <div className="general-form-left-btn">
                                            <button
                                              type="button"
                                              className="btn btn-common-primary mh-btn55 btn-reset-password disabled"
                                            >
                                              Reset Password
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>

                            <div className="auth-bottom-area-div">
                              <div className="row mlr-8">
                                <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                  <div className="bottom-row">
                                    <div className="bottom-left-bx">
                                      <div className="link-box text-center-reg-side">
                                        <p>
                                          Are you a instructor{" "}
                                          <a
                                            href=""
                                            className="btn btn-link btn-red-link"
                                          >
                                            Login here
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bottom-right-bx">
                                      <div className="link-box text-center-reg-side">
                                        <p>
                                          Already have an account{" "}
                                          <a
                                            href=""
                                            className="btn btn-link btn-red-link"
                                            onClick={handleSignupClick}
                                          >
                                            Signup
                                          </a>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
