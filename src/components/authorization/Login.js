import React, { useState } from 'react';
import axios from 'axios'; // Add this import statement
import "./Authorization.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../toolkit/userSlice';
// import HomePage from '../../pages/HomePage/HomePage';




function Login({togglebox}) {

    const [logCre , setLogCre] = useState({
          
          email:'',
          password:'', 
        })

        const navigate = useNavigate()
        const dispatch = useDispatch()

        const handleChange=(e)=>{
          console.log(e)
          setLogCre({...logCre,[e.target.name]:e.target.value})
        }

        const doLogin= () => {

            axios.post(`${process.env.REACT_APP_BE_URL}/auth/login`,logCre).then((res)=>{

              if(res.data.message==='login successful '){

              localStorage.setItem('token',res.data.token)
               dispatch(setUser(res.data.userDetails))
              navigate('/home')
              }
           
            })
            .catch((res)=>{
             
              if(res.response.data.message==='login failed'){
                alert(res.response.data.message)
              }else{
                alert('something went wrong')
              }
            })
        }


  return (
    <div>
     <div  className='signup_box d-flex flex-column p-3 m-3'>

        <h3 className='text-center'>login</h3>
      
      <label htmlFor="">email</label>
      <input type="email" name='email' value={logCre.email} onChange={handleChange} />
      
      <label htmlFor="">Pasword</label>
      <input type="password" name='password' value={logCre.password} onChange={handleChange} />
     
      <button className='btn btn-primary mt-3' onClick={doLogin}>submit</button>

      <p>not a registered user..? <i onClick={()=>togglebox('signup')}>signup</i></p>
    </div> 
    </div>
  )
}




export default Login
