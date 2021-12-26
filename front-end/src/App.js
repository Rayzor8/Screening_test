import './App.css';
import CommentLists from './components/CommentLists';
import CommentsContext from './contexts/CommentsContext';

function App() {
   return (
      <CommentsContext>
         <div className="App">
            <CommentLists/>
         </div>
      </CommentsContext>
   );
}

export default App;
