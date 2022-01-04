export const commentsReducer = (state, action) => {
   if (action.type === 'FETCH_COMMENTS')
      return { ...state, comments: action.payload.comments };

   if (action.type === 'UPDATE_COMMENT') {
      return {
         ...state,
         comments: state.comments.map((comment) =>
            comment.id === action.payload.id
               ? action.payload.updatePost
               : comment
         ),
      };
   }

   if (action.type === 'UPDATE_REPLY') {
      return {
         ...state,
         comments: state.comments.map((comment) =>
            comment.id === action.payload.id
               ? {
                    ...comment,
                    replies: comment.replies.map((reply) =>
                       reply.id === action.payload.dataId
                          ? action.payload.updateReply.replies.find(
                               (el) => el.id === action.payload.dataId
                            )
                          : reply
                    ),
                 }
               : comment
         ),
      };
   }

   if (action.type === 'TOGGLE_LOGIN')
      return { ...state, loginModal: !state.loginModal };

   if (action.type === 'TOGGLE_REGISTER')
      return { ...state, registerModal: !state.registerModal };

   return state;
};
