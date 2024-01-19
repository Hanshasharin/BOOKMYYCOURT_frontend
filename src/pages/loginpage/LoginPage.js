import React, { useState } from 'react'
import "./LoginPage.css"
import SignUp from '../../components/authorization/SignUp'
import Login from '../../components/authorization/Login'

function LoginPage() {

  const [boxtype,setBoxType]=useState('login')
  return (
    <div className='login_container d-flex justify-content-center align-items-centre'>
   {boxtype==='signup' && <SignUp togglebox={setBoxType}/>  }
   {boxtype==='login' && <Login togglebox={setBoxType}/>  }
    </div>
  )
}

export default LoginPage

