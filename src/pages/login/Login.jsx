import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container me-lg-0">
      <div className="row justify-content-lg-between">
        <div className="col-xs-12 col-lg-5 d-flex flex-column justify-content-evenly min-vh-100">
          <nav className="navbar p-0">
            <span className="navbar-brand">
              <img
                src={'./public/logo.svg'}
                alt="PENDC"
                className="navbar-brand"
                width={176}
              />
            </span>
          </nav>
          <div className="d-flex flex-column ">
            <div>
              <h1 className="text-3xl text-gray-800 fw-semibold mb-3">
                Pendc’ye Hoşgeldiniz
              </h1>
              <p className="text-gray-500">
                Kullanıcı bilgileriniz ile giriş yapabilirsiniz.
              </p>
            </div>
            <div className=" mt-2 w-75">
              <form className="mt-4">
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="emailAdress">
                    E-Posta Adresi
                  </label>
                  <input
                    type="email"
                    id="emailAdress"
                    className="form-control"
                    placeholder="isminiz@mail.com"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Şifreniz
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Şifrenizi Giriniz"
                  />
                </div>
                <Link to="/dashboard">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg fw-semibold my-3 w-100"
                  >
                    Giriş Yap
                  </button>
                </Link>
                <div className="text-center text-small py-3 mb-3">
                  <p className="text-gray-500">
                    Bilgilerinizi hatırlamıyor musunuz?
                    <a href="#!" className="text-primary fw-semibold">
                      {' '}
                      Şifremi Unuttum
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-lg-7">
          <img src={'.public/company.svg'} className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Login;
