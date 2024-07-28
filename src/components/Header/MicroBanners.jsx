import React, { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa'; // FontAwesome ikonlarını kullanıyoruz
import { FaChevronRight } from 'react-icons/fa';

function MicroBanners() {
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

  const logos = [
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png', name: 'Sana Özel' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png', name: 'Sen De Al!' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/mnresize/200/200/marketing/datascience/automation/2023/10/27/Gazze_Web_Circlebanner_202310271210.png', name: 'Dijital Destek Kartları' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2024/2/21/Deskte_V12_202402210905.png', name: 'Dijital Destek Kartları' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/20/Widget_202307201111.png', name: 'Kurumsal' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/7/26/Widget_202307261451.png', name: 'Kredi Kartı' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/8/22/Kredilercircle_202308221603.png', name: 'Krediler' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg', name: 'Apple' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg', name: 'Philips' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg', name: 'Pull&Bear' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Samsung_202301271715.jpg', name: 'Samsung' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg', name: 'Xiaomi' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg', name: 'Karaca' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Bosch_202301262207.png', name: 'Bosch' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Vestel_202301280121.jpg', name: 'Vestel' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Kumtel_202301270326.png', name: 'Kumtel' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/4/26/Stradivarius_202304260936.png', name: 'Stradivarius' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg', name: 'Defacto' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png', name: 'Adidas' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/ArcElik_202301262144.png', name: 'Arçelik' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Baymak_202301262207.png', name: 'Baymak' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/7/Penti_202303072238.jpg', name: 'Penti' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Mango_202301270525.png', name: 'Mango' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Roborock_202301271629.jpg', name: 'Roborock' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Arzum_202301262152.png', name: 'Arzum' },
    { src: 'https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Sony_202301271715.jpg', name: 'Sony' },


  ];

  return (
    <div className="relative flex items-center">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent text-gray-500 rounded-full hover:text-gray-700"
      >
        <FaChevronLeft />
      </button>
      <div ref={sliderRef} className="flex overflow-x-auto space-x-4 p-4 bg-white rounded-lg  mx-8 scrollbar-hide">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-col items-center justify-center w-32 h-32 p-4 ">
            <div className="flex items-center justify-center w-24 h-24 hover:cursor-pointer">
              <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
            </div>
            <p className="text-xs text-black-500 font-bold mt-2 text-center">{logo.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent text-gray-500 rounded-full hover:text-gray-700"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default MicroBanners;