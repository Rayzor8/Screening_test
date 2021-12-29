import React, { useContext} from 'react';
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
            <div>My Register Modal</div>
            <button onClick={toggleModal}>Close modal</button>
         </Modal>
      </div>
   );
};

export default RegisterModal;
