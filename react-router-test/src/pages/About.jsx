import React from 'react';
import '../styles/components-styles/_about-page.scss';
import aboutBg from '../assets/lavazza-red/product2.png'; // Любое атмосферное фото зёрен
import roastingImg from '../assets/lav-grey/lavazza1.png';

function AboutPage() {
   return (
      <div className="about-page">
         {/* 1. Блок-презентация (Hero Section) */}
         <section className="about-hero">
            <div className="about-hero__inner _container">
               <h1 className="about-hero__title">WE BREATHE COFFEE</h1>
               <p className="about-hero__subtitle">
                  COFFEEMEET — это пет-проект премиального интернет-магазина, рожденный из любви к хорошему кофе
                  и современным веб-технологиям. Мы создали удобный интерфейс для истинных ценителей темной обжарки.
               </p>
            </div>
         </section>

         {/* 2. Блок с сеткой преимуществ (Миссия/Концепт) */}
         <section className="about-features _container">
            <div className="about-grid">

               <div className="about-card">
                  <div className="about-card__num">01</div>
                  <h3 className="about-card__title">Our Beans</h3>
                  <p className="about-card__text">
                     Мы выбираем только 100% арабику и сбалансированные бленды робусты прямиком из Бразилии,
                     Италии и Эфиопии. Каждый лот проходит строгий контроль качества.
                  </p>
               </div>

               <div className="about-card">
                  <div className="about-card__num">02</div>
                  <h3 className="about-card__title">The Roast</h3>
                  <p className="about-card__text">
                     От светлой цитрусовой кислинки до глубоких шоколадных нот темной обжарки. Мы знаем,
                     как раскрыть истинный потенциал каждого кофейного зерна в ростере.
                  </p>
               </div>

               <div className="about-card">
                  <div className="about-card__num">03</div>
                  <h3 className="about-card__title">Clean UI / UX</h3>
                  <p className="about-card__text">
                     Никакого визуального шума. Интуитивная корзина с сохранением данных, гибкий выбор объемов
                     упаковки и лаконичный дизайн, который помогает сосредоточиться на главном.
                  </p>
               </div>

            </div>
         </section>

         {/* 3. Финальный футер-блок страницы */}
         <section className="about-footer-block _container">
            <div className="about-footer-block__content">
               <h2 className="about-footer-block__title">MADE WITH PASSION</h2>
               <p className="about-footer-block__text">
                  Этот интерфейс разработан с использованием React, React Router, Context API и SASS.
                  Каждая строчка кода написана для того, чтобы воссоздать опыт реального e-commerce приложения.
               </p>
            </div>
         </section>
      </div>
   );
}

export default AboutPage;
