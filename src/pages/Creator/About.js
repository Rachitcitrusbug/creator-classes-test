import React from 'react';
import { useSelector } from 'react-redux';

function About() {
  const first_name = useSelector((state) => state.creatorDetails.first_name);
  const last_name = useSelector((state) => state.creatorDetails.last_name);
  const total_rating = useSelector((state) => state.creatorDetails.total_rating);
  const other_skills = useSelector((state) => state.creatorDetails.other_skills);
  const description = useSelector((state) => state.creatorDetails.description);

  return (
    <>
      <section className="about-creator-section" id="about-creator-section">
        <div className="about-creator-div">
          <div className="heading-div">
            <div className="container container-1000">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="heading-inner-div">
                    <h2>
                      About {first_name} {last_name}
                    </h2>

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
                        <span className="text">({total_rating})</span>
                      </div>
                    </div>

                    <div className="skill-category-tabs-div">
                      <div className="skill-category-title">
                        <h4>Skills</h4>
                      </div>

                      <div className="skill-category-inner">
                        <ul className="skill-list-ul">
                          {other_skills.map((skill, index) => (
                            <li key={index}>
                              <a href="" className="filter-link">
                                {skill}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="user-desc-row">
                      <div className="desc-div">
                        <p>{description}</p>
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

export default About;
