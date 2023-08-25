import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <nav className="navbar login-brand">
            <span className="navbar-brand">
              <img
                src={'/logo.svg'}
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
            <form>
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
              <div className="login-footer text-center text-small py-1 mb-3">
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
        <div className="d-xs-none d-md-block login-right"></div>
      </div>
    </div>
  );
};

export default Login;
