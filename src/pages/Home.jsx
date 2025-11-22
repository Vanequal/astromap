import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalRegistration from '../components/Modal/ModalRegistration';
import ModalSubscription from '../components/Modal/ModalSubscription';
import './Home.css';

const Home = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: 'Что такое натальная карта?',
      answer: 'Это карта расположения планет и знаков зодиака в момент вашего рождения. Она отражает уникальные черты личности и потенциалы развития.'
    },
    {
      question: 'Для чего нужна натальная карта?',
      answer: 'Помогает лучше изучить себя, свои сильные стороны и скрытые таланты, а также понять, какие сферы жизни требуют внимания.'
    },
    {
      question: 'Чем натальная карта отличается от гороскопа?',
      answer: 'Гороскоп — это общее предсказание по знаку зодиака. Натальная карта индивидуальна и учитывает точное положение всех планет, домов и аспектов на момент вашего рождения.'
    },
    {
      question: 'Можно ли изменить то, что написано в карте?',
      answer: 'Натальная карта не предсказывает точное будущее, она показывает потенциал и тенденции. Ваши действия и решения могут изменить развитие событий.'
    },
    {
      question: 'Можно ли составить карту ребёнка и понять его склонности?',
      answer: 'Да. Карта ребёнка показывает таланты, характер и области, где он может развиваться.'
    },
    {
      question: 'Как часто нужно составлять новые карты?',
      answer: 'Натальная карта создаётся один раз на момент рождения. Но транзиты планет и прогрессии могут анализироваться регулярно для прогнозов.'
    },
    {
      question: 'Можно ли в сервисе составлять карты для других людей?',
      answer: 'Бесплатно вы можете составить одну натальную карту. Подписка позволяет создавать натальные карты для себя, друзей и родственников без ограничений.'
    },
    {
      question: 'Что такое Курс «Расшифровка натальной карты»?',
      answer: 'Это пошаговое руководство и практические материалы, которые помогут вам понимать значения планет, домов и аспектов, чтобы самостоятельно анализировать карты.'
    },
    {
      question: 'Нужно ли платить отдельно за каждую карту?',
      answer: 'Нет. Подписка предоставляет доступ к неограниченному созданию карт и их расшифровке.'
    },
    {
      question: 'Сколько времени нужно, чтобы разобраться в карте самостоятельно?',
      answer: 'Это зависит от вашего уровня интереса и усердия. С подпиской и обучающими материалами можно начать разбирать карту с первого дня.'
    }
  ];

  return (
    <div className="home">
      <Header isMain={true} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background"></div>
        <div className="hero__container container">
          <h1 className="hero__title">
            <span className="hero__title-gradient">ASTRO</span>
            <span className="hero__title-dark">MAP</span>
          </h1>
          <p className="hero__subtitle">
            Натальная карта — инструмент, с которого<br />
            начинается путь к себе
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section">
        <div className="form-section__container container">
          <div className="form-section__star">
            <img src="/images/star.svg" alt="Star" />
          </div>

          <h2 className="form-section__title heading">
            Создайте натальную карту<br />
            бесплатно за пару минут
          </h2>

          <div className="form-section__form">
            <h3 className="form-section__form-title">Введите свои данные:</h3>

            <div className="form-section__inputs">
              <div className="form-section__input">
                <label className="form-section__input-label">Дата рождения:</label>
                <div className="form-section__input-placeholder">дд.мм.гггг</div>
              </div>

              <div className="form-section__input">
                <label className="form-section__input-label">Время рождения:</label>
                <div className="form-section__input-placeholder">--:--</div>
              </div>

              <div className="form-section__checkbox-wrapper">
                <span className="form-section__checkbox-label">Не знаю время рождения</span>
                <div className="form-section__checkbox"></div>
              </div>

              <div className="form-section__input">
                <label className="form-section__input-label">Город рождения</label>
                <div className="form-section__input-placeholder">Введите или выберите</div>
              </div>
            </div>
          </div>

          <button className="form-section__btn">
            Построить<br />
            натальную карту
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="natal-card">
        <div className="about-section__background"></div>
        <div className="about-section__container container">
          <div className="about-section__top">
            <div className="about-section__content">
              <h2 className="about-section__title heading">
                Для чего нужна<br />
                натальная карта?
              </h2>
              <p className="about-section__text text">
                Натальная карта — это личный навигатор<br />
                по жизни. Она раскрывает ваши сильные<br />
                стороны, возможности и таланты.
              </p>
            </div>
            <div className="about-section__image">
              <img src="/images/astrologic-circle.png" alt="Astrologic Circle" />
            </div>
          </div>

          <div className="about-section__cards">
            <div className="about-section__card">
              <div className="about-section__card-icon">
                <img src="/images/sun-card.svg" alt="Work" />
              </div>
              <h3 className="about-section__card-title heading">Работа и доход</h3>
              <p className="about-section__card-text text">
                Где именно звёзды спрятали ваш источник успеха — чем заниматься, чтобы деньги приходили легко
              </p>
            </div>

            <div className="about-section__card">
              <div className="about-section__card-icon">
                <img src="/images/life-card.svg" alt="Love" />
              </div>
              <h3 className="about-section__card-title heading">Отношения и любовь</h3>
              <p className="about-section__card-text text">
                Астрологическая формула гармонии — с кем создавать отношения, в которых хочется оставаться.
              </p>
            </div>

            <div className="about-section__card">
              <div className="about-section__card-icon">
                <img src="/images/health-card.svg" alt="Health" />
              </div>
              <h3 className="about-section__card-title heading">Здоровье и энергия</h3>
              <p className="about-section__card-text text">
                Где брать силы, как восстанавливаться, сохранять баланс тела и души.
              </p>
            </div>

            <div className="about-section__card">
              <div className="about-section__card-icon">
                <img src="/images/love-card.svg" alt="Life" />
              </div>
              <h3 className="about-section__card-title heading">Жизненный путь</h3>
              <p className="about-section__card-text text">
                Как раскрыть природные таланты и понять, в чём ваша сила, миссия и истинное предназначение.
              </p>
            </div>
          </div>

          <div className="about-section__bottom">
            <div className="about-section__star">
              <img src="/images/star.svg" alt="Star" />
            </div>
            <p className="about-section__description text">
              Натальная карта, или космограмма, показывает, где находились звезды и планеты в тот самый момент и в том месте, где вы появились на свет. Слово «натальная» происходит от латинского natalis, что значит «рождение». Считалось, что именно так должен видеть небо новорожденный — уникальный звездный портрет каждого из нас.
            </p>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="question-section">
        <div className="container">
          <h2 className="question-section__title heading">А Вы хотите узнать?</h2>

          <div className="question-section__block">
            <div className="question-section__content">
              <div className="question-section__left">
                <h3 className="question-section__subtitle heading">
                  В какой профессии лучше<br />
                  всего реализуете себя?
                </h3>

                <div className="question-section__options">
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Журналист</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Врач</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Преподаватель</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Менеджер</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Астролог</span>
                  </div>
                </div>
              </div>

              <div className="question-section__right">
                <img src="/images/profesional.png" alt="Professional" />
              </div>
            </div>
          </div>

          <div className="question-section__block">
            <div className="question-section__content">
              <div className="question-section__left">
                <h3 className="question-section__subtitle heading">
                  Какой ваш идеальный<br />
                  партнер?
                </h3>

                <div className="question-section__options">
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Активный</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Творческий</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Мечтательный</span>
                  </div>
                  <div className="question-section__option">
                    <div className="question-section__option-icon">
                      <img src="/images/star.svg" alt="Star" />
                    </div>
                    <span className="question-section__option-text">Прагматичный</span>
                  </div>
                </div>
              </div>

              <div className="question-section__right">
                <img src="/images/partner.png" alt="Partner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="subscription-section">
        <div className="subscription-section__background"></div>
        <div className="subscription-section__container container">
          <h2 className="subscription-section__title heading">
            Построить карту легко.<br />
            Ее расшифровка — искусство
          </h2>

          <p className="subscription-section__text text">
            Регистрация в личном кабинете открывает<br />
            доступ к настоящему пониманию языка<br />
            звёзд.
          </p>

          <div className="subscription-section__star">
            <img src="/images/star.png" alt="Star" />
          </div>

          <h3 className="subscription-section__title heading">Что даёт подписка?</h3>

          <div className="subscription-section__benefits">
            <div className="subscription-section__benefits-grid">
              <div className="subscription-section__benefit">
                <h4 className="subscription-section__benefit-title heading">
                  100% доступ к<br />
                  обучению
                </h4>
                <p className="subscription-section__benefit-text text">
                  На курсе "Расшифровка натальной карты" разбираем, как ее читать — без сложных терминов, на понятном языке.
                </p>
              </div>

              <div className="subscription-section__benefit">
                <h4 className="subscription-section__benefit-title heading">
                  Сколько<br />
                  угодно карт
                </h4>
                <p className="subscription-section__benefit-text text">
                  Для себя, друзей, родных. Все карты можно сохранять в личном кабинете и возвращаться к ним в любой момент.
                </p>
              </div>

              <div className="subscription-section__benefit">
                <h4 className="subscription-section__benefit-title heading">
                  Практика и<br />
                  развитие
                </h4>
                <p className="subscription-section__benefit-text text">
                  Сравнивайте карты разных людей, изучайте, как звёзды влияют на судьбы, и учитесь думать как настоящий астролог.
                </p>
              </div>

              <div className="subscription-section__benefit">
                <h4 className="subscription-section__benefit-title heading">
                  Консультации
                </h4>
                <p className="subscription-section__benefit-text text">
                  Задавайте вопросы практикующим астрологам. Получайте ответы от экспертов с 7+-летним опытом в астрологии.
                </p>
              </div>

              <div className="subscription-section__benefit">
                <h4 className="subscription-section__benefit-title heading">
                  Новые материалы
                </h4>
                <p className="subscription-section__benefit-text text">
                  Мы постоянно расширяем курс и добавляем свежие примеры, техники и шаблоны интерпретаций.
                </p>
              </div>
            </div>
          </div>

          <p className="subscription-section__description text">
            Пошаговый онлайн-курс "Расшифровка натальной карты" понятен каждому.<br />
            Даже если вы никогда не изучали астрологию!
          </p>

          <button
            className="subscription-section__btn"
            onClick={() => setIsRegistrationOpen(true)}
          >
            Зарегистрироваться<br />
            и начать обучение
          </button>
        </div>
      </section>

      {/* Course Section */}
      <section className="course-section" id="decoding">
        <div className="container">
          <h2 className="course-section__title heading">Расшифровка натальной карты</h2>

          <h3 className="course-section__subtitle heading">
            Пройти вводный урок<br />
            бесплатно
          </h3>

          {/* Видеоплеер */}
          <div className="course-section__video-wrapper">
            <div className="course-section__video-controls">
              <button className="course-section__video-arrow course-section__video-arrow--left">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M24 28L14 20L24 12" stroke="rgba(222, 200, 161, 1)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <h3 className="course-section__video-lesson">1. Что такое астрология?</h3>

              <button className="course-section__video-arrow course-section__video-arrow--right">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M16 12L26 20L16 28" stroke="rgba(222, 200, 161, 1)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="course-section__video-player">
              <img src="/images/video.svg" alt="Video player" />
            </div>
          </div>

          <div className="course-section__program">
            <div className="course-section__program-star">
              <img src="/images/star.png" alt="Star" />
            </div>
            <span className="course-section__program-text">Программа курса</span>
            <div className="course-section__program-star">
              <img src="/images/star.png" alt="Star" />
            </div>
          </div>

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
      </section>

      {/* Astrologer Section */}
      <section className="astrologer-section">
        <div className="astrologer-section__background"></div>
        <div className="astrologer-section__container container">
          <h2 className="astrologer-section__title heading">Ваш личный астролог 24/7</h2>

          <p className="astrologer-section__text text">
            Получайте доступ к построению<br />
            и расшифровке натальных карт, обучающим материалами<br />
            консультациям — всё в одном личном кабинете.
          </p>

          <div className="astrologer-section__cards">
            <div className="astrologer-section__card">
              <h3 className="astrologer-section__card-title heading">
                Язык звёзд<br />
                профессионально
              </h3>
              <p className="astrologer-section__card-text text">
                Вы не просто будете строить карты, а начнете понимать их глубинные смыслы. Так делают практикующие астрологи.
              </p>
            </div>

            <div className="astrologer-section__card">
              <h3 className="astrologer-section__card-title heading">
                От натальной<br />
                карты к личному<br />
                гороскопу
              </h3>
              <p className="astrologer-section__card-text text">
                Узнайте, как по своей натальной карте составлять гороскоп: знаки, аспекты и влияние планет. Получите системное, наглядное и подробное толкование вашей звёздной истории.
              </p>
            </div>
          </div>

          <button
            className="astrologer-section__btn"
            onClick={() => setIsSubscriptionOpen(true)}
          >
            Оформить<br />
            подписку
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section" id="about">
        <div className="container">
          <h2 className="about-us-section__title heading">О нас</h2>

          <p className="about-us-section__text text">
            Получайте доступ к построению<br />
            и расшифровке натальных карт, обучающим материалами<br />
            консультациям — всё в одном личном кабинете.
          </p>

          <div className="about-us-section__features">
            <div className="about-us-section__feature">
              <h3 className="about-us-section__feature-title heading">
                профессиональные<br />
                инструменты<br />
                для составления карт
              </h3>
            </div>

            <div className="about-us-section__star">
              <img src="/images/star.png" alt="Star" />
            </div>

            <div className="about-us-section__feature">
              <h3 className="about-us-section__feature-title heading">
                онлайн-курс<br />
                по расшифровке
              </h3>
            </div>

            <div className="about-us-section__star">
              <img src="/images/star.png" alt="Star" />
            </div>

            <div className="about-us-section__feature">
              <h3 className="about-us-section__feature-title heading">
                поддержку<br />
                от практикующих<br />
                астрологов
              </h3>
            </div>
          </div>

          <div className="about-us-section__divider"></div>

          <p className="about-us-section__description text">
            Все продумано до мелочей, чтобы вы могли использовать астрологию<br />
            как инструмент — для себя, семьи и своей жизни
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-section__title heading">FAQ</h2>

          <div className="faq-section__list">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-section__item ${activeFaq === index ? 'faq-section__item--active' : ''}`}
              >
                <div
                  className="faq-section__question"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-section__question-left">
                    <div className="faq-section__question-icon">
                      <img src="/images/star.png" alt="Star" />
                    </div>
                    <h3 className="faq-section__question-text heading">{item.question}</h3>
                  </div>
                  <div className="faq-section__question-toggle">
                    {activeFaq === index ? (
                      <svg className="faq-section__minus" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M5 15H25" strokeWidth="2" />
                      </svg>
                    ) : (
                      <svg className="faq-section__plus" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 5V25M5 15H25" strokeWidth="2" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="faq-section__answer">
                  <p className="faq-section__answer-text text">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__container container">
          <div className="cta-section__content">
            <h2 className="cta-section__title heading">
              Понять себя через звёзды —<br />
              проще, чем кажется.
            </h2>

            <button className="cta-section__btn">
              Создать<br />
              натальную карту
            </button>
          </div>

          <div className="cta-section__image">
            <img src="/images/cta.png" alt="CTA" />
          </div>
        </div>
      </section>

      <Footer />

      <ModalRegistration
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <ModalSubscription
        isOpen={isSubscriptionOpen}
        onClose={() => setIsSubscriptionOpen(false)}
      />
    </div>
  );
};

export default Home;
