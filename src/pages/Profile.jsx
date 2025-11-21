import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './Profile.css';

const Profile = () => {
  // Временные данные пользователя
  const userData = {
    name: 'Ваше Имя',
    zodiacSign: 'Овен',
    birthDate: 'Дата рождения',
    birthPlace: 'Место рождения',
    birthDateFull: '05.12.2024',
    birthTime: '09:15',
    birthCity: 'Город рождения'
  };

  // Данные планет
  const planets = [
    { icon: 'sun.svg', name: 'Солнце', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'moon.svg', name: 'Луна', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'merkuriy.svg', name: 'Меркурий', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'venera.svg', name: 'Венера', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'mars.svg', name: 'Марс', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'jupiter.svg', name: 'Юпитер', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'saturn.svg', name: 'Сатурн', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'uran.svg', name: 'Уран', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'neptun.svg', name: 'Нептун', position: 'Стрелец 31\' 05"', house: '1' },
    { icon: 'pluton.svg', name: 'Плутон', position: 'Стрелец 31\' 05"', house: '1' }
  ];

  return (
    <div className="profile">
      <Header isMain={false} />

      {/* СЕКЦИЯ 1: Информация о пользователе */}
      <section className="profile-header">
        <div className="profile-header__background">
          <img src="/images/first-section.jpg" alt="Background" />
        </div>

        <div className="profile-header__content">
          <h1 className="profile-header__title">{userData.name}</h1>

          <div className="profile-info-card">
            {/* Левая часть */}
            <div className="profile-info-card__left">
              <div className="profile-info-card__left-top">
                <span className="profile-info-item__label">Знак Зодиака</span>
              </div>

              <div className="profile-info-card__left-bottom">
                <span className="profile-info-item__value">{userData.birthDate}</span>
                <span className="profile-info-item__value">{userData.birthPlace}</span>
              </div>
            </div>

            {/* Центр - Аватар */}
            <div className="profile-info-card__center">
              <img
                src="/images/avatar-profile.png"
                alt="Profile Avatar"
                className="profile-avatar"
              />
            </div>

            {/* Правая часть */}
            <div className="profile-info-card__right">
              <div className="profile-info-card__right-top">
                <button className="profile-edit-btn" aria-label="Edit profile">
                  <img src="/images/pen.svg" alt="Edit" />
                </button>
              </div>

              <div className="profile-info-card__right-bottom">
                <span className="profile-info-item__value profile-info-item__value--white">
                  {userData.birthDateFull}
                </span>
                <span className="profile-info-item__value profile-info-item__value--white">
                  {userData.birthCity}
                </span>
              </div>
            </div>
          </div>

          <div className="profile-header__star">
            <img src="/images/star.png" alt="Star decoration" />
          </div>
        </div>

        <div className="profile-header__divider"></div>
      </section>

      {/* СЕКЦИЯ 2: Натальная карта */}
      <section className="profile-chart">
        <div className="container">
          <h2 className="profile-chart__title">Ваша натальная карта</h2>

          <div className="profile-chart__grid">
            {/* Левый блок - Натальная карта */}
            <div className="profile-chart__card">
              <h3 className="profile-chart__card-title">
                {userData.birthDateFull} - {userData.birthTime}
              </h3>

              <div className="natal-chart-wrapper">
                {/* Изображение натальной карты */}
                <img
                  src="/images/natal-card.png"
                  alt="Натальная карта"
                  className="natal-chart-image"
                />

                {/* Элементы стихий ПОД картой */}
                <div className="elements-grid">
                  <div className="element-item">
                    <div className="element-circle element-circle--fire"></div>
                    <span className="element-text">огонь 0%</span>
                  </div>
                  <div className="element-item">
                    <div className="element-circle element-circle--water"></div>
                    <span className="element-text">вода 0%</span>
                  </div>
                  <div className="element-item">
                    <div className="element-circle element-circle--earth"></div>
                    <span className="element-text">земля 0%</span>
                  </div>
                  <div className="element-item">
                    <div className="element-circle element-circle--air"></div>
                    <span className="element-text">воздух 0%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правый блок - Положение планет */}
            <div className="profile-chart__card">
              <h3 className="profile-chart__card-title" style={{ textAlign: 'left' }}>
                Положение планет:
              </h3>

              <div className="planets-table">
                {/* Колонка "Планета" */}
                <div className="planets-column">
                  <div className="planets-column__header">Планета</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-row">
                      <img src={`/images/${planet.icon}`} alt={planet.name} />
                      <span className="planet-row__name">{planet.name}</span>
                    </div>
                  ))}
                </div>

                {/* Колонка "Положение" */}
                <div className="planets-column">
                  <div className="planets-column__header">Положение</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-position">{planet.position}</div>
                  ))}
                </div>

                {/* Колонка "Дом" */}
                <div className="planets-column">
                  <div className="planets-column__header">Дом</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-house">{planet.house}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Нижний блок - Кнопки */}
            <div className="profile-chart__full-card">
              <div className="chart-buttons-row">
                <button className="btn btn-primary">
                  <span>
                    Создать новую<br />натальную карту
                  </span>
                </button>
                <button className="btn btn-primary">
                  <span>Все натальные карты</span>
                </button>
              </div>

              <a href="#" className="details-link">
                <span className="details-link__text">Подробнее</span>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="rgba(222, 200, 161, 1)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 3: Расшифровка натальной карты */}
      <section className="profile-interpretation">
        <div className="container">
          <div className="profile-interpretation__header">
            <h2 className="profile-interpretation__title">
              Расшифровка<br />натальной карты
            </h2>
            <a href="#" className="profile-interpretation__link">Программа курса</a>
          </div>

          <div className="profile-interpretation__content">
            <div className="profile-interpretation__intro">
              <h3 className="profile-interpretation__intro-title">
                Пройти вводный урок<br />бесплатно
              </h3>
              <button className="btn btn-primary">Подробнее</button>
            </div>

            {/* Модули курса */}
            <div className="course-section__modules">
              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-1.svg" alt="Module 1" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 1.<br />
                  Введение в<br />
                  астрологию
                </h4>
                <p className="course-section__module-text text">
                  Что такое астрология, как она работает, какие тайны открывает карта рождения
                </p>
              </div>

              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-2.svg" alt="Module 2" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 2.<br />
                  Планеты — движущая сила<br />
                  гороскопа
                </h4>
                <p className="course-section__module-text text">
                  Роль планет в формировании личности и судьбы.
                </p>
              </div>

              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-3.svg" alt="Module 3" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 3.<br />
                  Знаки Зодиака
                </h4>
                <p className="course-section__module-text text">
                  12 архетипов, стихии, кресты, влияние знаков на личность.
                </p>
              </div>

              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-4.svg" alt="Module 4" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 4.<br />
                  Астрологические<br />
                  дома
                </h4>
                <p className="course-section__module-text text">
                  Как дома отражают жизненные сферы — любовь, деньги, успех, семья.
                </p>
              </div>

              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-5.svg" alt="Module 5" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 5.<br />
                  Аспекты между<br />
                  планетами
                </h4>
                <p className="course-section__module-text text">
                  Как взаимодействие планет влияет на судьбу.
                </p>
              </div>

              <div className="course-section__module">
                <div className="course-section__module-icon">
                  <img src="/images/module-6.svg" alt="Module 6" />
                </div>
                <h4 className="course-section__module-title heading">
                  Модуль 6.<br />
                  Построение и чтение<br />
                  карты
                </h4>
                <p className="course-section__module-text text">
                  Как читать карту шаг за шагом без ошибок.
                </p>
              </div>
            </div>
          </div>

          <div className="profile-interpretation__divider"></div>
        </div>
      </section>

      {/* СЕКЦИЯ 4: Разборы от астролога */}
      <section className="profile-consultations">
        <div className="container">
          <div className="profile-consultations__content">
            <div className="profile-consultations__left">
              <h2 className="profile-consultations__title">
                Разборы от астролога<br />
                <span className="profile-consultations__title-soon">(скоро)</span>
              </h2>
              <p className="profile-consultations__description">
                Закажите разбор у опытного астролога<br />
                и получите ответы на важные вопросы<br />
                вашей жизни
              </p>
              <button className="btn btn-primary">Подробнее</button>
            </div>

            <div className="profile-consultations__cards">
              <div className="consultation-card">
                <h3 className="consultation-card__title">Отношения</h3>
              </div>
              <div className="consultation-card">
                <h3 className="consultation-card__title">Финансы<br />и Успех</h3>
              </div>
              <div className="consultation-card">
                <h3 className="consultation-card__title">Самоопределение</h3>
              </div>
              <div className="consultation-card">
                <h3 className="consultation-card__title">Полные<br />Расклады</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;