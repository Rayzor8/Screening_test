import React, { useContext, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { commentContextData } from '../contexts/CommentsContext';
import './css/Login_modal.css';

const LoginModal = () => {
   const { state, dispatch } = useContext(commentContextData);
   function toggleModal() {
      dispatch({ type: 'TOGGLE_LOGIN' });
   }

   const [formLoginData, setFormLoginData] = useState({
      email: '',
      password: '',
   });

   const { email, password } = formLoginData;

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
      setFormLoginData({ ...formLoginData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formLoginData));
      setIsSubmit(true);
   };

   useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         document.location.reload();
      }
   }, [formErrors,isSubmit]);

   const validate = (values) => {
      const errorValidate = {};
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
            isOpen={state.loginModal}
            onRequestClose={toggleModal}
            contentLabel="My Login Modal"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={500}
         >
            <div className="form_container">
               <form onSubmit={handleSubmit}>
                  <button className="close_button" onClick={toggleModal} type='button'>
                     X
                  </button>
                  <h3 className='form_title'>Login</h3>
                  <div className="input_container">
                     <label htmlFor="email">Email</label>
                     <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        style={borderStyle(formErrors.email)}
                     />
                     <small>{formErrors.email}</small>
                  </div>
                  <div className="input_container">
                     <label htmlFor="password">Password</label>
                     <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        style={borderStyle(formErrors.password)}
                     />
                     <small>{formErrors.password}</small>
                  </div>
                  <button className="login_button" type="submit">
                     Login
                  </button>
               </form>
            </div>
         </Modal>
      </div>
   );
};

export default LoginModal;
