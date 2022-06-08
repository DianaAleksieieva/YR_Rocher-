import "./OrderForm.css";
import React from 'react';
import { createPortal } from 'react-dom';
const modalRootRef = document.querySelector('#root');

const  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
      contacts: { [event.currentTarget.name]: event.currentTarget.value },
    });
  };
const handleSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.reset();
};
const reset = () => {
  this.setState({ name: '', number: '' });
};

function OrderForm({
  handleBackdropClick,
  closeModal,
  toLogout,
  textContent,
}) {
  return createPortal(
    <div>
      {
        <div className={'backdrop'} onClick={handleBackdropClick}>
          <div className={'modal_content'}>
            <button
              className={'modalCloseBtn'}
              onClick={closeModal}
              type="button"
            >
              <svg className={'modalCloseIcon'} width="12" height="12" />
            </button>
            <p className={'textContent'}>Як зробити замовлення? Дуже просто!</p>
            <form className="OrderForm"  onSubmit={handleSubmit}>
              <lable>
                {' '}
                Name
                <input
                  className="input"
                  // value={this.state.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. 
        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </lable>
              <lable>
                {' '}
                Number
                <input
                  // value={this.state.number}
                  onChange={handleChange}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
        круглые скобки и может начинаться с +"
                  required
                />
              </lable>
              <button type="submit">Залишити заявку</button>
            </form>
            <div className={'btnContainer'}>
              <button className={'btn'} type="button" onClick={toLogout}>
                ДА
              </button>
              <button className={'btn'} onClick={closeModal} type="button">
                НЕТ
              </button>
            </div>
          </div>
        </div>
      }
    </div>,
    modalRootRef,
  );
}

export default OrderForm;


