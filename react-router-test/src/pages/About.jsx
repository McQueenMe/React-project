import React from 'react';
import '../styles/components-styles/_about-page.scss';
import aboutBg from '../assets/lavazza-red/product2.png'; // Любое атмосферное фото зёрен
import roastingImg from '../assets/lav-grey/lavazza1.png';

function AboutPage() {
   return (
      <div className="about-page">
         <section className="about-hero">
            <div className="about-hero__inner _container">
               <h1 className="about-hero__title">WE BREATHE COFFEE</h1>
               <p className="about-hero__subtitle">
                  COFFEEMEET — це пет-проект преміального інтернет-магазину, народжений з любові до гарної кави.
                  та сучасних веб-технологій. Ми створили зручний інтерфейс для справжніх поціновувачів темної обсмажування.
               </p>
            </div>
         </section>

         <section className="about-features _container">
            <div className="about-grid">

               <div className="about-card">
                  <div className="about-card__num">01</div>
                  <h3 className="about-card__title">Our Beans</h3>
                  <p className="about-card__text">
                     Ми вибираємо тільки 100% арабіку і збалансовані блонди робусти прямо з Бразилії,
                     Італії та Ефіопії. Кожен лот проходить суворий контроль якості.
                  </p>
               </div>

               <div className="about-card">
                  <div className="about-card__num">02</div>
                  <h3 className="about-card__title">The Roast</h3>
                  <p className="about-card__text">
                     Від світлої цитрусової кислинки до глибоких шоколадних нот темної обсмажування. Ми знаємо,
                     як розкрити справжній потенціал кожного кавового зерна у ростері.
                  </p>
               </div>

               <div className="about-card">
                  <div className="about-card__num">03</div>
                  <h3 className="about-card__title">Clean UI / UX</h3>
                  <p className="about-card__text">
                     Жодного візуального шуму. Інтуїтивний кошик із збереженням даних, гнучкий вибір обсягів
                     упаковки та лаконічний дизайн, який допомагає зосередитися на головному.
                  </p>
               </div>

            </div>
         </section>

         <section className="about-footer-block _container">
            <div className="about-footer-block__content">
               <h2 className="about-footer-block__title">MADE WITH PASSION</h2>
               <p className="about-footer-block__text">
                  Цей інтерфейс розроблено з використанням React, React Router, Context API та SASS.
                  Кожен рядок коду написаний для того, щоб відтворити досвід реального e-commerce програми.
               </p>
            </div>
         </section>
      </div>
   );
}

export default AboutPage;
