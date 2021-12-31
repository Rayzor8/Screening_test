import React, { useEffect, createContext, useReducer } from 'react';
import { commentsReducer } from '../reducers/commentsReducer';
import axios from 'axios';
import { formsReducer } from '../reducers/formsReducer';

export const commentContextData = createContext();
export const APIURL = 'http://localhost:3100/comments';

let initialState = {
    comments:[],
    loginModal:false,
    registerModal:false
}

let formInitialState = {}

const CommentsContext = ({ children }) => {
   const [state, dispatch] = useReducer(commentsReducer, initialState);
   const [forms,formsDispatch] = useReducer(formsReducer,formInitialState)
   console.log(state)

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

   return (
      <commentContextData.Provider value={{ state ,dispatch,forms,formsDispatch}}>
         {children}
      </commentContextData.Provider>
   );
};

export default CommentsContext;
