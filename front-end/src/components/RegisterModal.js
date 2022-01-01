import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { commentContextData } from '../contexts/CommentsContext';
import './css/Register_modal.css';

const RegisterModal = () => {
   const { state, dispatch } = useContext(commentContextData);

   function toggleModal() {
      dispatch({ type: 'TOGGLE_REGISTER' });
   }

   const [formRegisterData, setFormRegisterData] = useState({
      name: '',
      email: '',
      password: '',
   });

   const { name, email, password } = formRegisterData;

   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
   const [borderError, setBorderError] = useState(false);

   const borderStyle = (formErrors) => {
      if (!borderError) return { border: '1px solid black' };
      if (formErrors && borderError) {
         return { border: '1px solid red' };
      } else {
         return { border: '1px solid green' };
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormRegisterData({ ...formRegisterData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formRegisterData));
      setIsSubmit(true);
   };

   useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         document.location.reload();
      }
   }, [formErrors,isSubmit]);

   const validate = (values) => {
      const errorValidate = {};
      if (!values.name) {
         errorValidate.name = 'Name is required';
         setBorderError(true);
      } else if (values.name.length < 4) {
         errorValidate.name = 'Name must be more than 3 characters';
         setBorderError(true);
      }

      if (!values.email) {
         errorValidate.email = 'Email is required';
         setBorderError(true);
      }
      if (!values.password) {
         errorValidate.password = 'Password is required';
         setBorderError(true);
      }
      return errorValidate;
   };

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
               <form onSubmit={handleSubmit}>
                  <button className="close_button" onClick={toggleModal} type='button'>
                     X
                  </button>
                  <h3 className='form_title'>Register</h3>
                  <div className="input_container">
                     <label htmlFor="name">Name</label>
                     <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        style={borderStyle(formErrors.name)}
                     />
                       <small>{formErrors.name}</small>
                  </div>
                  <div className="input_container">
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        style={borderStyle(formErrors.email)}
                     />
                       <small>{formErrors.email}</small>
                  </div>
                  <div className="input_container">
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        style={borderStyle(formErrors.password)}
                     />
                       <small>{formErrors.password}</small>
                  </div>
                  <button className="login_button" type='submit'>Create Account</button>
               </form>
            </div>
         </Modal>
      </div>
   );
};

export default RegisterModal;
