
import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';
import Background4 from '../assets/Background4.jpg'; 
import hairImage from '../assets/hair.jpg';
import makeup1Image from '../assets/makeup1.jpg';
import nailsImage from '../assets/nails.jpg';

  function HomePage() {
  
  return (        
    <div className="home-page">
      
      <main>
        <section className="hero" style={{ backgroundImage: `url(${Background4})` }}>
          <h2> Noi suntem M&D Beauty Lab!</h2>
          <p> În cadrul salonului nostru vă vom transforma frumusețea cu ajutoul celor mai noi tendințe și servicii de top.</p>
        </section>

        <section className="description">
          <p> Echipa noastră de profesioniști este aici pentru a-ți oferi cele mai bune servicii de frumusețe, în materie de păr, unghii și machiaj.</p>
          <div className="services-buttons">
          <Link to="/HairPage" className="service-btn">Păr</Link>
          <Link to="/MakeupPage" className="service-btn">Machiaj</Link>
          <Link to="/NailsPage" className="service-btn">Unghii</Link>
          </div>
          </section>
          <section className="services">
          <div className="service-image">
            <img src={hairImage} alt="Hair Services" />
          </div>
          <div className="service-image">
            <img src={makeup1Image} alt="Makeup Services" />
          </div>
          <div className="service-image">
            <img src={nailsImage} alt="Nail Services" />
          </div>
          </section>
          <blockquote className="beauty-quote">
            „Frumusețea începe în momentul în care decizi să fii tu însăți.” - Coco Chanel
          </blockquote>
      </main>
    </div>
  );
};

export default HomePage;
