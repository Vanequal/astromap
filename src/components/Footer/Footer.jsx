import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">AstroMap</div>

        <nav className="footer__nav">
          <a href="#agreement" className="footer__nav-link">Пользовательское соглашение</a>
          <a href="#offer" className="footer__nav-link">Публичная оферта</a>
          <a href="#privacy" className="footer__nav-link">Политика конфиденциальности</a>
          <a href="#contacts" className="footer__nav-link">Контакты</a>
        </nav>

        <div className="footer__star">
          <img src="/images/star.png" alt="Star" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;