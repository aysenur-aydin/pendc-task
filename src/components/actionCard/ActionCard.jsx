import React from 'react';

function ActionCard() {
  return (
    <div className="col-12 my-4 p-0 ">
      <div className="d-flex justify-content-between gap-4 py-4 px-4 bg-white rounded-4 shadow-sm">
        <div className="d-flex flex-column align-items-center">
          <img src="/add-ticket.svg" />
          <a href="#">
            <p className="text-gray-700 text-small fw-medium mt-3">
              Ticket Oluştur
            </p>
          </a>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="/add-visit.svg" />
          <a href="#">
            <p className="text-gray-700 text-small fw-medium mt-3">
              Ziyaretler
            </p>
          </a>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="/add-cargo.svg" />
          <a href="#">
            <p className="text-gray-700 text-small fw-medium mt-3">Kargolar</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
