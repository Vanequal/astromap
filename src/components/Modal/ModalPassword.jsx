import './Modal.css';

const ModalPassword = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'modal-overlay--active' : ''}`} 
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title modal__title--dark">Изменить пароль</h2>
        <h3 className="modal__subtitle">Введите новый пароль:</h3>

        <div className="modal__input">
          <label className="modal__input-label">Пароль</label>
          <input 
            type="password" 
            className="modal__input-field" 
            placeholder="***************"
          />
        </div>

        <div className="modal__input">
          <label className="modal__input-label">Повторите пароль:</label>
          <input 
            type="password" 
            className="modal__input-field" 
            placeholder="***************"
          />
        </div>

        <button className="modal__btn modal__btn--compact">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default ModalPassword;