import "./Footer.css";
import '../App/App.css';

function Footer() {
  return (
    <div className="footer container">
      <div className="contacts-info">
        <div className="contact-info-item">
          <p>Customer service</p>
          <tell>1 888 909-0771</tell>
          <p className="contact-info-small-text">
            Monday to Friday 8:00 am to 9:00 pm (EST) Saturday 9:00 am to 7:00
            pm (EST)
          </p>
        </div>
        <div className="contact-info-item contact-info-small-text contact-info-mail">
          Send an E-MAIL You would like get information about your current
          order, exchange a product or verify an invoice, in a timely
          fashion...? You wish to obtain additional advice on how to use a
          cream, a lotion, or our makeup products...? Get in touch with our Yves
          Rocher customer service department: email us at
          customer_services@yrnet.com, specify the subject of your message and
          enter your contact details (name, address, customer number), we will
          process your request and respond quickly.
        </div>
      </div>
      <p className="contact-info-small-text copyright">
        © 2022 Yves Rocher - Creator of Botanical Beauty since 1959{' '}
      </p>
    </div>
  );
}

export default Footer;
