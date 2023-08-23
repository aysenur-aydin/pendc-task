import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineLightningBolt } from 'react-icons/hi';

function ElectricCard() {
  return (
    <div className="col-12  mb-3 p-0 bg-white rounded-4 shadow-sm ">
      <div className="mx-2">
        <div className="table-header d-flex justify-content-between align-items-center py-3 px-2 mb-2">
          <p className="text-gray-700 fw-medium">
            <HiOutlineLightningBolt className="icon text-primary align-text-bottom" />
            Elektrik Tüketimi
          </p>
          <div className="dropdown d-flex justify-content-between shadow-sm">
            <button
              className="btn dropdown-toggle text-gray-500 border border-gray-300"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              2023 -4
              <FiChevronDown className="icon ms-5 me-0" />
            </button>
            <ul className="dropdown-menu border border-gray-200">
              <li>
                <a className="dropdown-item" href="#">
                  2023 -3
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2023 -2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  2023 -1
                </a>
              </li>
            </ul>
          </div>
        </div>
        <table
          id="elecConsumptionTable"
          className="table elec-consumption-table  "
        >
          <caption className="text-gray-700 text-small fw-semibold ps-2 pb-0">
            Genel Toplam:{' '}
            <span id="totalAmount" className="fw-semibold">
              5.835,53
            </span>
            KW/h
          </caption>
          <caption className="text-gray-600 text-x-small ps-2 pt-1 pb-3">
            Veriler 15 dk. gecikmelidir.
          </caption>
          <thead className="table-light text-x-small ">
            <tr>
              <th>Kabin</th>
              <th>Hat</th>
              <th>Port</th>
              <th>Tüketim(kW/h)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B2-K01</td>
              <td>M-UPS</td>
              <td>Toplam</td>
              <td>839.94</td>
            </tr>
            <tr>
              <td>B2-K02</td>
              <td>K-UPS</td>
              <td>Toplam</td>
              <td>330.00</td>
            </tr>
            <tr>
              <td>B2-K05</td>
              <td>M-UPS</td>
              <td>Toplam</td>
              <td>554.62</td>
            </tr>
            <tr>
              <td>B2-K06</td>
              <td>M-UPS</td>
              <td>Toplam</td>
              <td>81.91</td>
            </tr>
            <tr>
              <td>Salon 1 - N3</td>
              <td>M-UPS</td>
              <td>Toplam</td>
              <td>66.67</td>
            </tr>
            <tr>
              <td>Salon 1 - S01</td>
              <td>K-PDU</td>
              <td>Toplam</td>
              <td>1.456.50</td>
            </tr>
            <tr>
              <td>Salon 1 - S02</td>
              <td>M-PDU</td>
              <td>Toplam</td>
              <td>2.39</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ElectricCard;
