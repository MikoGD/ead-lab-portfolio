import React from 'react';

function Footer(): React.ReactElement {
  return (
    <footer className="footer bg-black text-white d-flex flex-column align-items-center">
      <p>&#169; Mikael Escolin 2022</p>
      <div className="social d-flex justify-content-center">
        <a className="mx-2" href="#!">
          <i className="fab fa-twitter" />
        </a>
        <a className="mx-2" href="#!">
          <i className="fab fa-linkedin" />
        </a>
        <a className="mx-2" href="#!">
          <i className="fab fa-github" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
