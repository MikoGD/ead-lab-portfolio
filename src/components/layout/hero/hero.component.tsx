import React from 'react';
import profileImage from '../../../assets/images/profile.jpg';

export default function Hero(): React.ReactElement {
  return (
    <div className="container h-100 mt-5">
      <div className="h-75 d-flex flex-column justify-content-center align-items-center">
        <img
          src={profileImage}
          alt="Author in the mountain"
          className="rounded-circle h-auto w-25 shadow-sm mb-5"
        />
        <div className="text-center w-100">
          <h1 className="text-light text-uppercase">
            <strong>#1 Web Developer of 2022*</strong>
          </h1>
          <p className="text-light">
            <em>*Award given by Mikael Inc.*</em>
          </p>
        </div>
      </div>
    </div>
  );
}
