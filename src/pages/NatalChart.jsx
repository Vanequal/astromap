import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSubscription from '../components/Modal/ModalSubscription';
import './NatalChart.css';

const NatalChart = () => {
  const [activeTab, setActiveTab] = useState('signs'); // 'signs' or 'houses'
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  
  // State для выбранной карточки
  const [selectedCard, setSelectedCard] = useState({
    icon: 'oven.svg',
    title: 'Планета в знаке зодиака',
    text: 'Стрелец - идеалист и оптимист, надежный, дружелюбный, честный и разносторонний человек, относящимся ко всем без предубеждения и штампов. Но он также может быть бестактным, безответственным, хвастливым, самодовольным, высокомерным, сварливым, фанатичным и навязывать окружающим свое мнение. Стрельцу по душе любая работа, в которой есть перспектива и риск, в то же время он старается избежать рутинных и детальных заданий.'
  });

  // Данные пользователя (заглушка)
  const userData = {
    birthDateFull: '15 января 1990',
    birthTime: '14:30'
  };

  // Данные планет (заглушка)
  const planets = [
    { icon: 'sun.svg', name: 'Солнце', position: 'Козерог', house: '5 дом' },
    { icon: 'moon.svg', name: 'Луна', position: 'Водолей', house: '6 дом' },
    { icon: 'merkuriy.svg', name: 'Меркурий', position: 'Стрелец', house: '4 дом' },
    { icon: 'venera.svg', name: 'Венера', position: 'Козерог', house: '5 дом' },
    { icon: 'mars.svg', name: 'Марс', position: 'Лев', house: '12 дом' },
    { icon: 'jupiter.svg', name: 'Юпитер', position: 'Близнецы', house: '10 дом' },
    { icon: 'saturn.svg', name: 'Сатурн', position: 'Козерог', house: '5 дом' },
    { icon: 'uran.svg', name: 'Уран', position: 'Козерог', house: '5 дом' },
    { icon: 'neptun.svg', name: 'Нептун', position: 'Козерог', house: '5 дом' },
    { icon: 'pluton.svg', name: 'Плутон', position: 'Скорпион', house: '3 дом' }
  ];

  // Планеты в знаках с детальными описаниями
  const planetsInSigns = [
    { 
      icon: 'sun.svg', 
      title: 'Солнце', 
      subtitle: 'Личность',
      description: 'Солнце в вашей натальной карте определяет вашу сущность, характер и жизненную энергию. Оно показывает, как вы воспринимаете себя и как проявляете свою индивидуальность в мире. Положение Солнца влияет на вашу самооценку, цели и стремления.'
    },
    { 
      icon: 'moon.svg', 
      title: 'Луна', 
      subtitle: 'Эмоции',
      description: 'Луна управляет вашими эмоциями, интуицией и внутренним миром. Она раскрывает ваши истинные чувства, подсознательные реакции и потребность в безопасности. Положение Луны показывает, как вы эмоционально реагируете на окружающий мир и что вам нужно для душевного комфорта.'
    },
    { 
      icon: 'merkuriy.svg', 
      title: 'Меркурий', 
      subtitle: 'Мышление',
      description: 'Меркурий отвечает за ваше мышление, коммуникацию и способность обрабатывать информацию. Он показывает, как вы учитесь, общаетесь и принимаете решения. Положение Меркурия влияет на ваш интеллект, любознательность и стиль общения.'
    },
    { 
      icon: 'venera.svg', 
      title: 'Венера', 
      subtitle: 'Чувства',
      description: 'Венера - планета любви, красоты и гармонии. Она определяет ваши романтические предпочтения, эстетический вкус и то, что приносит вам удовольствие. Положение Венеры показывает, как вы любите, что цените в отношениях и что считаете прекрасным.'
    },
    { 
      icon: 'mars.svg', 
      title: 'Марс', 
      subtitle: 'Активность',
      description: 'Марс - планета действия, энергии и страсти. Он показывает, как вы отстаиваете свои интересы, проявляете инициативу и справляетесь с конфликтами. Положение Марса влияет на вашу мотивацию, сексуальность и способность достигать целей.'
    },
    { 
      icon: 'jupiter.svg', 
      title: 'Юпитер', 
      subtitle: 'Расширение',
      description: 'Юпитер - планета роста, удачи и мудрости. Он определяет ваши возможности для развития, философские взгляды и стремление к познанию. Положение Юпитера показывает сферы жизни, где вам везет, и как вы можете расширить свои горизонты.'
    },
    { 
      icon: 'saturn.svg', 
      title: 'Сатурн', 
      subtitle: 'Ограничение',
      description: 'Сатурн - планета дисциплины, ответственности и ограничений. Он показывает ваши страхи, препятствия и жизненные уроки. Положение Сатурна указывает на области, где требуется усердная работа и где вы можете достичь мастерства через терпение.'
    },
    { 
      icon: 'uran.svg', 
      title: 'Уран', 
      subtitle: 'Озарение',
      description: 'Уран - планета перемен, оригинальности и свободы. Он определяет вашу уникальность, стремление к независимости и способность к инновациям. Положение Урана показывает, где вы склонны нарушать правила и создавать что-то новое.'
    },
    { 
      icon: 'neptun.svg', 
      title: 'Нептун', 
      subtitle: 'Вера',
      description: 'Нептун - планета мечты, духовности и иллюзий. Он управляет вашим воображением, интуицией и связью с тонкими мирами. Положение Нептуна показывает ваши идеалы, таланты в искусстве и области, где возможны заблуждения.'
    },
    { 
      icon: 'pluton.svg', 
      title: 'Плутон', 
      subtitle: 'Власть',
      description: 'Плутон - планета трансформации, власти и глубинных процессов. Он показывает вашу способность к перерождению, скрытую силу и стремление к контролю. Положение Плутона указывает на области глубоких изменений и где вы можете обрести истинную власть.'
    }
  ];

  // Дома с описаниями
  const housesData = [
    {
      icon: 'ascedent.svg',
      title: 'Асцендент',
      subtitle: 'Ваш имидж',
      description: 'Асцендент - это ваша маска, первое впечатление, которое вы производите на окружающих. Он показывает, как вас воспринимают другие люди при первой встрече и какой образ вы транслируете миру.'
    },
    {
      icon: 'dom-1.svg',
      title: '1 дом',
      subtitle: 'Ваше Я',
      description: 'Первый дом отвечает за вашу личность, самосознание и физическое тело. Он показывает, как вы воспринимаете себя, вашу внешность и непосредственные реакции на жизненные ситуации.'
    },
    {
      icon: 'dom-2.svg',
      title: '2 дом',
      subtitle: 'Финансы',
      description: 'Второй дом управляет вашими финансами, материальными ценностями и ресурсами. Он показывает ваше отношение к деньгам, способность зарабатывать и что вы цените в материальном мире.'
    },
    {
      icon: 'dom-3.svg',
      title: '3 дом',
      subtitle: 'Общение',
      description: 'Третий дом отвечает за коммуникацию, обучение и ближайшее окружение. Он показывает ваш стиль общения, отношения с братьями и сестрами, а также способность к обучению и передаче информации.'
    },
    {
      icon: 'dom-4.svg',
      title: '4 дом',
      subtitle: 'Хозяйство',
      description: 'Четвертый дом управляет домом, семьей и корнями. Он показывает ваши отношения с родителями, особенно с матерью, домашний уклад и то, что дает вам чувство безопасности и принадлежности.'
    },
    {
      icon: 'dom-5.svg',
      title: '5 дом',
      subtitle: 'Любовь',
      description: 'Пятый дом отвечает за творчество, романтику и удовольствия. Он показывает вашу способность к самовыражению, отношения с детьми, романтические связи и то, что приносит вам радость.'
    },
    {
      icon: 'dom-6.svg',
      title: '6 дом',
      subtitle: 'Работа',
      description: 'Шестой дом управляет повседневной работой, здоровьем и служением. Он показывает ваш подход к рутинным обязанностям, отношение к здоровью и способность заботиться о других.'
    },
    {
      icon: 'dom-7.svg',
      title: '7 дом',
      subtitle: 'Брак',
      description: 'Седьмой дом отвечает за партнерство, брак и близкие отношения. Он показывает, какого партнера вы ищете, как строите отношения и что проецируете на других людей.'
    },
    {
      icon: 'dom-8.svg',
      title: '8 дом',
      subtitle: 'Духовность',
      description: 'Восьмой дом управляет трансформацией, глубинными процессами и общими ресурсами. Он показывает ваше отношение к интимности, смерти, наследству и способность к глубоким изменениям.'
    },
    {
      icon: 'dom-9.svg',
      title: '9 дом',
      subtitle: 'Философия',
      description: 'Девятый дом отвечает за философию, высшее образование и дальние путешествия. Он показывает ваше мировоззрение, стремление к познанию и отношение к другим культурам.'
    },
    {
      icon: 'dom-10.svg',
      title: '10 дом',
      subtitle: 'Карьера',
      description: 'Десятый дом управляет карьерой, социальным статусом и призванием. Он показывает ваши профессиональные амбиции, отношения с авторитетами и то, как вы хотите быть известны в обществе.'
    },
    {
      icon: 'dom-11.svg',
      title: '11 дом',
      subtitle: 'Друзья',
      description: 'Одиннадцатый дом отвечает за дружбу, группы и социальные идеалы. Он показывает ваше место в коллективе, отношения с друзьями и стремление к общественным целям.'
    },
    {
      icon: 'dom-12.svg',
      title: '12 дом',
      subtitle: 'Призвание',
      description: 'Двенадцатый дом управляет подсознанием, духовностью и скрытыми процессами. Он показывает ваши глубинные страхи, связь с высшими силами и области, где требуется уединение и самопознание.'
    }
  ];

  // Обработчик клика на планету в знаке
  const handlePlanetClick = (planet) => {
    setSelectedCard({
      icon: planet.icon,
      title: `${planet.title} в знаке`,
      text: planet.description
    });
    // Прокрутка к секции деталей
    document.querySelector('.natal-details')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Обработчик клика на дом
  const handleHouseClick = (house) => {
    setSelectedCard({
      icon: house.icon,
      title: house.title,
      text: house.description
    });
    // Прокрутка к секции деталей
    document.querySelector('.natal-details')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  // Обработчик клика на маленькую detail-card
  const handleDetailCardClick = (cardData) => {
    setSelectedCard(cardData);
    // Прокрутка к секции деталей
    document.querySelector('.natal-details')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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
                <div 
                  key={index} 
                  className="planet-card"
                  onClick={() => handlePlanetClick(planet)}
                >
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
                {housesData.slice(0, 3).map((house, index) => (
                  <div 
                    key={index} 
                    className="house-card"
                    onClick={() => handleHouseClick(house)}
                  >
                    <img src={`/images/${house.icon}`} alt={house.title} className="planet-card__icon" />
                    <h4 className="planet-card__title">{house.title}</h4>
                    <p className="planet-card__subtitle">{house.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Остальные ряды - по 5 карт */}
              <div className="planets-grid--houses-bottom">
                {housesData.slice(3).map((house, index) => (
                  <div 
                    key={index} 
                    className="house-card"
                    onClick={() => handleHouseClick(house)}
                  >
                    <img src={`/images/${house.icon}`} alt={house.title} className="planet-card__icon" />
                    <h4 className="planet-card__title">{house.title}</h4>
                    <p className="planet-card__subtitle">{house.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* СЕКЦИЯ 4: Детальная информация */}
      <section className="natal-details">
        <div className="container">
          <div className="natal-details__grid">
            {/* Большая карта сверху - динамическая */}
            <div className="detail-card detail-card--large">
              <div className="detail-card__header">
                <img src={`/images/${selectedCard.icon}`} alt={selectedCard.title} className="detail-card__icon" />
                <h3 className="detail-card__title">{selectedCard.title}</h3>
              </div>
              <p className="detail-card__text">
                {selectedCard.text}
              </p>
            </div>

            {/* 3 карты снизу */}
            <div 
              className="detail-card detail-card--split"
              onClick={() => handleDetailCardClick({
                icon: 'moon.svg',
                title: 'Луна в Козероге',
                text: 'Луна управляет вашими эмоциями, интуицией и внутренним миром, раскрывая Ваши истинные чувства. В Козероге Луна создает сдержанного, ответственного человека с серьезным подходом к эмоциям. Такие люди не любят показывать свои чувства открыто и предпочитают держать эмоции под контролем. Они стремятся к стабильности и безопасности в эмоциональной жизни.'
              })}
            >
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

            <div 
              className="detail-card detail-card--split"
              onClick={() => handleDetailCardClick({
                icon: 'venera.svg',
                title: 'Венера в Козероге',
                text: 'Венера - планета, отвечающая за любовь, гармонию и стремление к красоте в Вашей жизни. В Козероге Венера создает серьезное отношение к любви и отношениям. Такие люди ценят стабильность, надежность и преданность в партнерстве. Они могут казаться холодными, но на самом деле очень верны и готовы строить долгосрочные отношения, основанные на взаимном уважении.'
              })}
            >
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

            <div 
              className="detail-card detail-card--split"
              onClick={() => handleDetailCardClick({
                icon: 'mars.svg',
                title: 'Марс во Льве',
                text: 'Марс - планета силы и энергии, влияющая на Вашу мотивацию и способность добиваться своих целей. Во Льве Марс дает огромную уверенность в себе, харизму и стремление быть в центре внимания. Такие люди обладают сильной волей, творческой энергией и способностью вдохновлять других. Они прирожденные лидеры, которые действуют смело и великодушно.'
              })}
            >
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