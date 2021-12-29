import React, { useContext } from 'react';
import Modal from 'react-modal';
import { commentContextData } from '../contexts/CommentsContext';
import './css/Register_modal.css';

const RegisterModal = () => {
   const { state, dispatch } = useContext(commentContextData);

   function toggleModal() {
      dispatch({ type: 'TOGGLE_REGISTER' });
   }

   Modal.setAppElement('#root');
   return (
      <div>
         <Modal
            isOpen={state.registerModal}
            onRequestClose={toggleModal}
            contentLabel="My Register Modal"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
         >
            <div className="form_container">
               <button className="close_button" onClick={toggleModal}>
                  X
               </button>
               <h3>Register</h3>
               <div className="input_container">
                  <label htmlFor="name">Name</label>
                  <input type="text" />
               </div>
               <div className="input_container">
                  <label htmlFor="email">Email</label>
                  <input type="email" />
               </div>
               <div className="input_container">
                  <label htmlFor="password">Password</label>
                  <input type="password" />
               </div>
               <button className="login_button">Create Account</button>
            </div>
         </Modal>
      </div>
   );
};

export default RegisterModal;
