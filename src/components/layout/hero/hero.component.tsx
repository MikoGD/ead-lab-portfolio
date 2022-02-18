import classnames from 'classnames';
import React from 'react';
import profileImage from '../../../assets/images/profile.jpg';
import styles from './hero.module.scss';

interface HeroProps {
  style?: React.CSSProperties;
}

export default function Hero({
  style,
}: HeroProps): React.ReactElement<HeroProps> {
  return (
    <div className={classnames('container pt-5', styles.hero)} style={style}>
      <div className="h-75 d-flex flex-column justify-content-center align-items-center">
        <img
          src={profileImage}
          alt="Author in the mountain"
          className={classnames(
            'rounded-circle h-auto shadow-sm mb-5',
            styles.profileImage
          )}
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
