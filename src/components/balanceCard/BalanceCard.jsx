import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

function BalanceCard() {
  return (
    <div className="col-12 my-4">
      <div className="balance-card d-flex justify-content-between py-4 ps-4 pe-3 bg-white rounded-4 shadow-sm bg-primary">
        <div>
          <p className="text-gray-500 text-small">
            Bakiyem
            <AiOutlineEye className="icon ms-2" />
          </p>
          <p className="h4 fw-semibold m-0">₺******</p>
        </div>
        <div className="d-flex align-items-center">
          <button type="button" className="btn btn-lg btn-primary fw-semibold">
            Bakiye Yükle
          </button>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
