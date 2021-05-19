import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { UserLogin } from '../../api/userLoginApi';
import { userData } from '../../redux/Actions/UserDataAction';
import AuthLeftBanner from './AuthLeftBanner';

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      setEmail('');
      setPassword('');

      const loginData = {
        email_or_username: email,
        password: password,
      };

      try {
        UserLogin(loginData).then((result) => {
          if (result) {
            switch (result.code) {
              case 200:
                if (result.status == true) {
                  const data = {
                    email: result.data.email,
                    username: result.data.username,
                    profile_image: result.data.profile_image,
                  };
                  props.userData(data);
                  localStorage.setItem('token', result.data.token);
                  history.push('/user-home', { user: result.data });
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
    const passwordErr = {};
    let isValid = true;

    if (email.trim().length === 0) {
      emailErr.emailRequired = 'Email is required!';
      isValid = false;
    }

    if (password.trim().length < 6) {
      passwordErr.passwordShort = 'Password is too short!';
      isValid = false;
    }

    if (password.trim().length > 12) {
      passwordErr.passwordLong = 'Password is too long!';
      isValid = false;
    }

    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
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
                                <h2>Login to Creator Classes</h2>
                              </div>

                              <div className="form-auth-root form-general-root">
                                <div className="form-root-main">
                                  <form className="form-root common-form-div">
                                    <div className="row mlr-8">
                                      <div className="col-xl-12 col-lg-12 col-md-12 plr-8">
                                        <div className="social-button-div">
                                          <div className="sb-div-row">
                                            <div className="sb-div">
                                              <Link
                                                to="/login"
                                                className="btn btn-blck-sb btn-blck-sb-full google-btn"
                                              >
                                                <span className="img-icon">
                                                  {' '}
                                                  <span className="bg-custom-icon google-icon"></span>{' '}
                                                </span>
                                                <span className="text-div">
                                                  {' '}
                                                  Login with Google{' '}
                                                </span>
                                              </Link>
                                            </div>
                                            <div className="sb-div">
                                              <Link
                                                to="/login"
                                                className="btn btn-blck-sb btn-blck-sb-full facebook-btn"
                                              >
                                                <span className="img-icon">
                                                  {' '}
                                                  <span className="bg-custom-icon facebook-icon"></span>{' '}
                                                </span>
                                                <span className="text-div"> Facebook </span>
                                              </Link>
                                            </div>
                                            <div className="sb-div">
                                              <Link
                                                to="/login"
                                                className="btn btn-blck-sb btn-blck-sb-full twitter-btn"
                                              >
                                                <span className="img-icon">
                                                  {' '}
                                                  <span className="bg-custom-icon twitter-icon"></span>{' '}
                                                </span>
                                                <span className="text-div"> Twitter </span>
                                              </Link>
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
                                          <label className="label-text">Username or email</label>
                                          <div className="form-group-control">
                                            <input
                                              type="text"
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
                                        <div className="form-group mb-30">
                                          <label className="label-text">Password</label>
                                          <div className="form-group-control pass-form-group-control">
                                            <input
                                              type="password"
                                              id="password1"
                                              className="form-control"
                                              placeholder=""
                                              value={password}
                                              onChange={(e) => {
                                                setPassword(e.target.value);
                                              }}
                                            />
                                            <span className="icon-group pass-icon-group">
                                              <button
                                                type="button"
                                                id="show_password1"
                                                name="show_password"
                                                className="pass-hide password-view-click"
                                              >
                                                <span className="pass-custom-icon material-icons">
                                                  {' '}
                                                  visibility{' '}
                                                </span>
                                              </button>
                                            </span>
                                          </div>
                                          {Object.keys(passwordErr).map((key, index) => {
                                            return (
                                              <span key={index} style={{ color: 'red' }}>
                                                {passwordErr[key]}
                                              </span>
                                            );
                                          })}
                                          <div className="invalid-feedback">Incorrect password</div>
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
                                            htmlFor="remember-me-card"
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
                                              className="btn btn-common-primary mh-btn55 btn-login disabled"
                                              onClick={handleFormSubmit}
                                            >
                                              Log in
                                            </button>
                                          </div>
                                          <div className="general-form-right-btn">
                                            <Link
                                              to="/forgot-password"
                                              className="link link-primary-auth"
                                            >
                                              Forgot your password?{' '}
                                            </Link>
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
                                          Don&apos;t have an account?{' '}
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

const mapStateToProps = (state) => {
  return {
    email: state.email,
    username: state.username,
    profile_image: state.profile_image,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userData: (data) => dispatch(userData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  userData: PropTypes.object,
};
