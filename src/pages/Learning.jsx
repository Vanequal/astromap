import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Learning.css';

const Learning = () => {
  const [currentModule, setCurrentModule] = useState(1);

  const modules = [
    {
      id: 1,
      title: 'Введение в<br />астрологию',
      icon: 'module-1.svg',
      lessons: [
        '1. Что такое астрология?',
        '2. Как работает астрология: принципы и структура астрологической системы.',
        '3. Что можно (и нельзя) узнать с помощью астрологии',
        '4. Структура астрологической карты: планеты, знаки, дома, аспекты'
      ]
    },
    {
      id: 2,
      title: 'Планеты — движущая сила<br />гороскопа',
      icon: 'module-2.svg',
      lessons: [
        '1. Планеты как архетипы и энергии',
        '2. Личные планеты: Солнце, Луна, Меркурий, Венера, Марс',
        '3. Социальные планеты: Юпитер и Сатурн',
        '4. Высшие планеты: Уран, Нептун, Плутон',
        '5. Управление и сила планет в знаках'
      ]
    },
    {
      id: 3,
      title: 'Знаки Зодиака',
      icon: 'module-3.svg',
      lessons: [
        '1. 12 знаков как 12 архетипов развития личности',
        '2. Стихии (Огонь, Земля, Воздух, Вода)',
        '3. Кресты (Кардинальные, Фиксированные, Мутабельные)',
        '4. Подробно о каждом знаке — Солнце, Луна, Асцендент и т.д.'
      ]
    },
    {
      id: 4,
      title: 'Астрологические<br />дома',
      icon: 'module-4.svg',
      lessons: [
        '1. Что такое дома и как они связаны с жизненными сферами',
        '2. Куспиды домов и система домов',
        '3. Значения 12 домов (1-й — личность, 2-й — финансы, и т.д.)',
        '4. Планеты в домах: как проявляется энергия планет в конкретных сферах'
      ]
    },
    {
      id: 5,
      title: 'Аспекты между<br />планетами',
      icon: 'module-5.svg',
      lessons: [
        '1. Что такое аспект и почему он важен',
        '2. Основные типы аспектов: соединение, секстиль, квадрат, тригон, оппозиция',
        '3. Гармоничные и напряжённые аспекты',
        '4. Минорные аспекты и аспектные конфигурации',
        '5. Примеры реальных аспектов и как их читать'
      ]
    },
    {
      id: 6,
      title: 'Построение и чтение<br />карты',
      icon: 'module-6.svg',
      lessons: [],
      locked: true
    }
  ];

  const currentModuleData = modules.find(m => m.id === currentModule);

  return (
    <div className="learning-page">
      <Header isMain={false} />

      {/* СЕКЦИЯ 1: Hero */}
      <section className="learning-hero">
        <div className="learning-hero__background">
          <img src="/images/first-section.jpg" alt="Background" />
        </div>

        <div className="learning-hero__content">
          <h1 className="learning-hero__title">Обучение</h1>
        </div>
      </section>

      {/* СЕКЦИЯ 2: Видео урок */}
      <section className="learning-video">
        <div className="container">
          <h2 className="learning-video__title">
            Модуль {currentModule}. {currentModuleData?.title.replace(/<br\s*\/?>/gi, ' ')}
          </h2>

          <div className="video-controls">
            <div className="video-controls__nav">
              <button className="video-controls__arrow video-controls__arrow--left">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M24 28L14 20L24 12" stroke="rgba(222, 200, 161, 1)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
              <button className="video-controls__arrow video-controls__arrow--right">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M16 12L26 20L16 28" stroke="rgba(222, 200, 161, 1)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <h3 className="video-controls__lesson">1. Что такое астрология?</h3>

            <button className="video-controls__modules">
              <span>К модулям</span>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M10 7L16 12.5L10 18" stroke="rgba(222, 200, 161, 1)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="video-player">
            <img src="/images/video.svg" alt="Video player" />
          </div>

          <div className="video-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam massa eu odio euismod, in cursus lacus volutpat. Suspendisse tellus erat, pulvinar vitae bibendum sit amet, ullamcorper vitae nunc. Aliquam ut sollicitudin massa, quis varius tellus. Duis condimentum convallis nunc quis eleifend.
            </p>
          </div>

          <hr className="learning-divider" />
        </div>
      </section>

      {/* СЕКЦИЯ 3: Модули */}
      <section className="learning-modules">
        <div className="container">
          <div className="modules-grid">
            {modules.map((module) => (
              <div
                key={module.id}
                className={`module-card ${module.locked ? 'module-card--locked' : ''}`}
                onClick={() => !module.locked && setCurrentModule(module.id)}
              >
                {module.locked && (
                  <div className="module-card__lock">
                    <img src="/images/lock.svg" alt="Locked" className="module-card__lock-icon" />
                    <p className="module-card__lock-text">
                      Оформите подписку,<br />чтобы разблокировать
                    </p>
                  </div>
                )}

                <div className="module-card__icon">
                  <img src={`/images/${module.icon}`} alt={`Module ${module.id}`} />
                </div>
                <h4
                  className="module-card__title"
                  dangerouslySetInnerHTML={{ __html: `Модуль ${module.id}.<br />${module.title}` }}
                />

                {!module.locked && module.lessons.length > 0 && (
                  <div className="module-card__lessons">
                    {module.lessons.map((lesson, index) => (
                      <p key={index} className="module-card__lesson">
                        <span className="module-card__lesson-number">{lesson.split('.')[0]}.</span>
                        {lesson.split('.').slice(1).join('.')}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Learning;
