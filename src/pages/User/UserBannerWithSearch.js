import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserClassFilterKeywords } from '../../api/userClassFilterKeywordsApi';
import { UserClassesSearch } from '../../api/userClassesSearchApi';

function UserBannerWithSearch() {
  const username = useSelector((state) => state.userData.username);
  const [keywordData, setKeywordData] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [classData, setClassData] = useState(undefined);

  const getUserClassFilterKeywords = () => {
    try {
      UserClassFilterKeywords().then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                result.data.length > 0 && setKeywordData(result.data);
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
  };

  useEffect(() => {
    getUserClassFilterKeywords();
  }, []);

  const handleSearch = () => {
    try {
      UserClassesSearch(query, filter).then((result) => {
        if (result) {
          switch (result.code) {
            case 200:
              if (result.status == true) {
                setClassData(result.data);
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
  };

  console.log(classData);

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
                          <button className="btn btn-search-icon" onClick={handleSearch}>
                            {' '}
                            <i className="bg-custom-icon search-icon-new"></i>{' '}
                          </button>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search for courses ..."
                            onChange={(e) => {
                              setQuery(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="filter-category-root-div">
                      <div className="filter-category-inner">
                        <ul className="filter-list-ul">
                          <li>
                            <Link
                              className="filter-link"
                              onClick={() => {
                                setFilter('');
                              }}
                            >
                              {' '}
                              All{' '}
                            </Link>
                          </li>

                          {keywordData.map((obj, index) => (
                            <li key={index}>
                              <Link
                                className="filter-link"
                                onClick={() => {
                                  setFilter(obj.id);
                                }}
                              >
                                {' '}
                                <span className="icon-img-span">
                                  {' '}
                                  <img src={obj.image} alt="img" className="img-fluid" />{' '}
                                </span>{' '}
                                <span className="span-text"> {obj.keyword} </span>{' '}
                              </Link>
                            </li>
                          ))}
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
