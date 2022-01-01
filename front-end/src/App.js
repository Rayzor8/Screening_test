import CommentLists from './components/CommentLists';
import CommentsContext from './contexts/CommentsContext';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

function App() {
   return (
      <CommentsContext>
         <div className="App">
            <Header />
            <LoginModal />
            <RegisterModal />
            <CommentLists />
         </div>
      </CommentsContext>
   );
}

export default App;
