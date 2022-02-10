import React from 'react';
import classnames from 'classnames';
import NavBar from './components/layout/navbar';
import Hero from './components/layout/hero';
import styles from './app.module.scss';

function App(): React.ReactElement {
  return (
    <div className="App" id="topPage">
      <header
        className={classnames(
          'container-fluid p-0 w-100 vh-100 position-fixed',
          styles.header
        )}
      >
        <NavBar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
