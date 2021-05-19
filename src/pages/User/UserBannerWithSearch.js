import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon1 from '../../assets/images/icons-filter/icon-01.png';
import Icon2 from '../../assets/images/icons-filter/icon-02.png';
import Icon3 from '../../assets/images/icons-filter/icon-03.png';
import Icon4 from '../../assets/images/icons-filter/icon-04.png';
import Icon5 from '../../assets/images/icons-filter/icon-05.png';

function UserBannerWithSearch() {
  const username = useSelector((state) => state.username);

  return (
    <>
      <section className="user-main-banner-section" id="user-main-banner-section">
        <div className="user-main-banner-div">
          <div className="heading-div">
            <div className="container container-970">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <div className="content-root">
                      <h1>Hi {username},</h1>
                      <p>Let us know what are you looking for . . .</p>
                    </div>

                    <div className="search-box-div">
                      <div className="search-box-row">
                        <div className="search-group">
                          <button className="btn btn-search-icon">
                            {' '}
                            <i className="bg-custom-icon search-icon-new"></i>{' '}
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for courses ..."
                          />
                        </div>
                      </div>
                    </div>

                    <div className="filter-category-root-div">
                      <div className="filter-category-inner">
                        <ul className="filter-list-ul">
                          <li className="active">
                            <Link to="" className="filter-link">
                              {' '}
                              All{' '}
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="filter-link">
                              {' '}
                              <span className="icon-img-span">
                                {' '}
                                <img src={Icon1} alt="img" className="img-fluid" />{' '}
                              </span>{' '}
                              <span className="span-text"> Underwater </span>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="filter-link">
                              {' '}
                              <span className="icon-img-span">
                                {' '}
                                <img src={Icon3} alt="img" className="img-fluid" />{' '}
                              </span>{' '}
                              <span className="span-text"> Filmmaking </span>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="filter-link">
                              {' '}
                              <span className="icon-img-span">
                                {' '}
                                <img src={Icon2} alt="img" className="img-fluid" />{' '}
                              </span>{' '}
                              <span className="span-text"> VFX </span>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="filter-link">
                              {' '}
                              <span className="icon-img-span">
                                {' '}
                                <img src={Icon4} alt="img" className="img-fluid" />{' '}
                              </span>{' '}
                              <span className="span-text"> Design </span>{' '}
                            </Link>
                          </li>
                          <li>
                            <Link to="" className="filter-link">
                              {' '}
                              <span className="icon-img-span">
                                {' '}
                                <img src={Icon5} alt="img" className="img-fluid" />{' '}
                              </span>{' '}
                              <span className="span-text"> Photography </span>{' '}
                            </Link>
                          </li>
                        </ul>
                      </div>
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

export default UserBannerWithSearch;

UserBannerWithSearch.propTypes = {
  name: PropTypes.any,
};
