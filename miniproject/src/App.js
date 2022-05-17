import { useState } from 'react';
import Modal from './components/Commons/Modal'
import Modal2 from './components/Commons/Modal2'
import Planets from './components/Planets/Planets'
import Main from './Layout/Main'
import Calculator from './components/Commons/Calculator';
import Header from './Layout/Header';
import Section from './Layout/Section';
import classess from './App.module.css';

const App = () => {

  const [modalOpen, setmodalOpen] = useState(false);


  const [modalOpen1, setmodalOpen2] = useState(false);


  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  }


  const openModa12 = () => {
    setmodalOpen2(true);
  };

  const closeModal2 = () => {
    setmodalOpen2(false);
  }


  return (
    <>

      <Header />
      
      <Main>
        <Modal open={modalOpen} close={closeModal} header=" Solar System">
          <Planets />
          {/* Modal.jsx <main> {props.children} </main>에 내용이 입력된다. 리액트 함수형 모달 */}
        </Modal>
        <div className={classess.btn_area}>
          <button className={classess.btn1} onClick={openModa12}>Weight Change</button>
          <button className={classess.btn2} onClick={openModal}>Solar System Info</button>
        </div>
        <Modal2 open={modalOpen1} close={closeModal2} header="Weight Change">
          <Calculator />
        </Modal2>
        <Section />
      </Main>


    </>
  );

}
export default App;

