import React, { useState } from 'react';

const categories = [
    {
        name: 'Kadın',
        subcategories: [
            { title: 'Giyim', items: ['Elbise', 'Tişört', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Bluz', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Topuklu Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Babet', 'Sandalet', 'Bot', 'Çizme', 'Kar Botu', 'Loafer'] },
            { title: 'Aksesuar & Çanta', items: ['Çanta', 'Saat', 'Takı', 'Cüzdan', 'Atkı', 'Bere', 'Eldiven', 'Kemer', 'Şal'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Portföy', 'Postacı Çantası', 'El Çantası', 'Kanvas Çanta',] },
            { title: 'İç Giyim', items: ['Pijama Takımı', 'Gecelik', 'Sütyen', 'İç Çamaşırı Takımları', 'Fantezi Giyim', 'Çorap', 'Korse', 'Külot', 'Büstiyer', 'Bralet', 'Atlet & Body', 'Kombinezon', 'Jartiyer'] },
            { title: 'Lüks', items: ['Lüks Çanta', 'Lüks Giyim', 'Lüks Ayakkabı'] },
            { title: 'Kozmetik', items: ['Parfüm', 'Göz Makyajı', 'Cilt Bakım', 'Saç Bakımı', 'Makyaj', 'Ağız Bakım', 'Vücut Bakım'] },
            { title: 'Spor & OutDoor', items: ['Topuklu Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Baber', 'Sandalet', 'Bot', 'Çizme', 'Kar Botu', 'Loafer'] },
        ]
    },


    {
        name: 'Erkek',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Anne&Çocuk',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Ev & Yaşam',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Süpermarket',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Kozmetik',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Ayakkabı & Çanta',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            { title: 'Kişisel bakım', items: ['Parfüm', 'Cinsel Sağlık', 'Tıraş Sonrası Ürünler', 'Tıraş Bıçağı', 'Deodorant'] },
            { title: 'Saat & Aksesuar', items: ['Saat', 'Güneş Gözlüğü', 'Cüzdan', 'Kemer', 'Çanta', 'Şapka', 'Kartlık', 'Valiz', 'Kravat', 'Boyunluk'] },
            { title: 'İç Giyim', items: ['Boxer', 'Çorap', 'Pijama', 'Atlet', 'İçlik'] },
            { title: 'Lüks & Designer', items: ['Lüks Giyim', 'Lüks Ayakkabı', 'Lüks Çanta'] },
        ]
    },
    {
        name: 'Elektronik',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },

        ]
    },
    {
        name: 'Spor & Outdoor',
        subcategories: [
            { title: 'Giyim', items: ['Tişört', 'Şort', 'Gömlek', 'Kot Pantolon', 'Kot Ceket', 'Pantolon', 'Mont', 'Eşofman', 'Ceket'] },
            { title: 'Ayakkabı', items: ['Spor Ayakkabı', 'Sneaker', 'Günlük Ayakkabı', 'Klasik', 'Sandalet', 'Bot', 'Deri Ayakkabı', 'Kar Botu', 'Loafer'] },
            { title: 'Çanta', items: ['Omuz Çantası', 'Sırt Çantası', 'Bel Çantası', 'Okul Çantası', 'Laptop Çantası', 'Spor Çanta', 'Postacı Çantası', 'Evrak Çantası', 'Cüzdan',] },
            
        ]
    },
    {
        name: 'Çok Satanlar',
        subcategories: []
    },
    {
        name: 'Flaş Ürünler',
        subcategories: []

    },




];

const NavCategories = () => {
    const [openCategory, setOpenCategory] = useState(null);

    const handleMouseEnter = (index) => {
        setOpenCategory(index);
    };

    const handleMouseLeave = () => {
        setOpenCategory(null);
    };

    return (
        <nav className="bg-white text-black text-xs relative z-10">
            <ul className="flex justify-around">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="px-4 py-2 flex items-center">
                            {category.name}
                            {(category.name === 'Çok Satanlar' || category.name === 'Flaş Ürünler') && (
                                <span className="ml-2 bg-red-500 text-white text-xs font-bold py-0.5 px-1.5 rounded-full">Yeni</span>
                            )}
                        </button>

                        {openCategory === index && category.subcategories.length > 0 && (
                            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg z-20 p-4 w-[80vw] max-w-5xl">
                                <div className="flex flex-wrap gap-4">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <div key={subIndex} className="min-w-[200px]">
                                            <h3 className="font-bold mb-2">{subcategory.title}</h3>
                                            <ul>
                                                {subcategory.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="px-4 py-2 hover:bg-gray-200">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavCategories;