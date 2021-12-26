import React from 'react';
import './css/Comment_item.css';

const CommentItem = ({ data }) => {
   console.log(data.replies);
   return (
      <li>
         <div className="body-section">
            <img src={data.avatar} alt="avatar" className="img" />
            <div>
               <h1>{data.author}</h1>
               <p>{data.date}</p>
               <p>{data.message}</p>
            </div>
         </div>
         <div className="card-cta">
            <p>{data.point} Point</p>
            <button>Up</button>
            <button>Down</button>
         </div>
         {data.replies.length > 0 &&
            data.replies.map(el => (
               <div key={el.id} className='msg-section'>
                  <h1>{el.author}</h1>
                  <p>{el.date}</p>
                  <p>{el.message}</p>
               </div>
            ))}
      </li>
   );
};

export default CommentItem;
