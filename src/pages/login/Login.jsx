import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-left">
          <div className="d-flex flex-column  gap-5">
            <nav className="navbar pb-5">
              <span className="navbar-brand py-4">
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
        </div>
        <div className="d-xs-none d-md-block login-right"></div>
      </div>
    </div>
  );
};

export default Login;
