import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../config/AxiosInstance'
import MainNavBar from "../../components/NavBar/MainNavBar";
import './CourtDetails.css'
import Modal from '../../components/common/Modal';
import { TIMINGS } from '../../constants';

function CourtDetails() {
   const {id}= useParams()
   const [open,setOpen]=useState(false)
   const [slotdata,setSlotData]=useState({})
   useEffect(()=>{
    getCourtDatabyId()
  },[])
   const [court,setCourt]=useState({})
   const [selected,setSelected]=useState([])
   const [filteredslots,setFiltererdslots]=useState(TIMINGS)

   const getCourtDatabyId=()=>{
axiosInstance.get('/users/getCourtDatabyId',{params:{id}}).then((res)=>{
// debugger
setCourt(res.data)
}).catch((err)=>{
    console.log(err);
})

   }
   const openModal=()=>{
  setOpen(true)
}

const selectedSlot=(e)=>{
const slot= TIMINGS.find((element)=>element.id===parseInt(e.target.value))
const filterData = filteredslots.filter((element)=>element.id!==parseInt(e.target.value))
setFiltererdslots(filterData)
// console.log(slot);
setSelected([...selected,slot])

}
const handleSlotData=(e)=>{
setSlotData({...slotdata,[e.target.name]:e.target.value})
}
const createslotsdata=(()=>{
  axiosInstance.post('admin/addtimeslotData',{...slotdata,slot:selected,courtId:id}).then((res)=>{
    setOpen(false)
    alert(res.data)


    
  }).catch((err)=>{
    console.log(err);
  })
})
  return (
    <>
    
    <MainNavBar />
<div className='courtdetails-continer'>
<img src={`${process.env.REACT_APP_BE_URL}/images/${court.courtPic}`}  alt=''/>
<div>
{court.courtname}
</div>
<div className='d-flex justify-content-end p-2 m-2'>
  <button onClick={openModal}>Add time slot</button>
</div>
{ open &&<Modal open={open} setOpen={setOpen} buttonName={'Create Slots'} heading={'create slots'} handleSubmit={createslotsdata}>
<div className='d-flex flex-column gap-2'>
  <h2>{court.courtname}</h2>
  <h2>{court.location}</h2>
 <span>
  <label htmlFor="">starting date</label>
  <input type='date' name='startDate' value={slotdata.startDate} onChange={handleSlotData}/></span>
  <span>
  <label htmlFor="">ending date</label>
  <input type='date'name='endingDate' value={slotdata.endingDate} onChange={handleSlotData}/></span>
  <span>
  <label htmlFor="">cost</label>
  <input type='number'name='cost' value={slotdata.cost} onChange={handleSlotData}/></span>
  <span>

  <label htmlFor="">select slots</label>
  <select name="" id="" onChange={selectedSlot}>
  {filteredslots.map((slot,index)=><option value={slot.id} key={slot.id}>{slot.time}</option> )}  
  </select>
</span>
<div>
  {selected.map((slot)=><label className='border border-1 rounded-1 p-2 me-1 mt-1'> {slot.time}</label>)}
</div>

  </div>
</Modal>}
</div>

    </>
  )
}

export default CourtDetails
/*
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/AxiosInstance';
import MainNavBar from '../../components/NavBar/MainNavBar';
import './CourtDetails.css';
import Modal from '../../components/common/Modal';

function CourtDetails() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [court, setCourt] = useState({});

  const getCourtDatabyId = () => {
    axiosInstance
      .get('/users/getCourtDatabyId', { params: { id } })
      .then((res) => {
        setCourt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    getCourtDatabyId();
  }, [id]);

  return (
    <>
      <MainNavBar />
      <div className="courtdetails-continer">
        <img src={`${process.env.REACT_APP_BE_URL}/images/${court.courtPic}`} alt="" />
        <div>{court.courtname}</div>
        <div className="d-flex justify-content-end p-2 m-2">
          <button onClick={openModal}>Add time slot</button>
        </div>
        {open && <Modal open={open} setOpen={setOpen} >
          
          </Modal>}
      </div>
    </>
  );
}

export default CourtDetails;
*/