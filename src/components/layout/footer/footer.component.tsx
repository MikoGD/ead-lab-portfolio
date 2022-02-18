import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import styles from './footer.module.scss';

interface DogResponse {
  message: string;
  status: string;
}

function Footer(): React.ReactElement {
  const [dogImage, setDogImage] = useState('');
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const timer = setInterval(() => {
      axios.get<DogResponse>('https://dog.ceo/api/breeds/image/random').then(
        (response) => {
          setDogImage(response.data.message);

          if (error) {
            setError(null);
          }
        },
        (reason) => {
          setError(`Failed to load dogs - ${reason}`);
        }
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="modal" tabIndex={-1} id="secretModal">
        <div className={styles.dogModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Congrats you found the DOG MODAL
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-close" />
                </button>
              </div>
              <div className={classnames('modal-body', styles.dogModalBody)}>
                {error && <h2 className="text-danger">{error}</h2>}
                {dogImage !== '' && !error ? (
                  <img
                    src={dogImage}
                    alt="random dog"
                    className={styles.dogImage}
                  />
                ) : (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-black text-white d-flex flex-column align-items-center">
        <p>&#169; Mikael Escolin 2022</p>
        <div className="social d-flex justify-content-center mb-3">
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
        <div className={classnames('text-center', styles.disclaimer)}>
          <p>
            <small>
              Disclaimer Mikael Escolin is not responsible for any injuries or
              mild annoyances caused by visiting and/or using the website. This
              includes but is not limited to spontaneous human combustion,
              becoming a react fanatic and becoming a silver surfer
            </small>
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#secretModal"
        >
          Secret
        </button>
      </footer>
    </>
  );
}

export default Footer;
