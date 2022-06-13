import './PageButtons.css';
import '../App/App.css';

function OrderButton({ showModal }) {
  return (
    <button className="MainButton btn-main" onClick={showModal}>
      <p className='button-name'>Зробити замовлення</p>
    </button>
  );
}

export default OrderButton;
