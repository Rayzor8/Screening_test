export const commentsReducer = (state, action) => {
   if (action.type === 'FETCH_COMMENTS')
      return { ...state, comments: action.payload.comments };

   if (action.type === 'TOGGLE_LOGIN')
      return { ...state, loginModal: !state.loginModal };

   if (action.type === 'TOGGLE_REGISTER')
      return { ...state, registerModal: !state.registerModal };

   return state;
};
