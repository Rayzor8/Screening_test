import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { APIURL } from '../../contexts/CommentsContext';
import axios from 'axios';
import { commentContextData } from '../../contexts/CommentsContext';
import './css/Button_arrow.css';

const ButtonArrowUp = ({
   data,
   doneUpdate,
   setDoneUpdate,
   disable,
   buttonType,
   dataId,
}) => {
   const { dispatch } = useContext(commentContextData);

   const handleEdit = async (id) => {
      const updatePost = { ...data, point: data.point + 1 };

      if (buttonType === 'comment') {
         await axios.put(`${APIURL}/${id}`, updatePost);
         dispatch({ type: 'UPDATE_COMMENT', payload: { id, updatePost } });
         setDoneUpdate(true);
      } else {
         const updateReply = {
            ...data,
            replies: data.replies.map((reply) => {
               if (reply.id === dataId) {
                  return { ...reply, point: reply.point + 1 };
               }
               return reply;
            }),
         };
         await axios.put(`${APIURL}/${id}`, updateReply);

         dispatch({
            type: 'UPDATE_REPLY',
            payload: { id, updateReply, dataId },
         });
         setDoneUpdate(true);
      }
   };

   return (
      <>
         <button
            onClick={() => handleEdit(data.id)}
            style={
               doneUpdate ? { backgroundColor: 'green', color: 'white' } : null
            }
            disabled={doneUpdate || disable}
            className="button_container"
         >
            <FaArrowUp />
         </button>
      </>
   );
};

export default ButtonArrowUp;
