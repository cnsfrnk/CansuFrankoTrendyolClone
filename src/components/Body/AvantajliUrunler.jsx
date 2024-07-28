import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import card1 from '../../assets/card1.png';


function AvantajliUrunler() {
  const sliderRef = useRef(null);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const cards = [
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
    { src: card1, alt: 'Card 1' },
  ];

  return (
    <>
      <br />
      <div className='bg-yellow-50'>
        <div className='bg-yellow-50 text-lg text-black font-bold flex justify-between items-center px-4 py-2'>
          <p>Avantajlı Ürünler</p>
          <p className='text-sm hover:cursor-pointer hover:bg-orange-200'>Tüm Ürünler {'>'}</p>
        </div>

        <div className='relative'  >
          <button onClick={scrollLeft} className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow'>
            <FaChevronLeft />
          </button>
          <div className='flex overflow-x-auto px-4 py-4' ref={sliderRef} style={{ gap: '1rem' }}>
            {cards.map((card, index) => (
              <div key={index} className='flex-shrink-0 hover:cursor-pointer' style={{ minWidth: '200px', marginRight: index !== cards.length - 1 ? '1rem' : '0' }}>
                <img src={card.src} alt={card.alt} className='w-full h-auto' />
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow'>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default AvantajliUrunler;
