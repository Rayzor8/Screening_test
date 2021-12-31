import React from 'react';

const AddFormButtons = ({handleResetButton}) => {
   return (
      <div>
         <input type="submit" value="Submit" />
         <input type="button" value="Reset" onClick={handleResetButton}/>
      </div>
   );
};

export default AddFormButtons;
