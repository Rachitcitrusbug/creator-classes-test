import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserForgotPassword } from '../../api/userForgotPasswordApi';
import AuthLeftBanner from './AuthLeftBanner';

function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      setEmail('');

      const forgotPasswordData = {
        email: email,
      };

      try {
        UserForgotPassword(forgotPasswordData).then((result) => {
          if (result) {
            switch (result.code) {
              case 200:
                if (result.status == true) {
                  history.push('/login');
                }
                break;
              case 400:
                console.log('Bad request.');
                break;
              case 401:
                console.log('Session Is Expired Please Login Again');
                break;
              case 500:
                console.log('Server error.');
                break;
              default:
                console.log(result.message);
                break;
            }
          }
        });
      } catch (err) {
        console.log('Something Went Wrong');
      }
    }
  };

  const formValidation = () => {
    const emailErr = {};
    let isValid = true;

    if (email.trim().length === 0) {
      emailErr.emailRequired = 'Email is required!';
      isValid = false;
    }

    setEmailErr(emailErr);
    return isValid;
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
                                            Enter your email address below and we&apos;ll get you
                                            back on track.
                                          </p>
                                        </div>
                                      </div>

                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="form-group mb-30">
                                          <label className="label-text">Email</label>
                                          <div className="form-group-control">
                                            <input
                                              type="email"
                                              className="form-control"
                                              placeholder=""
                                              value={email}
                                              onChange={(e) => {
                                                setEmail(e.target.value);
                                              }}
                                            />
                                          </div>
                                          {Object.keys(emailErr).map((key, index) => {
                                            return (
                                              <span key={index} style={{ color: 'red' }}>
                                                {emailErr[key]}
                                              </span>
                                            );
                                          })}
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
                                              onClick={handleFormSubmit}
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
                                          Are you a instructor{' '}
                                          <Link to="/" className="btn btn-link btn-red-link">
                                            Login here
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="bottom-right-bx">
                                      <div className="link-box text-center-reg-side">
                                        <p>
                                          Already have an account{' '}
                                          <Link to="/signup" className="btn btn-link btn-red-link">
                                            Signup
                                          </Link>
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
