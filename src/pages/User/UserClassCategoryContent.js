import React from 'react';
import UserFilmmaking from './UserFilmmaking';
import UserPhotography from './UserPhotography';
import UserUnderwater from './UserUnderwater';

function UserClassCategoryContent() {
  return (
    <>
      <section className="our-card-classes-section">
        <div className="container container-1200">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <UserFilmmaking />

              <UserUnderwater />

              <UserPhotography />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserClassCategoryContent;
