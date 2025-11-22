import { useState } from 'react';
import './Header.css';

const Header = ({ isMain = false }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <>
      <header className={`header ${isMain ? 'header--main' : 'header--inner'}`}>
        <div className="header__container">
          <div className="header__logo">
            <a href="/">
              <img src="/images/logo.svg" alt="AstroMap Logo" />
            </a>
          </div>

          {/* Навигация - только для десктопа на главной */}
          {isMain && (
            <nav className="header__nav">
              <a href="/natal-chart" className="header__nav-link">
                Ваша<br />натальная карта
              </a>
              <a href="/learning" className="header__nav-link">
                Расшифровка
              </a>
              <a href="#about" className="header__nav-link">
                О нас
              </a>
            </nav>
          )}

          {/* Кнопка - только для десктопа на главной */}
          {isMain && (
            <a href="/profile" className="header__btn">Личный кабинет</a>
          )}

          {/* Бургер - всегда рендерим, CSS управляет видимостью */}
          <button className="header__burger" onClick={toggleBurger}>
            <img src="/images/burger-menu.svg" alt="Меню" />
          </button>
        </div>
      </header>

      {/* Burger Menu */}
      <div className={`burger-menu ${isBurgerOpen ? 'burger-menu--active' : ''}`}>
        <div className="burger-menu__header">
          <h2 className="burger-menu__title">Аккаунт</h2>
          <button className="burger-menu__close" onClick={toggleBurger}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M2 2L28 28M28 2L2 28" stroke="rgba(23, 40, 72, 1)" strokeWidth="2" />
            </svg>
          </button>
        </div>

        <div className="burger-menu__avatar">
          <img src="/images/avatar-profile.png" alt="Avatar" />
        </div>

        <a href="/profile" className="burger-menu__profile-btn">Личный кабинет</a>

        <div className="burger-menu__star">
          <img src="/images/star.svg" alt="Star" />
        </div>

        <nav className="burger-menu__nav">
          <div className="burger-menu__nav-item">
            <a href="/" className="burger-menu__nav-link">Главная</a>
            <svg className="burger-menu__arrow" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="rgba(117, 131, 149, 1)" strokeWidth="2" />
            </svg>
          </div>
          <div className="burger-menu__nav-item">
            <a href="/natal-chart" className="burger-menu__nav-link">Натальная карта</a>
            <svg className="burger-menu__arrow" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="rgba(117, 131, 149, 1)" strokeWidth="2" />
            </svg>
          </div>
          <div className="burger-menu__nav-item">
            <a href="/learning" className="burger-menu__nav-link">Обучение</a>
            <svg className="burger-menu__arrow" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="rgba(117, 131, 149, 1)" strokeWidth="2" />
            </svg>
          </div>
          <div className="burger-menu__nav-item">
            <a href="/analysis" className="burger-menu__nav-link">Разборы от Астролога</a>
            <svg className="burger-menu__arrow" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="rgba(117, 131, 149, 1)" strokeWidth="2" />
            </svg>
          </div>
        </nav>

        <a href="/settings" className="burger-menu__settings">
          <span className="burger-menu__settings-text">Настройки</span>
          <div className="burger-menu__settings-icon">
            <img src="/images/settings.svg" alt="Settings" />
          </div>
        </a>

        <button className="burger-menu__login-btn">Войти</button>
      </div>

      {isBurgerOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.5)',
            zIndex: 9999
          }}
          onClick={toggleBurger}
        />
      )}
    </>
  );
}

export default Header;