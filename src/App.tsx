import React, { useLayoutEffect, useState } from 'react';
import classnames from 'classnames';
import NavBar from './components/layout/navbar';
import Hero from './components/layout/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Video from './components/sections/video';
import Contact from './components/sections/contact';
import Improvements from './components/sections/improvements';
import Footer from './components/layout/footer';
import './app.module.scss';

function App(): React.ReactElement {
  // To offset hero for fixed navbar
  const [navBarHeight, setNavBarHeight] = useState(0);

  useLayoutEffect(() => {
    const navBar = document.getElementById('mainNav');

    if (navBar) {
      setNavBarHeight(navBar.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div
      className={classnames('App container-fluid p-0 w-100 vh-100')}
      id="topPage"
    >
      <header className="container w-100">
        <NavBar />
        <Hero style={{ marginTop: navBarHeight }} />
      </header>
      <main className="container">
        <About />
        <Projects />
        <Video />
        <Improvements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
