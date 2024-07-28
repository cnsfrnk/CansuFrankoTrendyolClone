import React from 'react';
import cardLogos from '../../../src/assets/Cardlogos/cardlogos.png';
import stores from '../../../src/assets/Cardlogos/stores.png';
import sosyalMedya from '../../../src/assets/Cardlogos/sosyalmedya.png';
import qr from '../../../src/assets/Cardlogos/qr.png';

function Footer() {
  const Trendyol = [
    ['Biz Kimiz', 'Kariyer', 'İletişim', 'Trendyolda Satış Yap', 'Güvenli Alışveriş'],
  ];

  const AboutUs = [
    ['Who We Are', 'Careers', 'Contact Us', 'Sustainability', 'Mobil Uygulamalar']
  ];

  const Kampanyalar = [
    ['Aktif Kampanyalar', 'Elite Üyelik', 'Hediye Fikirleri', 'Trendyol Fırsatları', 'Sosyal Medya'],
  ];

  const Yardim = [
    ['Sıkça Sorulan Sorular', 'Canlı Yardım', 'Nasıl İade Edebilirim', 'İşlem Rehberi', 'Ülke Değiştir'],
  ];

  return (
    <div className='w-screen bg-black absolute left-0 right-0'>
      <div className='max-w-screen-xl mx-auto text-white grid grid-cols-4 p-8'>
        <div>
          <h2 className='font-bold mb-4'>Trendyol</h2>
          <div className='text-base'>
            {Trendyol.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p key={`${rowIndex}-${itemIndex}`} className="mb-4 text-xs hover:underline hover:cursor-pointer">{item}</p>
              ))
            ))}
          </div>
          <div className='mt-4 object-scale-down'>
            <img src={cardLogos} alt='Card Logos' />
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-4'>About Us</h2>
          <div className='text-base'>
            {AboutUs.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p
                  key={`${rowIndex}-${itemIndex}`}
                  className={`mb-4 hover:underline hover:cursor-pointer ${item === 'Mobil Uygulamalar' ? 'text-lg' : 'text-xs'}`}
                >
                  {item}
                </p>
              ))
            ))}
            <div className='mt-4 object-scale-down hover:cursor-pointer'>
              <img src={stores} alt='Stores' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-4'>Kampanyalar</h2>
          <div className='text-base'>
            {Kampanyalar.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p
                  key={`${rowIndex}-${itemIndex}`}
                  className={`mb-4 hover:underline hover:cursor-pointer ${item === 'Sosyal Medya' ? 'text-lg' : 'text-xs'}`}
                >
                  {item}
                </p>
              ))
            ))}
          </div>
          <div className='mt-4 object-scale-down hover:cursor-pointer' >
            <img src={sosyalMedya} alt='Sosyal Medya' />
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-4'>Yardım</h2>
          <div className='text-base'>
            {Yardim.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p
                  key={`${rowIndex}-${itemIndex}`}
                  className={`mb-4 text-xs hover:underline hover:cursor-pointer ${item === 'Ülke Değiştir' ? 'border rounded-md px-2 py-1 inline-block' : ''}`}
                >
                  {item}
                </p>
              ))
            ))}
          </div>
          <div className='mt-4 object-scale-down'>
            <img src={qr} alt='qr' />
          </div>
        </div>
      </div>
     


    </div>


  );
}

export default Footer;
