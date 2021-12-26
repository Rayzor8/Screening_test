export const commentsReducer = (state, action) => {
   if (action.type === 'FETCH_COMMENTS') {
      return {...state, comments: action.payload.comments};
   }
};
