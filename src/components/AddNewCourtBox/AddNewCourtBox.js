
import React, { useState } from 'react';
import axios from 'axios';
function AddNewCourtBox() {
      const [courtData , setCourtData] = useState({
             courtname:'',
             location:'',
             adress:'',
             mobilenumber:'',
            description:'',
               })

             const [selectedImage,setSelectedimage]=useState('')
            const [courtPic,setCourtPic]=useState('')
             const handleChange=(e)=>{
               console.log(e)
              setCourtData({...courtData,[e.target.name]:e.target.value})
             }
const imageChange =(e)=>{
      
 setCourtPic(e.target.files[0])

  e.target.files[0] ? setSelectedimage(URL.createObjectURL(e.target.files[0])) : setSelectedimage(null);

}

const createCourt=()=>{
let fileData= new FormData()
fileData.append('image',courtPic)


 axios.post(`${process.env.REACT_APP_BE_URL}/admin/createCourt`,fileData,{params:courtData},{headers:{"Content-type":'multipart/form-data'}}).then((res)=>{

}).catch((err)=>{
console.log(err)
})
}
  return (
    <>
    <div className='p-2 border border-1 rounded-1 d-flex flex-column p-3 '>
      
<span className='mt-2'><label htmlFor="">Court Name</label>
      <input type="text" name='courtname' value={courtData.courtname} onChange={handleChange}/></span>
<span className='mt-2'><label htmlFor="">Location</label>
      <input type="text" name='location'value={courtData.location} onChange={handleChange} /></span>
<span className='mt-2'><label htmlFor="">Adress</label>
      <input type="text" name='adress'value={courtData.adress}onChange={handleChange} /></span>
<span className='mt-2'><label htmlFor="">Mobile Number</label>
      <input type="text" name='mobilenumber'value={courtData.mobilenumber} onChange={handleChange}/></span>
 <span className='mt-2' ><label htmlFor="">Description</label>
    <textarea  name='description'value={courtData.description} onChange={handleChange}></textarea>

</span>
<span className='mt-2' ><label htmlFor="">Court Image</label>
              
              <input type='file' onChange={imageChange}/>
        
        </span>  
      
      
      {selectedImage && <img src={selectedImage} alt='' width={100} height={100}/>}
      





    </div>
<button onClick={createCourt}>Create</button>
    </>
  )
}

export default AddNewCourtBox
