import React from 'react';
import { Link } from 'react-router-dom';
import Film1 from '../../assets/images/user-home/filmmaking.jpg';
import Film2 from '../../assets/images/user-home/filmmaking2.jpg';
import Film3 from '../../assets/images/user-home/filmmaking3.jpg';
import Film4 from '../../assets/images/user-home/filmmaking4.jpg';
import Creator3 from '../../assets/images/creators/creators3.jpg';

function UserFilmmaking() {
  return (
    <>
      <div className="our-card-classes-div bordertop1">
        <div className="common-heading-div">
          <div className="common-heading-inner-div">
            <div className="common-heading-title-row">
              <div className="common-heading-title-left">
                <h2>Filmmaking</h2>
              </div>
              <div className="common-heading-title-right">
                <Link to="" className="btn btn-primary-outline btn-primary-outline-n45">
                  <span className="text">View all</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="common-card-class-feed-div">
          <div className="row">
            <div className="col-lg-6 col-md-12 left-big-img-order">
              <div className="common-feed-card-slider-bx-big">
                <div className="our-video-img-thumb">
                  <div className="img-thumb">
                    {' '}
                    <img src={Film1} className="img-fluid img-responsive" alt="image" />{' '}
                  </div>
                  <div className="like-box-abs">
                    {' '}
                    <button className="like-button">
                      <span className="like-icon "> </span>
                    </button>{' '}
                  </div>
                  <div className="time-box-abs">
                    {' '}
                    <button className="time-button"> 13:47 </button>{' '}
                  </div>
                </div>
                <div className="our-content-div">
                  <div className="our-content-row">
                    <div className="our-content-full">
                      <h4>
                        <Link to="">
                          Vivamus suscipit tortor eget felis porttitor volutpat Mauris blandit
                          aliquet elit
                        </Link>{' '}
                      </h4>
                    </div>
                  </div>

                  <div className="our-content-bottom-row">
                    <div className="our-content-bottom-left">
                      <div className="our-content-left">
                        <div className="thumb-img">
                          <Link to="" className="link">
                            <img src={Creator3} className="img-fluid user" alt="user" />
                          </Link>
                        </div>
                      </div>
                      <div className="our-content-right">
                        <h3>
                          <Link to="" className="link">
                            Mike Visuals{' '}
                            <span className="icon-rounded-span check-icon-rounded">
                              <span className="material-icons">done</span>
                            </span>{' '}
                          </Link>
                        </h3>
                        <p>Visual Expert</p>
                      </div>
                    </div>
                    <div className="our-content-bottom-right">
                      <h4>
                        <span className="material-icons">schedule</span>{' '}
                        <span className="txt">Posted 10 hours ago</span>{' '}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 right-small-img-order">
              <div className="common-feed-card-slider-bx-half-small">
                <div className="our-video-img-thumb">
                  <div className="img-thumb">
                    {' '}
                    <img src={Film2} className="img-fluid img-responsive" alt="image" />{' '}
                  </div>
                  <div className="like-box-abs">
                    {' '}
                    <button className="like-button">
                      <span className="like-icon "> </span>
                    </button>{' '}
                  </div>
                  <div className="time-box-abs">
                    {' '}
                    <button className="time-button"> 13:47 </button>{' '}
                  </div>
                </div>
                <div className="our-content-div">
                  <div className="our-content-row">
                    <div className="our-content-full">
                      <h4>
                        <Link to="">How to learn photography in an efficient way</Link>{' '}
                      </h4>
                    </div>

                    <div className="our-content-left">
                      <div className="thumb-img">
                        <Link to="" className="link">
                          <img src={Creator3} className="img-fluid user" alt="user" />
                        </Link>
                      </div>
                    </div>
                    <div className="our-content-right">
                      <h3>
                        <Link to="" className="link">
                          Mike Visuals{' '}
                          <span className="icon-rounded-span check-icon-rounded">
                            <span className="material-icons">done</span>
                          </span>{' '}
                        </Link>
                      </h3>
                      <p>Visual Expert</p>
                    </div>
                  </div>

                  <div className="our-content-bottom-row">
                    <div className="our-content-bottom-right">
                      <h4>
                        <span className="material-icons">schedule</span>{' '}
                        <span className="txt">Posted 10 hours ago</span>{' '}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="common-feed-card-slider-bx-half-small">
                <div className="our-video-img-thumb">
                  <div className="img-thumb">
                    {' '}
                    <img src={Film3} className="img-fluid img-responsive" alt="image" />{' '}
                  </div>
                  <div className="like-box-abs">
                    {' '}
                    <button className="like-button">
                      <span className="like-icon "> </span>
                    </button>{' '}
                  </div>
                  <div className="time-box-abs">
                    {' '}
                    <button className="time-button"> 13:47 </button>{' '}
                  </div>
                </div>
                <div className="our-content-div">
                  <div className="our-content-row">
                    <div className="our-content-full">
                      <h4>
                        <Link to="">How to learn photography in an efficient way</Link>{' '}
                      </h4>
                    </div>

                    <div className="our-content-left">
                      <div className="thumb-img">
                        <Link to="" className="link">
                          <img src={Creator3} className="img-fluid user" alt="user" />
                        </Link>
                      </div>
                    </div>
                    <div className="our-content-right">
                      <h3>
                        <Link to="" className="link">
                          Mike Visuals{' '}
                          <span className="icon-rounded-span check-icon-rounded">
                            <span className="material-icons">done</span>
                          </span>{' '}
                        </Link>
                      </h3>
                      <p>Visual Expert</p>
                    </div>
                  </div>

                  <div className="our-content-bottom-row">
                    <div className="our-content-bottom-right">
                      <h4>
                        <span className="material-icons">schedule</span>{' '}
                        <span className="txt">Posted 10 hours ago</span>{' '}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="common-feed-card-slider-bx-half-small">
                <div className="our-video-img-thumb">
                  <div className="img-thumb">
                    {' '}
                    <img src={Film4} className="img-fluid img-responsive" alt="image" />{' '}
                  </div>
                  <div className="like-box-abs">
                    {' '}
                    <button className="like-button">
                      <span className="like-icon "> </span>
                    </button>{' '}
                  </div>
                  <div className="time-box-abs">
                    {' '}
                    <button className="time-button"> 13:47 </button>{' '}
                  </div>
                </div>
                <div className="our-content-div">
                  <div className="our-content-row">
                    <div className="our-content-full">
                      <h4>
                        <Link to="">How to learn photography in an efficient way</Link>{' '}
                      </h4>
                    </div>

                    <div className="our-content-left">
                      <div className="thumb-img">
                        <Link to="" className="link">
                          <img src={Creator3} className="img-fluid user" alt="user" />
                        </Link>
                      </div>
                    </div>
                    <div className="our-content-right">
                      <h3>
                        <Link to="" className="link">
                          Mike Visuals{' '}
                          <span className="icon-rounded-span check-icon-rounded">
                            <span className="material-icons">done</span>
                          </span>{' '}
                        </Link>
                      </h3>
                      <p>Visual Expert</p>
                    </div>
                  </div>

                  <div className="our-content-bottom-row">
                    <div className="our-content-bottom-right">
                      <h4>
                        <span className="material-icons">schedule</span>{' '}
                        <span className="txt">Posted 10 hours ago</span>{' '}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFilmmaking;
