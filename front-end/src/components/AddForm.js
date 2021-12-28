import React from 'react';
import './css/Add_form.css';

const AddForm = () => {
   return (
      <form className="add_form">
         <div className="input_container">
            <label htmlFor="nama">Nama</label>
            <input type="text" name="nama" />
         </div>
         <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
         </div>
            
         <div  className="input_container">
             <label htmlFor="komentar" style={{visibility:'hidden'}}>Test</label>
             <textarea name="komentar" />
         </div>

         <div>
            <input type="submit" value="Submit" />
            <input type="button" value="Reset" />
         </div>
      </form>
   );
};

export default AddForm;
