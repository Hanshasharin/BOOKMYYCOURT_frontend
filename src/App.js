
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/loginpage/LoginPage';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
function App() {
  return (
    
<BrowserRouter>

<Routes>
<Route path='/' element= {<LoginPage/>}/>
<Route path='/home' element= {<HomePage/>}>

</Route>
</Routes>

</BrowserRouter>



 
  );
}

export default App;
