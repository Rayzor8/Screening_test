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
            <div className="form_container">
               <button className="close_button" onClick={toggleModal}>
                  X
               </button>
               <h3>Login</h3>
               <div className="input_container">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
               </div>
               <div className="input_container">
                  <label htmlFor="password">Password</label>
                  <input type="password" />
               </div>
               <button className="login_button">Login</button>
            </div>
         </Modal>
      </div>
   );
};

export default LoginModal;
