import React from 'react';
import Feedback1 from '../../assets/images/feedback-user-01.jpg';
import Feedback2 from '../../assets/images/feedback-user-02.jpg';
import Feedback3 from '../../assets/images/feedback-user-03.jpg';

function Reviews() {
  return (
    <>
      <section className="creator-reviews-section" id="creator-reviews-section">
        <div className="creator-reviews-div">
          <div className="container container-800">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="heading-div">
                  <div className="heading-inner-div">
                    <h3>Creator Reviews</h3>
                    <div className="star-row-div">
                      <div className="star-left-div">
                        <ul className="star-rating-ul">
                          <li>
                            <span className="material-icons star-custom-icon active">star</span>
                          </li>
                          <li>
                            <span className="material-icons star-custom-icon active">star</span>
                          </li>
                          <li>
                            <span className="material-icons star-custom-icon active">star</span>
                          </li>
                          <li>
                            <span className="material-icons star-custom-icon active">star</span>
                          </li>
                          <li>
                            <span className="material-icons star-custom-icon active">star</span>
                          </li>
                        </ul>
                      </div>
                      <div className="star-right-div">
                        <span className="text">(99)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-area-div">
                  <div className="form-textarea-div">
                    <div className="form-group">
                      <textarea
                        className="form-control form-textarea"
                        rows="4"
                        placeholder="Write your review"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="comment-list-view-div">
                  <div className="comment-list-view-row">
                    <div className="comment-card-box">
                      <div className="comment-card-inner">
                        <div className="user-top-row">
                          <div className="img-thumb">
                            {' '}
                            <img
                              src={Feedback1}
                              className="img-fluid img-responsive"
                              alt="testimonials"
                            />{' '}
                          </div>
                          <div className="text-content-div">
                            <h3>
                              <a href="#" className="link">
                                Cristiano Ronaldo
                              </a>
                            </h3>
                            <div className="star-row-div">
                              <ul className="star-rating-ul">
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="user-desc-row">
                          <div className="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus
                              orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                              auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent
                              sapien massa, convallis a pellentesque nec, egestas non nisi.
                              Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan
                              tincidunt. Nulla quis lorem ut libero malesuada feugiat. Pellentesque
                              in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada
                              feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis
                              at tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comment-card-box">
                      <div className="comment-card-inner">
                        <div className="user-top-row">
                          <div className="img-thumb">
                            {' '}
                            <img
                              src={Feedback2}
                              className="img-fluid img-responsive"
                              alt="testimonials"
                            />{' '}
                          </div>
                          <div className="text-content-div">
                            <h3>
                              <a href="#" className="link">
                                Lionel Messi
                              </a>
                            </h3>
                            <div className="star-row-div">
                              <ul className="star-rating-ul">
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="user-desc-row">
                          <div className="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus
                              orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                              auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comment-card-box">
                      <div className="comment-card-inner">
                        <div className="user-top-row">
                          <div className="img-thumb">
                            {' '}
                            <img
                              src={Feedback3}
                              className="img-fluid img-responsive"
                              alt="testimonials"
                            />{' '}
                          </div>
                          <div className="text-content-div">
                            <h3>
                              <a href="#" className="link">
                                Ellyse Perry
                              </a>
                            </h3>
                            <div className="star-row-div">
                              <ul className="star-rating-ul">
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span className="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="user-desc-row">
                          <div className="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus
                              orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
                              auctor sit amet aliquam vel, ullamcorper sit amet ligula.
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
      </section>
    </>
  );
}

export default Reviews;
