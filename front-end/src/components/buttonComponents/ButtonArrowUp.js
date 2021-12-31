import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { APIURL } from '../../contexts/CommentsContext';
import axios from 'axios';
import { commentContextData } from '../../contexts/CommentsContext';

const ButtonArrowUp = ({ data, doneUpdate, setDoneUpdate }) => {
   const { dispatch } = useContext(commentContextData);

   const handleEdit = async (id) => {
      const updatePost = { ...data, point: data.point + 1 };
      await axios.put(`${APIURL}/${id}`, updatePost);
      dispatch({ type: 'UPDATE_COMMENT', payload: { id, updatePost } });
   };

   return (
      <>
         <button
            onClick={() => handleEdit(data.id)}
            style={doneUpdate ? { backgroundColor: 'green' } : null}
            disabled={doneUpdate}
         >
            <FaArrowUp />
         </button>
      </>
   );
};

export default ButtonArrowUp;
