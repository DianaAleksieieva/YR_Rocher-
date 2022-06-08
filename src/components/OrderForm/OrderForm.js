import "./OrderForm.css";
import React from 'react';
import { createPortal } from 'react-dom';
const modalRootRef = document.querySelector('#root');


function OrderForm({
  handleBackdropClick,
  closeModal,
  toLogout,
  textContent,
}) {
  return createPortal(
    <div className="OrderForm">
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


