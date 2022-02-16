import React from 'react';
import classnames from 'classnames';
import { Article, ArticleBody, ArticleHeader } from '../../article';
import styles from './about.module.scss';
import { flexCenter } from '../../../utilities';
// import GraphicsDesignImage from '../../../assets/images/graphic_design.jpg';
// import ProgrammingImage from '../../../assets/images/programming.jpg';
// import DevOpsImage from '../../../assets/images/devops.jpg';

export default function About(): React.ReactElement {
  return (
    <section
      className="mt-5 d-flex justify-content-center align-items-center"
      id="about"
    >
      <Article
        header={<ArticleHeader>About me</ArticleHeader>}
        body={
          <ArticleBody>
            <p>
              <span className="lead">
                <strong>
                  I am a full stack web developer that focuses on making
                  application with React, Express and MongoDB. Design and code I
                  have experience in them all.
                </strong>
              </span>
            </p>
            <div className="mt-5">
              <div
                className={classnames(
                  'carousel slide bg-primary w-75 m-auto',
                  styles.carousel
                )}
                data-bs-ride="carousel"
              >
                <div className="carousel-inner h-100 d-flex align-items-center">
                  <div
                    className={classnames(
                      'carousel-item active text-center h-100',
                      styles.graphicsDesign
                    )}
                  >
                    <div className={classnames('h-100', flexCenter)}>
                      <h3 className="text-uppercase bg-white p-3 shadow-sm">
                        <strong>Web Design</strong>
                      </h3>
                    </div>
                  </div>
                  <div
                    className={classnames(
                      'carousel-item h-100',
                      styles.programming
                    )}
                  >
                    <div className={classnames('h-100', flexCenter)}>
                      <h3 className="text-uppercase bg-white p-3 shadow-sm">
                        <strong>Full Stack</strong>
                      </h3>
                    </div>
                  </div>
                  <div
                    className={classnames(
                      'carousel-item bg-white h-100',
                      styles.devops
                    )}
                  >
                    <div className={classnames('h-100', flexCenter)}>
                      <h3 className="text-uppercase bg-white p-3 shadow-sm">
                        <strong>Devops</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ArticleBody>
        }
      />
    </section>
  );
}
