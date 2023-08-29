import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

function ChartBox() {
  return (
    <div className="col-12 bg-white rounded-4 mb-4 shadow-sm">
      <div className="col-12 px-4 pt-4 pb-2">
        <div className="row gap-3 gap-md-0">
          <div className="col-12 col-md-6 dropdown ">
            <button
              className="btn dropdown-toggle text-gray-500 border border-gray-300 px-3 py-2 "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Port Kullanım Bilgisi
              <FiChevronDown className="icon ms-5 me-0" />
            </button>

            <ul className="dropdown-menu border border-gray-200">
              <li>
                <span className="dropdown-item" href="#">
                  Action
                </span>
              </li>
              <li>
                <span className="dropdown-item" href="#">
                  Another action
                </span>
              </li>
              <li>
                <span className="dropdown-item" href="#">
                  Something else here
                </span>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 btn-group">
            <a
              href="#"
              className="btn btn-outline border border-gray-300 active"
              aria-current="page"
            >
              Canlı
            </a>
            <a href="#" className="btn btn-outline border border-gray-300">
              2 Saat
            </a>
            <a href="#" className="btn btn-outline border border-gray-300">
              48 Saat
            </a>
            <a href="#" className="btn btn-outline border border-gray-300">
              1 Ay
            </a>
            <a href="#" className="btn btn-outline border border-gray-300">
              1 Yıl
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 p-0 d-flex justify-content-center w-100">
        <img src="/graphic.svg" className="img-fluid pt-4 pb-3 px-3 w-100" />
      </div>
    </div>
  );
}

export default ChartBox;
