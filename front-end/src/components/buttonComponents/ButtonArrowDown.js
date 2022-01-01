import React, { useContext } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { APIURL } from '../../contexts/CommentsContext';
import axios from 'axios';
import { commentContextData } from '../../contexts/CommentsContext';
import './css/Button_arrow.css'

const ButtonArrowDown = ({ data, doneUpdate, setDoneUpdate }) => {
   const { dispatch } = useContext(commentContextData);

   const handleEdit = async (id) => {
      const updatePost = { ...data, point: data.point + -1 };
      await axios.put(`${APIURL}/${id}`, updatePost);
      dispatch({ type: 'UPDATE_COMMENT', payload: { id, updatePost } });
   };
   return (
      <>
         <button
            onClick={() => handleEdit(data.id)}
            style={doneUpdate ? { backgroundColor: 'green' } : null}
            disabled={doneUpdate}
            className='button_container'
         >
            <FaArrowDown />
         </button>
      </>
   );
};

export default ButtonArrowDown;
