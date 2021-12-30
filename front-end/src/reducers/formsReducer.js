export const formsReducer = (state, action) => {
   console.log(action)
   if (action.type === 'FORM_COMMENT'){
      return {
         ...state,
         commentForm:action.payload
      }
   }
   return state;
};
