import React from 'react';

function ProductCard() {
  return (
    <div className="col-12 col-md-4">
      <div className="d-flex py-4 px-3 bg-white rounded-4 my-4 shadow-sm">
        <img src="/product.svg" className="me-3" />
        <div>
          <p className="text-gray-500 text-small">Aktif Ürün Sayısı</p>
          <p className="fw-medium text-large">32 Aktif</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
