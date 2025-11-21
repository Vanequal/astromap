import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSubscription from '../components/Modal/ModalSubscription';
import './NatalChart.css';

const NatalChart = () => {
  const [activeTab, setActiveTab] = useState('signs'); // 'signs' or 'houses'
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Данные пользователя (заглушка)
  const userData = {
    birthDateFull: '15 января 1990',
    birthTime: '14:30'
  };

  // Данные планет (заглушка)
  const planets = [
    { icon: 'sun.svg', name: 'Солнце', position: '♑ Козерог', house: '5 дом' },
    { icon: 'moon.svg', name: 'Луна', position: '♒ Водолей', house: '6 дом' },
    { icon: 'merkuriy.svg', name: 'Меркурий', position: '♐ Стрелец', house: '4 дом' },
    { icon: 'venera.svg', name: 'Венера', position: '♑ Козерог', house: '5 дом' },
    { icon: 'mars.svg', name: 'Марс', position: '♌ Лев', house: '12 дом' },
    { icon: 'jupiter.svg', name: 'Юпитер', position: '♊ Близнецы', house: '10 дом' },
    { icon: 'saturn.svg', name: 'Сатурн', position: '♑ Козерог', house: '5 дом' },
    { icon: 'uran.svg', name: 'Уран', position: '♑ Козерог', house: '5 дом' },
    { icon: 'neptun.svg', name: 'Нептун', position: '♑ Козерог', house: '5 дом' },
    { icon: 'pluton.svg', name: 'Плутон', position: '♏ Скорпион', house: '3 дом' }
  ];

  // Планеты в знаках
  const planetsInSigns = [
    { icon: 'sun.svg', title: 'Солнце', subtitle: 'Личность' },
    { icon: 'moon.svg', title: 'Луна', subtitle: 'Эмоции' },
    { icon: 'merkuriy.svg', title: 'Меркурий', subtitle: 'Мышление' },
    { icon: 'venera.svg', title: 'Венера', subtitle: 'Чувства' },
    { icon: 'mars.svg', title: 'Марс', subtitle: 'Активность' },
    { icon: 'jupiter.svg', title: 'Юпитер', subtitle: 'Расширение' },
    { icon: 'saturn.svg', title: 'Сатурн', subtitle: 'Ограничение' },
    { icon: 'uran.svg', title: 'Уран', subtitle: 'Озарение' },
    { icon: 'neptun.svg', title: 'Нептун', subtitle: 'Вера' },
    { icon: 'pluton.svg', title: 'Плутон', subtitle: 'Власть' }
  ];

  return (
    <div className="natal-chart-page">
      <Header isMain={false} />

      {/* СЕКЦИЯ 1: Заголовок */}
      <section className="natal-hero">
        <div className="natal-hero__background">
          <img src="/images/first-section.jpg" alt="Background" />
        </div>

        <div className="natal-hero__content">
          <h1 className="natal-hero__title">Натальная карта</h1>
        </div>
      </section>

      {/* СЕКЦИЯ 2: Натальная карта */}
      <section className="natal-main">
        <div className="container">
          <div className="natal-main__grid">
            {/* Левый блок - Натальная карта */}
            <div className="natal-main__card">
              <h3 className="natal-main__card-title">
                {userData.birthDateFull} - {userData.birthTime}
              </h3>

              <div className="natal-chart-wrapper">
                <img
                  src="/images/natal-card.png"
                  alt="Натальная карта"
                  className="natal-chart-image"
                />

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
            <div className="natal-main__card">
              <h3 className="natal-main__card-title" style={{ textAlign: 'left' }}>
                Положение планет:
              </h3>

              <div className="planets-table">
                <div className="planets-column">
                  <div className="planets-column__header">Планета</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-row">
                      <img src={`/images/${planet.icon}`} alt={planet.name} />
                      <span className="planet-row__name">{planet.name}</span>
                    </div>
                  ))}
                </div>

                <div className="planets-column">
                  <div className="planets-column__header">Положение</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-position">{planet.position}</div>
                  ))}
                </div>

                <div className="planets-column">
                  <div className="planets-column__header">Дом</div>
                  {planets.map((planet, index) => (
                    <div key={index} className="planet-house">{planet.house}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Текст описания */}
          <p className="natal-main__description">
            На карте показано расположение планет и звезд в момент вашего рождения.<br />
            Это точная «космическая фотография» вашей личности.
          </p>

          {/* Кнопки */}
          <div className="natal-main__buttons">
            <button className="btn btn-primary natal-main__btn">
              Все натальные карты
            </button>
            <button className="btn btn-primary natal-main__btn">
              Создать новую<br />натальную карту
            </button>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 3: Планеты в знаках/домах */}
      <section className="natal-planets">
        <div className="container">
          {/* Табы */}
          <div className="natal-tabs">
            <button
              className={`natal-tabs__item ${activeTab === 'signs' ? 'natal-tabs__item--active' : ''}`}
              onClick={() => setActiveTab('signs')}
            >
              Планеты в знаках
            </button>
            <button
              className={`natal-tabs__item ${activeTab === 'houses' ? 'natal-tabs__item--active' : ''}`}
              onClick={() => setActiveTab('houses')}
            >
              Планеты в домах
            </button>
          </div>

          {/* Планеты в знаках */}
          {activeTab === 'signs' && (
            <div className="planets-grid planets-grid--signs">
              {planetsInSigns.map((planet, index) => (
                <div key={index} className="planet-card">
                  <img src={`/images/${planet.icon}`} alt={planet.title} className="planet-card__icon" />
                  <h4 className="planet-card__title">{planet.title}</h4>
                  <p className="planet-card__subtitle">{planet.subtitle}</p>
                </div>
              ))}
            </div>
          )}

          {/* Планеты в домах */}
          {activeTab === 'houses' && (
            <div className="planets-grid planets-grid--houses">
              {/* Первый ряд - 3 широкие карты */}
              <div className="planets-grid--houses-top">
                <div className="house-card">
                  <img src="/images/ascedent.svg" alt="Асцендент" className="planet-card__icon" />
                  <h4 className="planet-card__title">Асцендент</h4>
                  <p className="planet-card__subtitle">Ваш имидж</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-1.svg" alt="1 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">1 дом</h4>
                  <p className="planet-card__subtitle">Ваше Я</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-2.svg" alt="2 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">2 дом</h4>
                  <p className="planet-card__subtitle">Финансы</p>
                </div>
              </div>

              {/* Остальные ряды - по 5 карт */}
              <div className="planets-grid--houses-bottom">
                <div className="house-card">
                  <img src="/images/dom-3.svg" alt="3 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">3 дом</h4>
                  <p className="planet-card__subtitle">Общение</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-4.svg" alt="4 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">4 дом</h4>
                  <p className="planet-card__subtitle">Хозяйство</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-5.svg" alt="5 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">5 дом</h4>
                  <p className="planet-card__subtitle">Любовь</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-6.svg" alt="6 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">6 дом</h4>
                  <p className="planet-card__subtitle">Работа</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-7.svg" alt="7 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">7 дом</h4>
                  <p className="planet-card__subtitle">Брак</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-8.svg" alt="8 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">8 дом</h4>
                  <p className="planet-card__subtitle">Духовность</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-9.svg" alt="9 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">9 дом</h4>
                  <p className="planet-card__subtitle">Философия</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-10.svg" alt="10 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">10 дом</h4>
                  <p className="planet-card__subtitle">Карьера</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-11.svg" alt="11 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">11 дом</h4>
                  <p className="planet-card__subtitle">Друзья</p>
                </div>
                <div className="house-card">
                  <img src="/images/dom-12.svg" alt="12 дом" className="planet-card__icon" />
                  <h4 className="planet-card__title">12 дом</h4>
                  <p className="planet-card__subtitle">Призвание</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* СЕКЦИЯ 4: Детальная информация */}
      <section className="natal-details">
        <div className="container">
          <div className="natal-details__grid">
            {/* Большая карта сверху */}
            <div className="detail-card detail-card--large">
              <div className="detail-card__header">
                <div className="detail-card__circle"></div>
                <img src="/images/oven.svg" alt="Овен" className="detail-card__icon" />
                <h3 className="detail-card__title">Планета в знаке зодиака</h3>
              </div>
              <p className="detail-card__text">
                Стрелец - идеалист и оптимист, надежный, дружелюбный, честный и разносторонний человек, относящимся ко всем без предубеждения и штампов. Но он также может быть бестактным, безответственным, хвастливым, самодовольным, высокомерным, сварливым, фанатичным и навязывать окружающим свое мнение. Стрельцу по душе любая работа, в которой есть перспектива и риск, в то же время он старается избежать рутинных и детальных заданий.
              </p>
            </div>

            {/* 3 карты снизу */}
            <div className="detail-card detail-card--split">
              <div className="detail-card__left">
                <img src="/images/moon.svg" alt="Луна" />
              </div>
              <div className="detail-card__right">
                <h4 className="detail-card__subtitle">Луна в Козероге</h4>
                <p className="detail-card__description">
                  Луна управляет вашими эмоциями, интуицией и внутренним миром, раскрывая Ваши истинные чувства.
                </p>
              </div>
            </div>

            <div className="detail-card detail-card--split">
              <div className="detail-card__left">
                <img src="/images/venera.svg" alt="Венера" />
              </div>
              <div className="detail-card__right">
                <h4 className="detail-card__subtitle">Венера в Козероге</h4>
                <p className="detail-card__description">
                  Венера - планета, отвечающая за любовь, гармонию и стремление к красоте в Вашей жизни.
                </p>
              </div>
            </div>

            <div className="detail-card detail-card--split">
              <div className="detail-card__left">
                <img src="/images/mars.svg" alt="Марс" />
              </div>
              <div className="detail-card__right">
                <h4 className="detail-card__subtitle">Марс во Льве</h4>
                <p className="detail-card__description">
                  Марс - планета силы и энергии, влияющая на Вашу мотивацию и способность добиваться своих целей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ 5: Подписка */}
      <section className="natal-subscription">
        <div className="container">
          <h2 className="natal-subscription__title">
            Что даёт подписка на сервис<br />
            <span className="natal-subscription__title-accent">AstroMap</span>?
          </h2>

          <div className="subscription-benefits">
            <div className="benefit-card">
              <h3 className="benefit-card__title">Обучение расшифровке:</h3>
              <p className="benefit-card__text">научим создавать и читать натальные карты.</p>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-card__title">Создавайте неограниченное создание карт:</h3>
              <p className="benefit-card__text">для себя, родственников, друзей — сколько угодно.</p>
            </div>
            <div className="benefit-card">
              <h3 className="benefit-card__title">Хранение в Личном Кабинете:</h3>
              <p className="benefit-card__text">возвращайтесь к картам и изучайте их в любое время.</p>
            </div>
          </div>

          <button
            className="btn btn-primary natal-subscription__btn"
            onClick={() => setIsSubscriptionModalOpen(true)}
          >
            Оформить<br />подписку
          </button>
        </div>
      </section>

      <Footer />

      {/* Модалка подписки */}
      <ModalSubscription
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  );
};

export default NatalChart;