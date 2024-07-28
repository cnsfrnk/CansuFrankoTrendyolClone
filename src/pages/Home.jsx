import React from 'react';
import TopHeader from '../components/Header/TopHeader';
import Navbar from '../components/Header/Navbar';
import MicroBanners from '../components/Header/MicroBanners';
import ThreeHeaders from '../components/Body/ThreeHeaders';
import PopulerUrunler from '../components/Body/PopulerUrunler';
import ThreeCards from '../components/Body/ThreeCards';
import FlasUrunler from '../components/Body/FlasUrunler';
import CokSatanUrunler from '../components/Body/CokSatanUrunler';
import AvantajliUrunler from '../components/Body/AvantajliUrunler';
import CategoryCards from '../components/Body/CategoryCards';
import TumIhtiyaclarinizIcin from '../components/Body/TumIhtiyaclarinizIcin';
import PopulerFooter from '../components/Footer/PopulerFooter';
import Footer from '../components/Footer/Footer';
import NavCategories from '../components/Header/NavCategories';




function Home() {
    return (

        <>
            <div className='Header'>
                <TopHeader />
                <Navbar />
                <NavCategories />
                <MicroBanners />
            </div>

            <div className='Body'>
                <ThreeHeaders />
                <PopulerUrunler />
                <FlasUrunler />
                <ThreeCards />
                <CokSatanUrunler />
                <AvantajliUrunler />
                <CategoryCards />
                <TumIhtiyaclarinizIcin />

            </div>

            <div className='Footer'>
                <PopulerFooter />
                <Footer />


            </div>
            

        </>
    );
};

export default Home;