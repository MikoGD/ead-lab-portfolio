import React from 'react';
import { Article, ArticleHeader, ArticleBody } from '../../article';

function Improvements(): React.ReactElement {
  return (
    <section
      className="mt-5 d-flex justify-content-center align-items-center mb-5"
      id="improvements"
    >
      <Article
        header={<ArticleHeader rightHeader>My Improvements</ArticleHeader>}
        body={
          <ArticleBody>
            <h3>Template</h3>
            <p>
              The template I used is{' '}
              <span>
                <a href="https://startbootstrap.com/previews/grayscale">
                  Grayscale
                </a>
              </span>{' '}
              I choose this template as it had the minimalistic look I was going
              for in my previous attempt of making my portfolio. My hobby is
              photography so I wanted to use my photos and I had a landscape
              photo perfect for a hero background image. The template also goes
              well with the color palette of the photo. I took the navbar and
              footer design of the template but the other sections were my
              design. The template hero inspired my hero design.
            </p>
            <h3>SCSS and responsiveness</h3>
            <p>
              Majority of the time I could use the utility classes from
              bootstrap for styling. However, in the times they weren&lsquo;t
              enough, for example, adding the image as a background image, I
              used scss modules.
              <br />
              Bootstrap also handled most of the responsiveness but in certain
              situations when I wanted to be more specific with the responsive
              styling I used the mixins BootStrap provided through Sass. For
              example, the profile image in the hero needed different
              percentages depending on the screen size
            </p>
            <h3>React and TypeScript</h3>
            <p>
              I decided to use React and TypeScript for this project to practice
              those technologies. I am very familiar with those libraries and
              they did not slow me down with their extra complexity. I do
              acknowledge that they are overkill for a project like this as it
              only contains 1 page and not much functionalities, however, when I
              first started this project I assumed I would need more JavaScript
              features and using React would help me with that. Now after
              finishing the project I realize it was not needed.
              <br />
              TypeScript was used as I don&lsquo;t like to use JavaScript on its
              own as the typings and interfaces that TypeScript provide are too
              useful when debugging.
            </p>
          </ArticleBody>
        }
      />
    </section>
  );
}

export default Improvements;
