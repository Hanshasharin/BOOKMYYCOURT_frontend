
import './App.css';
import CourtDetails from './pages/CourtDetails/CourtDetails';
import HomePage from './pages/HomePage/HomePage';
import AddNewCourt from './pages/NewCourt/AddNewCourt';
import LoginPage from './pages/loginpage/LoginPage';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
// Example import statement in app.js





function App() {
  return (
    
<BrowserRouter>

<Routes>
<Route path='/' element= {<LoginPage/>}/>
<Route path='/home' element= {<HomePage/>}> </Route>
 <Route path='/addNewCourt' element= {<AddNewCourt/>}></Route> 
 <Route path='/CourtDetails/:id' element= {<CourtDetails/>}></Route> 
</Routes>

</BrowserRouter>



 
  );
}

export default App;
