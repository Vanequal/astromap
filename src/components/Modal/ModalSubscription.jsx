import './Modal.css';

const ModalSubscription = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-overlay--active' : ''}`} onClick={onClose}>
      <div className="modal modal--subscription" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M2 2L28 28M28 2L2 28" stroke="rgba(23, 40, 72, 1)" strokeWidth="2"/>
          </svg>
        </button>

        <div className="modal__content">
          <h2 className="modal__title">
            Откройте для себя<br />
            все возможности сервиса <span className="modal__title-accent">AstroMap</span>,<br />
            всего за рубль(-ей)!
          </h2>

          <div className="modal__list">
            <div className="modal__list-item">
              <img src="/images/star.png" alt="Star" className="modal__list-icon" />
              <p className="modal__list-text">
                Доступ к обучению самостоятельной полной расшифровке Натальной карты на все случаи жизни!
              </p>
            </div>
            <div className="modal__list-item">
              <img src="/images/star.png" alt="Star" className="modal__list-icon" />
              <p className="modal__list-text">
                Создавать и сохранять неограниченное количество натальных карт: для себя, родных и близких!
              </p>
            </div>
            <div className="modal__list-item">
              <img src="/images/star.png" alt="Star" className="modal__list-icon" />
              <p className="modal__list-text">
                Доступ к эксклюзивным материалам!
              </p>
            </div>
          </div>

          <button className="modal__btn">Оформить подписку за рубль(ей)</button>

          <div className="modal__checkbox-group">
            <div className="modal__checkbox-item">
              <div className="modal__checkbox"></div>
              <label className="modal__checkbox-label">
                Я принимаю политику обработки персональных данных, а так же<br />
                соглашаюсь с офертой и тарифами.
              </label>
            </div>
            <div className="modal__checkbox-item">
              <div className="modal__checkbox"></div>
              <label className="modal__checkbox-label">
                Я согласен на списание 0₽ (разово), далее — 000₽ каждую неделю.<br />
                Отмена — в любой момент.
              </label>
            </div>
          </div>
        </div>

        <img 
          src="/images/modal-2.png" 
          alt="Subscription" 
          className="modal__image"
        />
      </div>
    </div>
  );
};

export default ModalSubscription;