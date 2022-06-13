import './OrderForm.css';
import PhoneSVG from '../../images/Picto_telephone.svg';
import InternetSVG from '../../images/Picto_Internet.svg';

function HowOrder() {
    return (
      <>
        <div className="how-to-order-block">
          <p className="how-order-capture">Як зробити замовлення?</p>
          <p className="how-order-capture">Дуже просто!</p>
          <div className="how-to-order-info">
            <div className="info-block">
              <img className="ico" alt="Phone" src={PhoneSVG}></img>
              <div className="how-to-order-text-item">
                <span className="text-in-bold">За телефоном: </span>
                <a href="tel:044 461-04-04" className="phone-number">
                  (044) 461-04-04
                </a>
                <p className="contact-info-small-text">
                  з 8:00 до 22:00 з понеділка по суботу та в неділю з 10:00 до
                  20:00
                </p>
              </div>
              <div className="phones-numers">
                <a className="phone-number" href="tel:0680400404">
                  (068) 040 04 04
                </a>
                <a className="phone-number" href="tel:06304044">
                  (063) 461 04 04
                </a>
                <a className="phone-number" href="tel:0665610404">
                  (066) 461 04 04
                </a>
              </div>
            </div>
            <div className="info-block">
              <img className="ico" alt="Internet" src={InternetSVG}></img>
              <div className="how-to-order-text">
                <div className="how-to-order-text-item">
                  <span className="text-in-bold">
                    В інтернеті: за посиланням:
                  </span>
                  <a className="contact-link" href="www.yves-rocher.ua/zakaz">
                    www.yves-rocher.ua/zakaz
                  </a>
                </div>
                <div className="how-to-order-text-item">
                  <span className="text-in-bold">В чаті на сайті: </span>
                  <a className="contact-link" href="www.yves-rocher.ua/zakaz">
                    www.yves-rocher.ua
                  </a>
                </div>
                <div className="how-to-order-text-item">
                  <span className="text-in-bold">
                    Через Facebook Messenger:{' '}
                  </span>
                  <a className="contact-link" href="m.me/yvesrocherua">
                    www.yves-rocher.ua
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="or">АБО</div>
        </div>
      </>
    );
}

export default HowOrder;
