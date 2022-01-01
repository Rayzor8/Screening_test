import React from 'react';
import ButtonArrowDown from './buttonComponents/ButtonArrowDown';
import ButtonArrowUp from './buttonComponents/ButtonArrowUp';
import './css/Comment_item.css';

const CommentItem = ({ data }) => {
   const [doneUpdate, setDoneUpdate] = React.useState(false);
   return (
      <li className="comment_item">
         <div className="body-section">
            <img src={data.avatar} alt="avatar" className="img" />
            <div>
               <h1>{data.author}</h1>
               <p>{data.date}</p>
               <p>{data.message}</p>
            </div>
         </div>
         <section className='comment_section'>
            <div className="card-cta">
               <p>{data.point} Point</p>
               <ButtonArrowUp
                  data={data}
                  doneUpdate={doneUpdate}
                  setDoneUpdate={setDoneUpdate}
               />
               <ButtonArrowDown
                  data={data}
                  doneUpdate={doneUpdate}
                  setDoneUpdate={setDoneUpdate}
               />
            </div>
            {data.replies.length > 0 &&
               data.replies.map((el) => (
                  <div key={el.id} className="msg-section">
                     <img src={el.avatar} alt="" className="img-avatar" />
                     <div className='msg_data_container'>
                        <h1>{el.author}</h1>
                        <p>{el.date}</p>
                        <p>{el.message}</p>
                        <div className="msg-cta">
                           <p>{el.point} point</p>
                           <ButtonArrowUp
                              data={el}
                              doneUpdate={doneUpdate}
                              setDoneUpdate={setDoneUpdate}
                           />
                           <ButtonArrowDown
                              data={el}
                              doneUpdate={doneUpdate}
                              setDoneUpdate={setDoneUpdate}
                           />
                        </div>
                     </div>
                  </div>
               ))}
         </section>
      </li>
   );
};

export default CommentItem;
