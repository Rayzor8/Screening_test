import React, { useEffect, createContext, useReducer } from 'react';
import { commentsReducer } from '../reducers/commentsReducer';
import axios from 'axios';

export const commentContextData = createContext();
const APIURL = 'http://localhost:3100/comments';

let initialState = {
    comments:[],
    toggle:false
}

const CommentsContext = ({ children }) => {
   const [state, dispatch] = useReducer(commentsReducer, initialState);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await axios(APIURL);
            dispatch({ type: 'FETCH_COMMENTS', payload: {comments:result.data}});
         } catch {
            console.log('error');
         }
      };
      fetchData();
   }, []);

  console.log(state)
   return (
      <commentContextData.Provider value={{ state }}>
         {children}
      </commentContextData.Provider>
   );
};

export default CommentsContext;
