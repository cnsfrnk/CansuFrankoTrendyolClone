import React from 'react';

function ThreeHeaders() {
  return (
    <div className="flex space-x-4 justify-center items-center">
      <div className="bg-green-100 h-14 w-96 font-bold text-center flex items-center justify-center text-TrndYesil text-lg hover:cursor-pointer">
        Sepete En Çok Eklenenler
      </div>
      <div className="bg-yellow-50 h-14 w-96 font-bold text-center flex items-center justify-center text-TrndKirmizi text-lg hover:cursor-pointer">
        En Çok Öne Çıkanlar
      </div>
      <div className="bg-pink-200 h-14 w-96 font-bold text-center flex items-center justify-center text-TrndPembe text-lg hover:cursor-pointer">
        Flaş Ürünler
      </div>
    </div>
  );
}

export default ThreeHeaders;
