import React from 'react';

function TicketCard() {
  return (
    <div className="col-12 col-md-4">
      <div className="d-flex py-4 px-3 bg-white rounded-4 my-4 shadow-sm">
        <img src="/ticket.svg" className="me-3" />
        <div className="">
          <p className="text-gray-500 text-small">Bekleyen Ticket</p>
          <p className="fw-medium text-large">1 Adet</p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
