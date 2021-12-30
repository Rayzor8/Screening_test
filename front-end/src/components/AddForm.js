import React, { useState, useEffect } from 'react';
import AddFormButtons from './AddFormButtons';
import './css/Add_form.css';

const AddForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      comment: '',
   });
   
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
      setFormData({ ...formData, [name]: value });
   };
   

   const { name, email, comment } = formData;

   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formData));
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
      if (!values.comment) {
         errorValidate.comment = 'Comment is required';
         setBorderError(true);
      }
      return errorValidate;
   };

   return (
      <form className="add_form" onSubmit={handleSubmit}>
         <div className="text-divider">Text divider</div>
         <div className="input_container">
            <label htmlFor="name" style={{ visibility: 'hidden' }}>
               Nama
            </label>
            <input
               style={borderStyle(formErrors.name)}
               type="text"
               name="name"
               placeholder="Name"
               value={name}
               onChange={handleChange}
            />
            <small>{formErrors.name}</small>
         </div>
         <div className="input_container">
            <label htmlFor="email" style={{ visibility: 'hidden' }}>
               Email
            </label>
            <input
               style={borderStyle(formErrors.email)}
               type="text"
               name="email"
               placeholder="Email"
               value={email}
               onChange={handleChange}
            />
            <small>{formErrors.email}</small>
         </div>

         <div className="input_container">
            <label htmlFor="komentar" style={{ visibility: 'hidden' }}>
               Test
            </label>
            <textarea
               style={borderStyle(formErrors.comment)}
               name="comment"
               placeholder="Komentar anda"
               value={comment}
               onChange={handleChange}
            />
            <small>{formErrors.comment}</small>
         </div>

         <AddFormButtons />
      </form>
   );
};

export default AddForm;
