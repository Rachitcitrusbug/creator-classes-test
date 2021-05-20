import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import User1 from '../../assets/images/user-01.jpg';
import User2 from '../../assets/images/user-02.jpg';
import T1 from '../../assets/images/testimonial/t1.png';
import T2 from '../../assets/images/testimonial/t2.png';
import T3 from '../../assets/images/testimonial/t3.png';
import T4 from '../../assets/images/testimonial/t4.png';
import T5 from '../../assets/images/testimonial/t5.png';

function Testimonials() {
  return (
    <>
      <section className="testimonials-section" id="testimonials-section">
        <div className="testimonials-div">
          <div className="heading-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>Testimonials</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-owl-slider-main-div">
            <div className="container container-1200">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="testimonials-slider-slider-root">
                    <OwlCarousel
                      className="owl-carousel owl-theme testimonials-owl-div"
                      id="sync1"
                      loop={true}
                      items={3.2}
                      margin={15}
                      nav={false}
                      dots={false}
                      stagePadding={0}
                      autoplay={true}
                      smartSpeed={2000}
                      responsiveClass={true}
                      responsive={{
                        0: {
                          items: 2,
                          autoplay: true,
                          center: true,
                          margin: 8,
                        },
                        600: {
                          items: 2.3,
                        },
                        1200: {
                          items: 3.1,
                        },
                        1600: {
                          items: 4.8,
                        },
                      }}
                    >
                      <div className="item">
                        <div className="testimonials-card-box">
                          <div className="testimonials-card-inner">
                            <div className="user-top-row">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={User1}
                                  className="img-fluid img-responsive"
                                  alt="testimonials"
                                />{' '}
                              </div>
                              <div className="text-content-div">
                                <h3>
                                  <a href="#" className="link">
                                    Brendon Shrek
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
                                  “Creator Classes is one of the best investments I&apos;ve made as
                                  a freelance Content Creator. I bought this course to brush up on
                                  the more technical side of things that I had missed at the start
                                  of my journey, and boy do I wish this course was around when I
                                  first started! The classes are informative, entertaining and cover
                                  topics that you can’t find anywhere else. I highly recommend this
                                  if you want to develop a creative passion or if you’re serious
                                  about a career in this industry!”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial-info">
                          <h3>Ryan Bettins</h3>
                          <p>Marketing Manager, Netflix </p>
                        </div>
                      </div>

                      <div className="item">
                        <div className="testimonials-card-box">
                          <div className="testimonials-card-inner">
                            <div className="user-top-row">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={User2}
                                  className="img-fluid img-responsive"
                                  alt="testimonials"
                                />{' '}
                              </div>
                              <div className="text-content-div">
                                <h3>
                                  <a href="#" className="link">
                                    Lizzy Read
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
                                  “The quality of the Creator Classes content and visuals are
                                  unmatched! The information provided in each class is clear,
                                  detailed and thoroughly explained. As I&apos;m starting to take my
                                  passion for creating content more seriously the ability to find
                                  invaluable and trusted information in one all-inclusive course is
                                  ideal. Each tutorial contains such a high volume of quality
                                  information that is clearly explained, so I can easily understand
                                  all the information without it ever feeling overwhelming!
                                  I&apos;ve learnt so many pieces of information and nuggets of
                                  wisdom that will propel me forward on my creative journey.”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial-info">
                          <h3>Ryan Bettins</h3>
                          <p>Marketing Manager, Netflix </p>
                        </div>
                      </div>

                      <div className="item">
                        <div className="testimonials-card-box">
                          <div className="testimonials-card-inner">
                            <div className="user-top-row">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={User1}
                                  className="img-fluid img-responsive"
                                  alt="testimonials"
                                />{' '}
                              </div>
                              <div className="text-content-div">
                                <h3>
                                  <a href="#" className="link">
                                    Brendon Shrek
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
                                  “Creator Classes is one of the best investments I&apos;ve made as
                                  a freelance Content Creator. I bought this course to brush up on
                                  the more technical side of things that I had missed at the start
                                  of my journey, and boy do I wish this course was around when I
                                  first started! The classes are informative, entertaining and cover
                                  topics that you can’t find anywhere else. I highly recommend this
                                  if you want to develop a creative passion or if you’re serious
                                  about a career in this industry!”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial-info">
                          <h3>Ryan Bettins</h3>
                          <p>Marketing Manager, Netflix </p>
                        </div>
                      </div>

                      <div className="item">
                        <div className="testimonials-card-box">
                          <div className="testimonials-card-inner">
                            <div className="user-top-row">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={User2}
                                  className="img-fluid img-responsive"
                                  alt="testimonials"
                                />{' '}
                              </div>
                              <div className="text-content-div">
                                <h3>
                                  <a href="#" className="link">
                                    Lizzy Read
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
                                  “The quality of the Creator Classes content and visuals are
                                  unmatched! The information provided in each class is clear,
                                  detailed and thoroughly explained. As I&apos;m starting to take my
                                  passion for creating content more seriously the ability to find
                                  invaluable and trusted information in one all-inclusive course is
                                  ideal. Each tutorial contains such a high volume of quality
                                  information that is clearly explained, so I can easily understand
                                  all the information without it ever feeling overwhelming!
                                  I&apos;ve learnt so many pieces of information and nuggets of
                                  wisdom that will propel me forward on my creative journey.”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial-info">
                          <h3>Ryan Bettins</h3>
                          <p>Marketing Manager, Netflix </p>
                        </div>
                      </div>

                      <div className="item">
                        <div className="testimonials-card-box">
                          <div className="testimonials-card-inner">
                            <div className="user-top-row">
                              <div className="img-thumb">
                                {' '}
                                <img
                                  src={User2}
                                  className="img-fluid img-responsive"
                                  alt="testimonials"
                                />{' '}
                              </div>
                              <div className="text-content-div">
                                <h3>
                                  <a href="#" className="link">
                                    Lizzy Read
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
                                  “The quality of the Creator Classes content and visuals are
                                  unmatched! The information provided in each class is clear,
                                  detailed and thoroughly explained. As I&apos;m starting to take my
                                  passion for creating content more seriously the ability to find
                                  invaluable and trusted information in one all-inclusive course is
                                  ideal. Each tutorial contains such a high volume of quality
                                  information that is clearly explained, so I can easily understand
                                  all the information without it ever feeling overwhelming!
                                  I&apos;ve learnt so many pieces of information and nuggets of
                                  wisdom that will propel me forward on my creative journey.”
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="testimonial-info">
                          <h3>Ryan Bettins</h3>
                          <p>Marketing Manager, Netflix </p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="testimonial-thumb">
                    <OwlCarousel
                      id="sync2"
                      className="owl-carousel owl-theme"
                      loop={false}
                      items={5}
                      margin={10}
                      nav={false}
                      dots={false}
                      stagePadding={0}
                      autoplay={true}
                      smartSpeed={2000}
                      responsiveClass={true}
                      responsive={{
                        0: {
                          items: 2,
                          autoplay: true,
                          center: true,
                          margin: 8,
                        },
                        600: {
                          items: 2.3,
                        },
                        1200: {
                          items: 3.1,
                        },
                        1600: {
                          items: 4.8,
                        },
                      }}
                    >
                      <div className="item">
                        <div className="testimonial-profile">
                          <img src={T1} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-profile">
                          <img src={T2} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-profile">
                          <img src={T3} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-profile">
                          <img src={T4} alt="" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimonial-profile">
                          <img src={T5} alt="" />
                        </div>
                      </div>
                    </OwlCarousel>
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

export default Testimonials;
