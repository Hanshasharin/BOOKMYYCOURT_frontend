import React, { useEffect, useState } from 'react'
import "./Authorization.css"
import axios from 'axios'


function SignUp({togglebox}) {
// const [signUpdata , setSignupData] = useState({
//   name:'',
//   email:'',
// //   phone:'',
// //   password:'',
  
// })
// const handleChange=(e)=>{
//   console.log(e)
//   setSignupData({name:e.target.value})
// }

const [name,setName]= useState("")
const [email,setMail]= useState("")
const [phone,setPhone]= useState("")
const [password,setPassword]= useState("")
const [confirmpassword,setConfirmPassword]=useState("")


const handlename=(e)=>{
  console.log(e)
  setName(e.target.value)
}
const handleemail=(e)=>{
  console.log(e)
  setMail(e.target.value)
}
const handlePhone=(e)=>{
  console.log(e)
  setPhone(e.target.value)
}
const handlePassword=(e)=>{
  console.log(e)
  setPassword(e.target.value)
}
const handleConfirmPassword=(e)=>{
  console.log(e)
  setConfirmPassword(e.target.value)
}
useEffect(()=>{
  console.log(name,email.phone,password)
},[name,email,phone,password])

const doSignUp = () => {

axios.post('http://localhost:5000/auth/signup',{name,email,phone,password}).then((res)=>{

})
.catch((err=>{
console.log(err)
}))
}

  return (
    <div  className='signup_box d-flex flex-column p-3  m-3'>
        <h3 className='text-center'>signup</h3>
      <label htmlFor="">Name</label>
      <input name='name' type="text" value={name} onChange={handlename}/>
      <label htmlFor="">email</label>
      <input type="email" name='email' value={email} onChange={handleemail} />
      <label htmlFor="">phone</label>
      <input type="number" name='phone' value={phone} onChange={handlePhone}/>
      <label htmlFor="">Pasword</label>
      <input type="password"name='password' value={password} onChange={handlePassword} />
      <label htmlFor="">Pasword</label>
      <input type="password"name='confirmpassword' value={confirmpassword} onChange={handleConfirmPassword} />
      <button className='btn btn-primary mt-3' onClick={doSignUp}>submit</button>

     <p>already signup, then <i onClick={()=>togglebox('login')}>login</i></p>

    </div>
  )
}

export default SignUp
