import './Modal.css';

const ModalEmail = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className={`modal-overlay ${isOpen ? 'modal-overlay--active' : ''}`} 
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal__title modal__title--dark">Изменить почту</h2>
        <h3 className="modal__subtitle">Введите новый email:</h3>

        <div className="modal__input">
          <label className="modal__input-label">Email</label>
          <input 
            type="email" 
            className="modal__input-field" 
            placeholder="astro@map.com"
          />
        </div>

        <button className="modal__btn modal__btn--compact">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default ModalEmail;