import React from 'react';

function OrderCard() {
  return (
    <div className="col-12 col-md-4">
      <div className="d-flex py-4 px-3 bg-white rounded-4 my-4 shadow-sm position-relative">
        <img src="/order.svg" className="me-3" />
        <div>
          <p className="text-gray-500 text-small">Aktif Sipariş Sayısı</p>
          <p className="fw-medium text-large">3 Adet</p>
        </div>
        <a
          href="#"
          className="text-primary text-x-small p-1 bg-orange-100 position-absolute bottom-0 end-0 rounded-2 m-2 fw-medium"
        >
          Şimdi öde
        </a>
      </div>
    </div>
  );
}

export default OrderCard;
