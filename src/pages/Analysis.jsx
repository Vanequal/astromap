import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Analysis.css';

const Analysis = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  // Данные слайдера
  const slides = [
    {
      image: 'slider-1.svg',
      title: 'Лучшее время<br />для важного',
      text: 'Подбор благоприятных дат<br />для важных событий',
      bgColor: 'rgba(23, 40, 72, 1)'
    },
    {
      image: 'slider-2.svg',
      title: 'Полный разбор<br />всех сфер жизни',
      text: 'Всесторонний анализ вашей<br />натальной карты',
      bgColor: 'rgba(69, 81, 96, 1)'
    },
    {
      image: 'slider-3.svg',
      title: 'Как улучшить<br />финансы?',
      text: 'Разбор для достижения<br />успеха и богатства',
      bgColor: 'rgba(23, 40, 72, 1)'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Данные категорий
  const categories = [
    {
      id: 'relations',
      title: 'Отношения',
      items: [
        { icon: 'love-1.svg', title: 'Как укрепить отношения?' },
        { icon: 'love-2.svg', title: 'Когда я выйду замуж?' },
        { icon: 'love-3.svg', title: 'Проверка совместимости' }
      ]
    },
    {
      id: 'finance',
      title: 'Финансы и успех',
      items: [
        { icon: 'money-1.svg', title: 'Как улучшить финансы?' },
        { icon: 'money-2.svg', title: 'Когда ждать<br />карьерного роста?' },
        { icon: 'money-3.svg', title: 'Открывать ли бизнес?' }
      ]
    },
    {
      id: 'self',
      title: 'Самоопределение',
      items: [
        { icon: 'talant-1.svg', title: 'В чём мое предназначение?' },
        { icon: 'talant-2.svg', title: 'Какие мои сильные стороны<br />и таланты' },
        { icon: 'talant-3.svg', title: 'Мои кармические задачи' }
      ]
    },
    {
      id: 'full',
      title: 'Полные расклады',
      items: [
        { icon: 'full-1.svg', title: 'Астрология любви: ваш личный<br />романтический код' },
        { icon: 'full-2.svg', title: 'Финансовая карта: путь<br />к благополучию' },
        { icon: 'full-3.svg', title: 'Расширенный разбор<br />натальной карты' }
      ]
    }
  ];

  return (
    <div className="analysis-page">
      <Header isMain={false}/>
      
      {/* СЕКЦИЯ 1: Hero */}
      <section className="analysis-hero">
        <div className="analysis-hero__background">
          <img src="/images/first-section.jpg" alt="Background" />
        </div>

        <div className="analysis-hero__content">
          <h1 className="analysis-hero__title">
            Разборы<br />от Астролога
          </h1>
          <p className="analysis-hero__text">
            Закажите разбор у опытного астролога<br />
            и получите ответы на важные вопросы<br />
            вашей жизни
          </p>
        </div>
      </section>

      {/* СЕКЦИЯ 2: Рекомендуемое со слайдером */}
      <section className="analysis-recommended">
        <div className="container">
          <div className="recommended-card">
            <h2 className="recommended-card__title">Рекомендуем</h2>

            <div className="slider">
              <button className="slider__arrow slider__arrow--left" onClick={prevSlide}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M25 30L15 20L25 10" stroke="rgba(23, 40, 72, 1)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </button>

              <div className="slider__content" style={{ background: slides[currentSlide].bgColor }}>
                <div className="slider__left">
                  <img src={`/images/${slides[currentSlide].image}`} alt="Slide" />
                </div>
                <div className="slider__right">
                  <h3 
                    className="slider__title" 
                    dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
                  />
                  <p 
                    className="slider__text"
                    dangerouslySetInnerHTML={{ __html: slides[currentSlide].text }}
                  />
                </div>
              </div>

              <button className="slider__arrow slider__arrow--right" onClick={nextSlide}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M15 10L25 20L15 30" stroke="rgba(23, 40, 72, 1)" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 3: Категории разборов */}
      <section className="analysis-categories">
        <div className="container">
          {/* Фильтры */}
          <div className="category-filters">
            <button 
              className={`category-filter ${activeFilter === 'all' ? 'category-filter--active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Все
            </button>
            <button 
              className={`category-filter ${activeFilter === 'self' ? 'category-filter--active' : ''}`}
              onClick={() => setActiveFilter('self')}
            >
              Самоопределение
            </button>
            <button 
              className={`category-filter ${activeFilter === 'finance' ? 'category-filter--active' : ''}`}
              onClick={() => setActiveFilter('finance')}
            >
              Финансы<br />и успех
            </button>
            <button 
              className={`category-filter ${activeFilter === 'relations' ? 'category-filter--active' : ''}`}
              onClick={() => setActiveFilter('relations')}
            >
              Отношения
            </button>
            <button 
              className={`category-filter ${activeFilter === 'full' ? 'category-filter--active' : ''}`}
              onClick={() => setActiveFilter('full')}
            >
              Полные расклады
            </button>
          </div>

          {/* Сетка категорий */}
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-block">
                <div className="category-block__header">
                  <h3 className="category-block__title">{category.title}</h3>
                  <button className="category-block__show-all">Показать всё</button>
                </div>

                <div className="category-items">
                  {category.items.map((item, index) => (
                    <div key={index} className="category-item">
                      <div className="category-item__left">
                        <img src={`/images/${item.icon}`} alt={item.title} />
                      </div>
                      <div className="category-item__right">
                        <h4 
                          className="category-item__title"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <svg className="category-item__arrow" width="30" height="20" viewBox="0 0 30 20" fill="none">
                          <path d="M2 10H28M28 10L20 2M28 10L20 18" stroke="rgba(117, 131, 149, 1)" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analysis;