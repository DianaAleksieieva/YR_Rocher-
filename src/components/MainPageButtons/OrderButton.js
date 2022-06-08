import './PageButtons.css';
import '../App/App.css';

function OrderButton({ showModal }) {
  return (
    <button className="MainButton " onClick={showModal}>
      Зробити замовлення
    </button>
  );
}

export default OrderButton;
