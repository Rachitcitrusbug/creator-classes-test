import React from "react";
import Feedback1 from "../../assets/images/feedback-user-01.jpg";
import Feedback2 from "../../assets/images/feedback-user-02.jpg";
import Feedback3 from "../../assets/images/feedback-user-03.jpg";

function Reviews() {
  return (
    <>
      <section class="creator-reviews-section" id="creator-reviews-section">
        <div class="creator-reviews-div">
          <div class="container container-800">
            <div class="row">
              <div class="col-lg-12 col-md-12">
                <div class="heading-div">
                  <div class="heading-inner-div">
                    <h3>Creator Reviews</h3>
                    <div class="star-row-div">
                      <div class="star-left-div">
                        <ul class="star-rating-ul">
                          <li>
                            <span class="material-icons star-custom-icon active">
                              star
                            </span>
                          </li>
                          <li>
                            <span class="material-icons star-custom-icon active">
                              star
                            </span>
                          </li>
                          <li>
                            <span class="material-icons star-custom-icon active">
                              star
                            </span>
                          </li>
                          <li>
                            <span class="material-icons star-custom-icon active">
                              star
                            </span>
                          </li>
                          <li>
                            <span class="material-icons star-custom-icon active">
                              star
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div class="star-right-div">
                        <span class="text">(99)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-area-div">
                  <div class="form-textarea-div">
                    <div class="form-group">
                      <textarea
                        class="form-control form-textarea"
                        rows="4"
                        placeholder="Write your review"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div class="comment-list-view-div">
                  <div class="comment-list-view-row">
                    <div class="comment-card-box">
                      <div class="comment-card-inner">
                        <div class="user-top-row">
                          <div class="img-thumb">
                            {" "}
                            <img
                              src={Feedback1}
                              class="img-fluid img-responsive"
                              alt="testimonials"
                            />{" "}
                          </div>
                          <div class="text-content-div">
                            <h3>
                              <a href="#" class="link">
                                Cristiano Ronaldo
                              </a>
                            </h3>
                            <div class="star-row-div">
                              <ul class="star-rating-ul">
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="user-desc-row">
                          <div class="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in,
                              elementum id enim. Vestibulum ante ipsum primis in
                              faucibus orci luctus et ultrices posuere cubilia
                              Curae; Donec velit neque, auctor sit amet aliquam
                              vel, ullamcorper sit amet ligula. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor
                              sit amet aliquam vel, ullamcorper sit amet ligula.
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Pellentesque in ipsum id
                              orci porta dapibus. Nulla porttitor accumsan
                              tincidunt. Nulla quis lorem ut libero malesuada
                              feugiat. Pellentesque in ipsum id orci porta
                              dapibus. Nulla quis lorem ut libero malesuada
                              feugiat. Vivamus magna justo, lacinia eget
                              consectetur sed, convallis at tellus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="comment-card-box">
                      <div class="comment-card-inner">
                        <div class="user-top-row">
                          <div class="img-thumb">
                            {" "}
                            <img
                              src={Feedback2}
                              class="img-fluid img-responsive"
                              alt="testimonials"
                            />{" "}
                          </div>
                          <div class="text-content-div">
                            <h3>
                              <a href="#" class="link">
                                Lionel Messi
                              </a>
                            </h3>
                            <div class="star-row-div">
                              <ul class="star-rating-ul">
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="user-desc-row">
                          <div class="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in,
                              elementum id enim. Vestibulum ante ipsum primis in
                              faucibus orci luctus et ultrices posuere cubilia
                              Curae; Donec velit neque, auctor sit amet aliquam
                              vel, ullamcorper sit amet ligula. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor
                              sit amet aliquam vel, ullamcorper sit amet ligula.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="comment-card-box">
                      <div class="comment-card-inner">
                        <div class="user-top-row">
                          <div class="img-thumb">
                            {" "}
                            <img
                              src={Feedback3}
                              class="img-fluid img-responsive"
                              alt="testimonials"
                            />{" "}
                          </div>
                          <div class="text-content-div">
                            <h3>
                              <a href="#" class="link">
                                Ellyse Perry
                              </a>
                            </h3>
                            <div class="star-row-div">
                              <ul class="star-rating-ul">
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                                <li>
                                  <span class="material-icons star-custom-icon active">
                                    star
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="user-desc-row">
                          <div class="desc-div">
                            <p>
                              Quisque velit nisi, pretium ut lacinia in,
                              elementum id enim. Vestibulum ante ipsum primis in
                              faucibus orci luctus et ultrices posuere cubilia
                              Curae; Donec velit neque, auctor sit amet aliquam
                              vel, ullamcorper sit amet ligula. Vestibulum ante
                              ipsum primis in faucibus orci luctus et ultrices
                              posuere cubilia Curae; Donec velit neque, auctor
                              sit amet aliquam vel, ullamcorper sit amet ligula.
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
