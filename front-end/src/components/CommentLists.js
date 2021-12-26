import React from 'react';
import { useContext } from 'react';
import { commentContextData } from '../contexts/CommentsContext';
import CommentItem from './CommentItem';
import './css/Comment_lists.css';

const CommentLists = () => {
   const { state } = useContext(commentContextData);
   const { comments } = state;

   return (
      <main className="main-container">
         <ul className="comment_lists">
            {comments && comments.length > 0 ? (
               comments.map((data) => <CommentItem key={data.id} data={data} />)
            ) : (
               <h1>Loading....</h1>
            )}
         </ul>
         <aside>
            <ul>
               <li>lorem10</li>
               <li>lorem10</li>
               <li>lorem10</li>
               <li>lorem10</li>
            </ul>
         </aside>
         <form>
            <div>
               <label htmlFor="nama">nama</label>
               <input type="text" name="nama" />
            </div>
            <div>
               <label htmlFor="email">nama</label>
               <input type="text" name="email" />
            </div>
            <div>
               <label htmlFor="komentar">nama</label>
               <textarea name="komentar" />
            </div>
            <div>
               <input type="submit" value="Submit" />
               <input type="button" value="Reset" />
            </div>
         </form>
      </main>
   );
};

export default CommentLists;
