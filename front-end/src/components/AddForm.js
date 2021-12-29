import React from 'react';
import AddFormButtons from './AddFormButtons';
import './css/Add_form.css';

const AddForm = () => {
   return (
      <form className="add_form">
         <div className="text-divider">Text divider</div>
         <div className="input_container">
            <label htmlFor="nama" style={{ visibility: 'hidden' }}>
               Nama
            </label>
            <input type="text" name="nama" placeholder="Name" />
         </div>
         <div className="input_container">
            <label htmlFor="email" style={{ visibility: 'hidden' }}>
               Email
            </label>
            <input type="text" name="email" placeholder="Email" />
         </div>

         <div className="input_container">
            <label htmlFor="komentar" style={{ visibility: 'hidden' }}>
               Test
            </label>
            <textarea name="komentar" placeholder="Komentar anda" />
         </div>

         <AddFormButtons />
      </form>
   );
};

export default AddForm;
