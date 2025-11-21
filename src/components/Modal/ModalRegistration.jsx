import './Modal.css';

const ModalRegistration = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-overlay--active' : ''}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title">
          Зарегистрируйтесь на <span className="modal__title-accent">AstroMap</span>,<br />
          чтобы не потерять<br />
          свою карту!
        </h2>

        <div className="modal__input">
          <label className="modal__input-label">Email</label>
          <input 
            type="email" 
            className="modal__input-field" 
            placeholder="astro@map.com"
          />
        </div>

        <p className="modal__text">
          На Ваш электронный адрес будет отправлено письмо<br />
          с сгенерированным паролем для входа на сайт.<br />
          Его всегда можно изменить в настройках профиля
        </p>

        <button className="modal__btn">Зарегистрироваться</button>

        <p className="modal__footer-text">
          Регистрируясь на сайте AstroMap.pro вы соглашаетесь с <a href="#" className="modal__footer-link">политикой<br />
          конфиденциальности</a> и принимаете пользовательское соглашение
        </p>
      </div>
    </div>
  );
};

export default ModalRegistration;