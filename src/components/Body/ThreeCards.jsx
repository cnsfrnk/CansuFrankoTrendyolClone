import React from 'react';

function ThreeCards() {
  return (

    <>
    <br/>

    <div className='grid grid-cols-3 gap-4 '>
      <img className='rounded-md hover:cursor-pointer hover:scale-105' src='https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723200342_KozmetikteFlasUrunler3013075mobile.jpg' alt='Kozmetikte Flas Urunler' />
      <img className='rounded-md hover:cursor-pointer hover:scale-105'src='https://cdn.dsmcdn.com/ty1437/pimWidgetApi/mobile_20240723220413_YvesSaintLaurentBeauty3013112mobile.jpg' alt='Yves Saint Laurent Beauty' />
      <img className='rounded-md hover:cursor-pointer hover:scale-105'src='https://cdn.dsmcdn.com/ty1439/pimWidgetApi/mobile_20240723220322_VictoriasSecret3013124mobile.jpg' alt='Victorias Secret' />
    </div>

    </>
  );
}

export default ThreeCards;
