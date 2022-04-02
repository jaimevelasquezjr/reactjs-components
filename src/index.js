import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
   return (
      <div className='u container comments'>
         <CommentDetail
            author='Klay'
            image='https://i.pravatar.cc/150?img=14'
         />
         <CommentDetail
            author='Stephen'
            image='https://i.pravatar.cc/150?img=57'
         />
         <CommentDetail
            author='Draymond'
            image='https://i.pravatar.cc/150?img=65'
         />
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));
