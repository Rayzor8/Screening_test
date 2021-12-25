import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
   const APIURL = 'http://localhost:3100/comments';
   const [comments, setComments] = useState([]);
   const [errorLoad, setErrorLoad] = useState(false);
   console.log(comments);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const result = await axios(APIURL);
            setComments(result.data);
         } catch {
            console.log('error');
         }
      };
      fetchData();
   }, []);

   return (
      <div className="App">
         <ul>
            {comments && comments.length > 0 ? (
               comments.map((data) => (
                  <li key={data.id}>
                     <h1>{data.author}</h1>
                  </li>
               ))
            ) : (
               <h1>Loading....</h1>
            )}
         </ul>
      </div>
   );
}

export default App;
