import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalEmail from '../components/Modal/ModalEmail';
import ModalPassword from '../components/Modal/ModalPassword';
import ModalSubscription from '../components/Modal/ModalSubscription';
import './Settings.css';

const Settings = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <div className="settings">
      <Header isMain={false}/>
      
      <section className="settings-section">
        <div className="settings-section__background">
          <img src="/images/first-section.jpg" alt="Background" />
        </div>

        <div className="settings-section__content">
          <h1 className="settings-section__title">Настройки</h1>

          <div className="settings-container">
            {/* Колонка 1: Ваши данные */}
            <div className="settings-block">
              <h2 className="settings-block__title">Ваши данные</h2>
              
              <div className="settings-form">
                <div className="settings-form__input">
                  <label className="settings-form__label">Ваше имя</label>
                  <div className="settings-form__placeholder">Имя</div>
                </div>

                <div className="settings-form__input">
                  <label className="settings-form__label">Дата рождения:</label>
                  <div className="settings-form__placeholder">дд.мм.гггг</div>
                </div>

                <div className="settings-form__input">
                  <label className="settings-form__label">Время рождения:</label>
                  <div className="settings-form__placeholder">--:--</div>
                </div>

                <div className="settings-form__input">
                  <label className="settings-form__label">Город рождения</label>
                  <div className="settings-form__placeholder">Введите или выберите</div>
                </div>

                <div className="settings-form__input">
                  <label className="settings-form__label">Пол</label>
                  <div className="settings-form__placeholder">Выберите</div>
                </div>

                <button className="settings-form__btn">
                  Сохранить изменения
                </button>
              </div>
            </div>

            {/* Колонка 2: Email */}
            <div className="settings-block">
              <h2 className="settings-block__title">Актуальный Email</h2>
              
              <div className="settings-form">
                <div className="settings-form__input settings-form__input--email">
                  <div className="settings-form__placeholder">astro@map.com</div>
                </div>

                <button 
                  className="settings-form__btn"
                  onClick={() => setIsEmailModalOpen(true)}
                >
                  Изменить<br />почту
                </button>
              </div>
            </div>

            {/* Колонка 3: Пароль */}
            <div className="settings-block">
              <h2 className="settings-block__title">Пароль</h2>
              
              <div className="settings-form">
                <button 
                  className="settings-form__btn"
                  onClick={() => setIsPasswordModalOpen(true)}
                >
                  Изменить<br />пароль
                </button>
              </div>
            </div>

            {/* Колонка 4: Подписка */}
            <div className="settings-block">
              <h2 className="settings-block__title">Подписка</h2>
              
              <div className="settings-form">
                <button 
                  className="settings-form__btn"
                  onClick={() => setIsSubscriptionModalOpen(true)}
                >
                  Оформить <br /> подписку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Модалки */}
      <ModalEmail 
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />

      <ModalPassword 
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />

      <ModalSubscription 
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
      />
    </div>
  );
};

export default Settings;