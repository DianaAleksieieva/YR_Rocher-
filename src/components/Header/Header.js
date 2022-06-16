import "./Header.css";
import '../App/App.css';
import YRLogo from "../../images/yr-logo.svg";

function Header({ onClick, showModal }) {
  return (
    <div className="main-header container">
      <a href="./">
        <img className="yr-logo" alt="Yves Rocher" src={YRLogo}></img>
      </a>

      <nav className="main-navigation">
        <button
          onClick={onClick}
          value={'catalog'}
          className="main-navigation-button"
          href=""
        >
          Каталог
        </button>
        <button
          value={'about'}
          onClick={onClick}
          className="main-navigation-button"
          href=""
        >
          Про нас
        </button>
        <button onClick={showModal} className="main-navigation-button" href="">
          Зробити замовлення
        </button>
      </nav>
    </div>
  );
}

export default Header;