import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import UserRouter from './Router/UserRouter';

function App() {
  return (
   <div>
      <Router>
         <Routes>
            <Route path='/*' element={<UserRouter/>}/>
         </Routes>
      </Router>
   </div>
  );
}

export default App;
