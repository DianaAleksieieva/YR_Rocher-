import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Catalog from "../Catalog/Catalog";
import About from '../About/About';
import Footer from "../Footer/Footer";
import OrderForm from "../OrderForm/OrderForm";
import CurrentDate from '../CurrentDate/CurrentDate';
import MainPageButtons from '../MainPageButtons/MainPageButtons';


function App() {
  const [currentPage, setCurrentPage] = useState('catalog');
  const [showModal, setShowModal] = useState(false);

  const changePage = (event) => {
    setCurrentPage(event.currentTarget.value);
  };


  const switchModalState = () => {
    setShowModal(!showModal);
  };

   useEffect(() => {
    if (showModal) {
      document.body.style.position = 'fixed';
    }
  }, [showModal]);

    return (
      <div className="App">
        <Header
          value={currentPage}
          onClick={changePage}
          showModal={switchModalState}
        />
        {currentPage === 'catalog'? (
          <>
            <CurrentDate />
            <Catalog />
          </>
        ) : (
          <About />
        )}
        {showModal && <OrderForm closeModal={switchModalState}/>}
        <MainPageButtons showModal={switchModalState} />
        <Footer />
      </div>
    );
  }


export default App;
