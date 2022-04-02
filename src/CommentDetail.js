import React from 'react';

const CommentDetail = (props) => {
   //console.log(props);
   return (
      <div className='comment'>
         <a href='/' className='avatar'>
            <img alt='avatar' src={props.image} />
         </a>
         <div className='content'>
            <a href='/' className='author'>
               {props.author}
            </a>
            <div className='metadata'>
               <span className='date'> {props.timePosted} </span>
            </div>
            <div className='text'> {props.message} </div>
         </div>
      </div>
   );
};

export default CommentDetail;
