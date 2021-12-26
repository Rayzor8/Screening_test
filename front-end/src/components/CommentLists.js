import React from 'react';
import { useContext } from 'react';
import { commentContextData } from '../contexts/CommentsContext';

const CommentLists = () => {
   const { state } = useContext(commentContextData);
   const { comments } = state;

   return (
      <div>
         <ul>
            {comments && comments.length > 0 ? (
               comments.map((data) => (
                  <li key={data.id}>
                     <h1>{data.author}</h1>
                  </li>
               ))
            ) : (
               <h1>Loading....</h1>
            )}
         </ul>
      </div>
   );
};

export default CommentLists;
