import React from 'react';
import { flexCenter } from '../../../utilities';
import { Article, ArticleHeader, ArticleBody } from '../../article';
import styles from './video.module.scss';

function Video(): React.ReactElement {
  return (
    <section
      className="mt-5 d-flex justify-content-center align-items-center mb-5"
      id="video"
    >
      <Article
        classNames="w-100"
        header={
          <ArticleHeader>Why I use React and not AngularJS</ArticleHeader>
        }
        body={
          <ArticleBody classNames={flexCenter}>
            <div className={styles.videoContainer}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/Cy3viKuo6vE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </ArticleBody>
        }
      />
    </section>
  );
}

export default Video;
