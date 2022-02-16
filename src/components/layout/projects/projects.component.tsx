import React from 'react';
import { Article, ArticleBody, ArticleHeader } from '../../article';

export default function About(): React.ReactElement {
  return (
    <section
      className="mt-5 d-flex justify-content-center align-items-center"
      id="project"
    >
      <Article
        header={<ArticleHeader rightHeader>Projects</ArticleHeader>}
        body={
          <ArticleBody>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TinyGreens - private</td>
                  <td>E-commerce</td>
                  <td>
                    E-commerce site to sell art by artist&nbsp;
                    <a href="https://www.instagram.com/tinygreens/">
                      TinyGreens
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/MikoGD/notonic">Notonic</a>
                  </td>
                  <td>Web app</td>
                  <td>Test web app to create notes</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/MikoGD/redux-in-worker">
                      Redux-in-worker
                    </a>
                  </td>
                  <td>Experiment</td>
                  <td>
                    Experimental project to move state management to another
                    thread with web workers
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/MikoGD/time-tracker">
                      Time Tracker
                    </a>
                  </td>
                  <td>Web app</td>
                  <td>Web app to keep track of your work hours</td>
                </tr>
                <tr>
                  <td>
                    <a href="https://github.com/MikoGD/react-basic-calculator">
                      React calculator
                    </a>
                  </td>
                  <td>Experiment</td>
                  <td>
                    Practice project to learn React by making a calculator
                  </td>
                </tr>
              </tbody>
            </table>
          </ArticleBody>
        }
      />
    </section>
  );
}
