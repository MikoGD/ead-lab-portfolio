import React from 'react';
import { Article, ArticleBody, ArticleHeader } from '../../article';

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
            <p className="m-0">
              <span className="lead">
                <strong>
                  I am a software engineer that&lsquo;s looking to kick some PHP
                  ass and make sure that Angular will always be below React.
                </strong>
              </span>
              &nbsp;If you need a website I&lsquo;m your guy. Responsive design?
              Interactivity? Aria compliant? I can do it all. If you want your
              business to sore through the sky and increase user retention then
              you have found your guy. As a full stack developer there&lsquo;s I
              am capable of contributing to your entire application from start
              to finish and even <em>maintenance</em>
            </p>
          </ArticleBody>
        }
      />
    </section>
  );
}
