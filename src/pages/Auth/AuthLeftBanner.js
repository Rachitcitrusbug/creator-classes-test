import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/white-icon-logo.svg";
import BannerLogo from "../../assets/images/background/banner-auth-logo.png";

function AuthLeftBanner() {
  const history = useHistory();
  const handleLogoClick = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <>
      <div className="auth-left-side">
        <div className="auth-banner-div">
          <div className="img-thumb">
            <div className="logo-auth-div">
              <div className="logo-div">
                <a
                  className="logo_link clearfix"
                  href=""
                  onClick={handleLogoClick}
                >
                  <img
                    src={Logo}
                    className="img-fluid logo_img main-logo"
                    alt="logo"
                  />
                  <h1 className="text-logo">
                    {" "}
                    <span className="text-logo-span1">Creator</span>{" "}
                    <span className="text-logo-span2">classes</span>
                  </h1>
                </a>
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
