import React from 'react';
import classnames from 'classnames';
import { Article, ArticleBody, ArticleHeader } from '../../article';
import styles from './contact.module.scss';

export default function Contact(): React.ReactElement {
  return (
    <section
      className="mt-5 d-flex justify-content-center align-items-center mb-5"
      id="contact"
    >
      <Article
        header={<ArticleHeader>Contact Me</ArticleHeader>}
        body={
          <ArticleBody>
            {/* eslint-disable */}
            <form onSubmit={() => console.log('submitted')}>
              {/* eslint-enable */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label d-flex flex-column"
                >
                  <h3>Email address</h3>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="contact-body"
                  className="form-label d-flex flex-column"
                >
                  <h3>Body</h3>
                  <textarea
                    name="contact-body"
                    id="contact-body"
                    className={classnames('form-control', styles.emailBody)}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </ArticleBody>
        }
      />
    </section>
  );
}
