import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { APIURL } from '../../contexts/CommentsContext';
import axios from 'axios';
import { commentContextData } from '../../contexts/CommentsContext';
import './css/Button_arrow.css'

const ButtonArrowUp = ({ data, doneUpdate, setDoneUpdate,disable,buttonType,dataId}) => {
   const { dispatch } = useContext(commentContextData);
   const handleEdit = async (id) => {
      const updatePost = { ...data, point: data.point + 1 };
      console.log(`${APIURL}/${id}`)
      console.log(updatePost)
      if(buttonType === 'comment'){
      
         await axios.put(`${APIURL}/${id}`, updatePost);
         dispatch({ type: 'UPDATE_COMMENT', payload: { id, updatePost } });
         setDoneUpdate(true);
      }
      
   };

   return (
      <>
         <button
            onClick={() => handleEdit(data.id)}
            style={doneUpdate ? { backgroundColor: 'green' ,color:'white'} : null}
            disabled={doneUpdate || disable}
            className='button_container'
         >
            <FaArrowUp />
         </button>
      </>
   );
};

export default ButtonArrowUp;
