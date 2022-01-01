import React from 'react';
import './css/Add_form_button.css'

const AddFormButtons = ({handleResetButton}) => {
   return (
      <div className="add_form_button_container">
         <input type="button" value="Reset" onClick={handleResetButton}/>
         <input type="submit" value="Submit" />
      </div>
   );
};

export default AddFormButtons;
