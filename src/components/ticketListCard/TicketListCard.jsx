import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function TicketListCard() {
  return (
    <div className="col-12 bg-white rounded-4 mb-4 shadow-sm">
      <div className="row mx-2 px-0">
        <div className="col-12 p-4 d-flex justify-content-between align-items-center mb-2">
          <p className="fw-medium">Ticket Listesi</p>
          <p className="fw-medium text-small ">
            <a href="#" className="text-gray-700">
              Tümünü Gör
              <FiArrowRight className="icon ms-2 me-0" />
            </a>
          </p>
        </div>
        <table
          id="ticketListTable"
          className="col-12 table ticket-list-table align-middle mb-0"
        >
          <colgroup>
            <col style={{ width: '40%' }} />
            <col style={{ width: '25%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '20%' }} />
          </colgroup>
          <thead className="table-light text-x-small">
            <tr>
              <th>Ticket Detayı</th>
              <th>Tarih</th>
              <th>Öncelik</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center flex-md-row">
                  <img
                    src="/ticket.svg"
                    width={48}
                    className=" me-md-3 align-center"
                  />
                  <div className="d-flex flex-column justify-content-evenly">
                    <p className=" text-gray-700 fw-medium">
                      Sunucu Problemleri Hakkında Bi...
                    </p>
                    <p className="text-gray-500">Ticket No: #3519</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-500">27.04.2023 | 21:50</p>
              </td>
              <td>
                <span className="text-red-600 fw-medium">Yüksek</span>
              </td>
              <td>
                <img src="/badge.svg" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center flex-md-row">
                  <img
                    src="/ticket.svg"
                    width={48}
                    className=" me-md-3 align-center"
                  />
                  <div className="d-flex flex-column justify-content-evenly">
                    <p className=" text-gray-700 fw-medium">
                      Aktarım Sorunları
                    </p>
                    <p className="text-gray-500">Ticket No: #2214</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-gray-500">04.04.2023 | 10:00</p>
              </td>
              <td>
                <span id="priority" className="text-green-600 fw-medium">
                  Düşük
                </span>
              </td>
              <td>
                <img src="/badge.svg" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TicketListCard;
