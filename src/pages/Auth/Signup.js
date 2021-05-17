import React from "react";
import { useHistory } from "react-router-dom";
import AuthLeftBanner from "./AuthLeftBanner";

function Signup() {
  const history = useHistory();
  const handleLoginClick = (e) => {
    e.preventDefault();
    history.push("/login");
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
                                <h2>Signup to Creator Classes</h2>
                              </div>

                              <div className="form-auth-root form-general-root">
                                <div className="form-root-main">
                                  <form className="form-root common-form-div">
                                    <div className="row mlr-8">
                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="social-button-div">
                                          <div className="sb-div-row">
                                            <div className="sb-div">
                                              <a
                                                href=""
                                                className="btn btn-blck-sb btn-blck-sb-full google-btn"
                                              >
                                                <span className="img-icon">
                                                  {" "}
                                                  <span className="bg-custom-icon google-icon"></span>{" "}
                                                </span>
                                                <span className="text-div">
                                                  {" "}
                                                  Signup with Google{" "}
                                                </span>
                                              </a>
                                            </div>
                                            <div className="sb-div">
                                              <a
                                                href=""
                                                className="btn btn-blck-sb btn-blck-sb-full facebook-btn"
                                              >
                                                <span className="img-icon">
                                                  {" "}
                                                  <span className="bg-custom-icon facebook-icon"></span>{" "}
                                                </span>
                                                <span className="text-div">
                                                  {" "}
                                                  Facebook{" "}
                                                </span>
                                              </a>
                                            </div>
                                            <div className="sb-div">
                                              <a
                                                href=""
                                                className="btn btn-blck-sb btn-blck-sb-full twitter-btn"
                                              >
                                                <span className="img-icon">
                                                  {" "}
                                                  <span className="bg-custom-icon twitter-icon"></span>{" "}
                                                </span>
                                                <span className="text-div">
                                                  {" "}
                                                  Twitter{" "}
                                                </span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="or-separator-div">
                                          <p>or</p>
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
                                        <div className="form-group mb-30">
                                          <label className="label-text">
                                            Email
                                          </label>
                                          <div className="form-group-control">
                                            <input
                                              type="email"
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
                                        <div className="form-group mb-30">
                                          <label className="label-text">
                                            Password
                                          </label>
                                          <div className="form-group-control pass-form-group-control">
                                            <input
                                              type="password"
                                              id="password1"
                                              className="form-control"
                                              placeholder=""
                                            />
                                            <span className="icon-group pass-icon-group">
                                              <button
                                                type="button"
                                                id="show_password1"
                                                name="show_password"
                                                className="pass-hide password-view-click"
                                              >
                                                <span className="pass-custom-icon material-icons">
                                                  {" "}
                                                  visibility{" "}
                                                </span>
                                              </button>
                                            </span>
                                          </div>

                                          <div className="invalid-feedback">
                                            Incorrect password
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="form-group mb-30">
                                          <label className="label-text">
                                            Confirm Password
                                          </label>
                                          <div className="form-group-control pass-form-group-control">
                                            <input
                                              type="password"
                                              id="password2"
                                              className="form-control"
                                              placeholder=""
                                            />
                                            <span className="icon-group pass-icon-group">
                                              <button
                                                type="button"
                                                id="show_password2"
                                                name="show_password"
                                                className="pass-hide password-view-click"
                                              >
                                                <span className="pass-custom-icon material-icons">
                                                  {" "}
                                                  visibility{" "}
                                                </span>
                                              </button>
                                            </span>
                                          </div>

                                          <div className="invalid-feedback">
                                            Incorrect password
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="custom-control custom-checkbox mb-45">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="remember-me-card"
                                            name="example1"
                                          />
                                          <label
                                            className="custom-control-label"
                                            for="remember-me-card"
                                          >
                                            Remember me
                                          </label>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="general-form-btn">
                                          <div className="general-form-left-btn">
                                            <button
                                              type="button"
                                              className="btn btn-common-primary mh-btn55 btn-signup disabled"
                                            >
                                              Sign Up
                                            </button>
                                          </div>
                                          <div className="general-form-right-btn">
                                            <p className="text-link">
                                              Are you a instructor{" "}
                                              <a
                                                href=""
                                                className="link link-primary-auth"
                                              >
                                                Sign up here{" "}
                                              </a>
                                            </p>
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
                                          Already have an account?{" "}
                                          <a
                                            href=""
                                            className="btn btn-link btn-red-link"
                                            onClick={handleLoginClick}
                                          >
                                            Sign in
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

export default Signup;
