import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
   return (
      <div className='ui container comments'>
         <ApprovalCard>
            <CommentDetail
               author='Klay'
               image='https://i.pravatar.cc/150?img=14'
               timePosted='Today at 6:00PM'
               message='Nice blog post!'
            />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail
               author='Stephen'
               image='https://i.pravatar.cc/150?img=57'
               timePosted='Today at 7:45PM'
               message='Great content!'
            />
         </ApprovalCard>

         <ApprovalCard>
            <CommentDetail
               author='Draymond'
               image='https://i.pravatar.cc/150?img=65'
               timePosted='Today at 8:01PM'
               message='Your solution helps me a lot'
            />
         </ApprovalCard>
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));
