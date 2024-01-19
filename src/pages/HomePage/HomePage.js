import React, { useEffect } from 'react'
 import MainNavBar from '../../components/NavBar/MainNavBar'
 import axiosInstance from '../../config/AxiosInstance'
 import axios from 'axios'
// import "./HomePage.css"


function HomePage() {

useEffect(()=>{
  getCourtsData()
},[])
const getCourtsData=()=>{
  // axios.get(`${process.env.REACT_APP_BE_URL}/user/getCourtsData`).then((res)=>{})
  axiosInstance.get('users/getCourtsData').then((res)=>{})
  .catch((err)=>{
    console.log('err')

  })
}





  return ( 
    <>
     <MainNavBar/> 
    </>
  )
}

export default HomePage
