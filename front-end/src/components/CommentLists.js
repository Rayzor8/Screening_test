import React from 'react';
import { useContext } from 'react';
import { commentContextData } from '../contexts/CommentsContext';
import AddForm from './AddForm';
import ArticleSection from './ArticleSection';
import AsideSection from './AsideSection';
import CommentItem from './CommentItem';
import './css/Comment_lists.css';

const CommentLists = () => {
   const { state } = useContext(commentContextData);
   const { comments } = state;

   return (
         <main className="main-container">
            <section>
               <ArticleSection />
               <ul className="comment_lists">
                  {comments && comments.length > 0 ? (
                     comments.map((data) => (
                        <CommentItem key={data.id} data={data} />
                     ))
                  ) : (
                     <h1>Loading....</h1>
                  )}
               </ul>
            </section>
            <AsideSection />
            <AddForm />
         </main>
   );
};

export default CommentLists;
