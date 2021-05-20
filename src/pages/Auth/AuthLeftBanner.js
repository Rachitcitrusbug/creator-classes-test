import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/white-icon-logo.svg';
import BannerLogo from '../../assets/images/background/banner-auth-logo.png';

function AuthLeftBanner() {
  return (
    <>
      <div className="auth-left-side">
        <div className="auth-banner-div">
          <div className="img-thumb">
            <div className="logo-auth-div">
              <div className="logo-div">
                <Link className="logo_link clearfix" to="/">
                  <img src={Logo} className="img-fluid logo_img main-logo" alt="logo" />
                  <h1 className="text-logo">
                    {' '}
                    <span className="text-logo-span1">Creator</span>{' '}
                    <span className="text-logo-span2">classes</span>
                  </h1>
                </Link>
              </div>
            </div>
            <img src={BannerLogo} className="img-fluid" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLeftBanner;
