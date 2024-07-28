import React from 'react';

function PopulerTablo() {
  const markaVeMagazalar = [
    ['Penti', 'Mango', 'Zara'],
    ['Watsons', 'Oysho', 'Bershka'],
    ['Stradivarius', 'Pandora', 'Beymen'],
    ['La Roche Posay', 'Oxxo', 'Addax'],
    ['Puma', 'Mudo', 'Derimod'],
    ['Tommy Hilfiger', 'The Purest Solutions', 'İpekyol'],
    ['Victoria\'s Secret', 'Collezione', 'Solante'],
    ['adL', 'Yargıcı', 'Desa'],
    ['Adidas', 'Nike', 'Skechers'],
    ['Fissler', 'Nine West', 'Prada'],
    ['Dilvin', 'Pull & Bear', 'Koton'],
    ['Defacto', 'Mavi', 'Vans'],
    ['L\'Oreal Paris', 'Farmasi', 'Altınbaş'],
    ['Network', 'Flo', 'So Chic'],
    ['Cerave', 'Nivea', 'Avon'],
  ];

  const sayfalar = [
    ['Adidas Kadın Ayakkabı', 'Yoga Taytı', 'Eşarp'],
    ['Alışveriş Kredisi', 'Kadın Gömlek', 'Kadın Deri Ceket'],
    ['Kadın Bot', 'Bershka Kadın Mont', 'Barbour Kadın Mont'],
    ['Etek', 'Crop', 'Kadın Blazer Ceket'],
    ['Hamile Giyim', 'Kadın Beyaz New Bal', 'Babet'],
    ['Mavi Sweatshirt', 'Kadın Çanta', 'Abiye Elbise'],
    ['Sütyen', 'Kadın Çizme', 'Gecelik'],
    ['Kadın Body', 'Omuz Çantası', 'String'],
    ['Kadın Jean', 'Sporcu Sütyeni', 'Kadın Parfüm'],
    ['Büyük Beden Elbise', 'Kadın İç Giyim', 'Portföy & Clutch'],
    ['Kadın Saat', 'Elbise', 'Popüler Aramalar'],
    ['Kadın Tayt', 'Kadın Ayakkabı', 'Kadın Cüzdan'],
    ['Tesettür Abiye', 'Trendyol English', 'Kadın Spor Ayakkabı'],
    ['Hediye Rehberi', 'Trendyol Deutsch', 'Kadın Sneaker'],
    ['Trendyol Blog', 'Kadın Babet'],
  ];

  return (
    <div className=' text-black p-8'>
      <div className='grid grid-cols-2 gap-8'>
        <div>
          <h2 className='font-bold mb-4'>Popüler Marka ve Mağazalar</h2>
          <div className='grid grid-cols-3 gap-4 text-base'>
            {markaVeMagazalar.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p key={`${rowIndex}-${itemIndex}`} className="text-xs hover:underline hover:cursor-pointer">{item}</p>
              ))
            ))}
          </div>
        </div>
        <div>
          <h2 className='font-bold mb-4'>Popüler Sayfalar</h2>
          <div className='grid grid-cols-3 gap-4 text-base'>
            {sayfalar.map((row, rowIndex) => (
              row.map((item, itemIndex) => (
                <p key={`${rowIndex}-${itemIndex}`} className="text-xs hover:underline hover:cursor-pointer">{item}</p>
              ))
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopulerTablo;
