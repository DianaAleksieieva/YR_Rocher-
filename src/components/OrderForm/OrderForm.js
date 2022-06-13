import OrderRequest from './OrderRequest.js';

import HowOrder from './HowOrder'
import './OrderForm.css';
import { createPortal } from 'react-dom';
const modalRootRef = document.querySelector('#root');

function OrderForm({ handleBackdropClick, closeModal }) {
  return createPortal(
    <div className={'backdrop'} onClick={handleBackdropClick}>
      <div className={'modal_content'} >
        <button className={'modalCloseBtn'} onClick={closeModal} type="button">
          <svg className={'modalCloseIcon'} width="12" height="12" />
        </button>
        <HowOrder />
        <OrderRequest />
      </div>
    </div>,
    modalRootRef,
  );
}

export default OrderForm;
