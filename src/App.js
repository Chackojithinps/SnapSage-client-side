import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import UserRouter from './Router/UserRouter';
import toast, { Toaster } from 'react-hot-toast'
import VendorRouter from './Router/VendorRouter';

function App() {
  return (
   <div>
      <Toaster className="mx-10"
  position="top-center"
  reverseOrder={false}
/>
      <Router>
         <Routes>
            <Route path='/*' element={<UserRouter/>}/>
            <Route path='/admin*' element={<UserRouter/>}/>
            <Route path='/vendor*' element={<VendorRouter/>}/>

         </Routes>
      </Router>
   </div>
  );
}

export default App;
