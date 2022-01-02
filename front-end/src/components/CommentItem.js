import React from 'react';
import ButtonArrowDown from './buttonComponents/ButtonArrowDown';
import ButtonArrowUp from './buttonComponents/ButtonArrowUp';
import './css/Comment_item.css';

const CommentItem = ({ data }) => {
   const [doneUpdateCommentUp, setDoneUpdateCommentUp] = React.useState(false);
   const [doneUpdateReplyUp, setDoneUpdateReplyUp] = React.useState(false);
   const [doneUpdateCommentDown, setDoneUpdateCommentDown] = React.useState(false);
   const [doneUpdateReplyDown, setDoneUpdateReplyDown] = React.useState(false);
    
   return (
      <li className="comment_item">
         <div className="body-section">
            <img src={data.avatar} alt="avatar" className="img" />
            <div>
               <h2>{data.author}</h2>
               <p>{data.date}</p>
               <p>{data.message}</p>
            </div>
         </div>
         <section className='comment_section'>
            <div className="card-cta">
               <p className='point'>{data.point} Point</p>
               <ButtonArrowUp
                  data={data}
                  doneUpdate={doneUpdateCommentUp}
                  setDoneUpdate={setDoneUpdateCommentUp}
                  disable={doneUpdateCommentDown}
                  buttonType={'comment'}
               />
               <ButtonArrowDown
                  data={data}
                  doneUpdate={doneUpdateCommentDown}
                  setDoneUpdate={setDoneUpdateCommentDown}
                  disable={doneUpdateCommentUp}
                  buttonType={'comment'}
               />
            </div>
            {data.replies.length > 0 &&
               data.replies.map((el) => (
                  <div key={el.id} className="msg-section">
                     <img src={el.avatar} alt="" className="img-avatar" />
                     <div className='msg_data_container'>
                        <h2>{el.author}</h2>
                        <p>{el.date}</p>
                        <p>{el.message}</p>
                        <div className="msg-cta">
                           <p className='point'>{el.point} point</p>
                           <ButtonArrowUp
                              dataId={data.id}
                              data={el}
                              doneUpdate={doneUpdateReplyUp}
                              setDoneUpdate={setDoneUpdateReplyUp}
                              buttonType={'reply'}
                           />
                           <ButtonArrowDown
                              dataId={data.id}
                              data={el}
                              doneUpdate={doneUpdateReplyDown}
                              setDoneUpdate={setDoneUpdateReplyDown}
                              buttonType={'reply'}
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
