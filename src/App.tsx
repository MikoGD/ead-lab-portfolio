import React, { useLayoutEffect, useState } from 'react';
import classnames from 'classnames';
import NavBar from './components/layout/navbar';
import Hero from './components/layout/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
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
      <header className="container">
        <NavBar />
        <Hero style={{ marginTop: navBarHeight }} />
      </header>
      <main className="container">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer text-white">Footer</footer>
    </div>
  );
}

export default App;
