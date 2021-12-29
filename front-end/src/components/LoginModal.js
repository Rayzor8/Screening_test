import React, { useContext } from 'react';
import Modal from 'react-modal';
import { commentContextData } from '../contexts/CommentsContext';
import './css/Login_modal.css';

const LoginModal = () => {
   const { state, dispatch } = useContext(commentContextData);
   function toggleModal() {
      dispatch({ type: 'TOGGLE_LOGIN' });
   }

   Modal.setAppElement('#root');
   return (
      <div>
         <Modal
            isOpen={state.loginModal}
            onRequestClose={toggleModal}
            contentLabel="My Login Modal"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
         >
            <div>My Login Modal</div>
            <button onClick={toggleModal}>Close modal</button>
         </Modal>
      </div>
   );
};

export default LoginModal;
