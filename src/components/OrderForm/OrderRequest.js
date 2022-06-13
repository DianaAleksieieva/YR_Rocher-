import './OrderForm.css';
import React, { useState } from 'react';


function OrderRequest({ handleBackdropClick, closeModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        console.log(value);
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      case 'mail':
        setMail(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    console.log(event.currentTarget);
    reset();
  };
  const reset = () => {
    this.setState({ name: '', number: '' });
  };
  return (
    <div className="request-block">
      <p className="send-tequest-capture">
        Залиште заявку і ми Вам зателефонуємо{' '}
      </p>
      <form className="OrderForm" onSubmit={handleSubmit}>
        <div className="inputWrap">
          <lable className="input-lable">
            Ім'я Прізвище
            <input
              className="input"
              value={name}
              onChange={handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Ім'я может складатись лише з букв, апострофа, тире або пробілів."
              required
            />
          </lable>
          <lable>
            Номер телефону
            <input
              className="input"
              value={number}
              onChange={handleChange}
              type="text"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефону повинен складатись з цифер і може містити пробіли, тире, круглі дужки і може починати з +"
              required
            />
          </lable>
          <lable>
            Електронна пошта
            <input
              value={mail}
              className="input"
              onChange={handleChange}
              type="mail"
              name="mail"
              pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
              title="Введіть вашу електронну пошту в форматі mail@mail.com"
              required
            />
          </lable>
        </div>

        <button type="submit" className="btn">
          Залишити заявку
        </button>
      </form>
    </div>
  );
}

export default OrderRequest;
