import React, { useEffect, useState } from 'react';
import Navba from './Navba';
import './Booking.css';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom'
export default function Booking() {
    const [ACchecked, setACchecked] = useState(false);
    const [PCchecked, setPCchecked] = useState(false);
    const [PPchecked, setPPchecked] = useState(false);
    const [manyRooms, setmanyRooms] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [loader, setLoader] = useState(false);
    
    const [Name, setName] =useState('')
    const [Email, setEmail] =useState('')
    const [Number, setNumber] =useState('')
    const [City, setCity] =useState('')
    const [State, setState] =useState('')
    const [Checkin, setCheckin] =useState('')
    const [Checkout, setCheckout] =useState('')
    const [AC,setAC] =useState('')
    const [PC,setPC] =useState('')
    const [PP,setPP] =useState('')
    const navigate =useNavigate

    const show = (event) => {
        setACchecked(event.target.checked);
        if (event.target.checked) {
            setPCchecked(false);
            setPPchecked(false);
        }
    };

    const show2 = (event) => {
        setPCchecked(event.target.checked);
        if (event.target.checked) {
            setACchecked(false);
            setPPchecked(false);
        }
    };

    const show3 = (event) => {
        setPPchecked(event.target.checked);
        if (event.target.checked) {
            setACchecked(false);
            setPCchecked(false);
        }
    };

    const Manys = (event) => {
     setmanyRooms(event.target.value === "Many"); };
    

    const Booking = (e) => {
        e.preventDefault();
        setShowPopover(true);
    };

    async function yes(e) {   
         e.preventDefault();
         setLoader(true);
        setTimeout(() => {
            setLoader(false);
            alert('Booking is Completed');
            history.go(0);
        }, 3000); 
        console.log(Name,Email,Number,State,City,Checkin,Checkout,AC,PC,PP)
        let result = await fetch("http://localhost:7000/customer",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Name,Email,Number,State,City,Checkin,Checkout,Checkout,AC,PC,PP})
        })
        result=await result.json()
        console.warn(result)
        if(!Name|| !Email || !Number || !State || !City || !Checkin || !Checkout || !AC || !PC || !PP)
        {
            setError(true)
            return false
        }
        if (result){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }
        // navigate('/')
        }
        useEffect(()=>{
            const aut =localStorage.getItem('user')
            if(aut){
                navigate('/')
            }
        })
    function no() {
        let remove = document.getElementById('shows');
        remove.style.display = 'none';
        history.go(0);
    }

   return (
        <div>
            <Navba />
            <h2 id='changer' className='text-center mt-4 text-uppercase' style={{ fontFamily: 'serif', fontSize: '2.9pc' }}>Room Booking</h2>
            <div id='main' className='mx-5 my-2 d-xl-flex justify-content-evenly border border-3 border-dark rounded'>
                <img className='img-fluid float-start border border-3 border-info' style={{ height: '100vh' }} src="\src\assets\hotelstaffandKitchen\pexels-pixabay-53464.jpg" alt="" />
                <form action="" onSubmit={Booking} className='text-center'>
                    <h2 id='ani' className='text-center mt-4 text-uppercase' style={{ fontFamily: 'serif', fontSize: '2.9pc' }}>Check IN & Out</h2>
                    <label htmlFor="Name">Enter Your Name</label>
                    <input type="text" name="Name" id="Name" placeholder='Enter Your Name' value={Name}  onChange={(e)=>setName(e.target.value)} required /><br /><br />
                    <label htmlFor="Email">Enter Your Email</label>
                    <input type="email" name="Email" id="Email" placeholder='Enter your Email' required value={Email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                    <label htmlFor="Number">Mobile Number</label>
                    <input type="number" name="Number" id="Number" placeholder='Enter Your Number' required value={Number}  onChange={(e)=>setNumber(e.target.value)} /><br /><br />
                    <label htmlFor="SC">Enter Your State & City</label>
                    <input type="text" name="City" id="City" placeholder='City'value={City}  onChange={(e)=>setCity(e.target.value)} /> <input type="text" name="SC" id="State" placeholder='State' required value={State}  onChange={(e)=>setState(e.target.value)} /><br /><br />
                    <label htmlFor="DCheckin">Check In Date</label> <input type="date" name="Checkin" id="Checkin" required value={Checkin}  onChange={(e)=>setCheckin(e.target.value)} />
                    <label htmlFor="Checkout">Check Out Date</label> <input type="date" name="Checkout" id="checkout" required value={Checkout} onChange={(e)=>setCheckout(e.target.value)} /> <br /><br />
                    <label htmlFor="Rooms">Select Rooms</label>
                    <select name="Rooms" id="Rooms" onChange={Manys} required>
                        <option value="">-- Select Rooms--</option>
                        <option value="1" >1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3"> 3 Rooms</option>
                        <option value="Many"> Many Rooms </option>
                    </select>&nbsp;
                 { manyRooms &&  <input type="number" id='Number' placeholder='Enter Number Rooms' />}<br /><br />
                    <label htmlFor="">Verification</label>
                    <h6 className='fs-5 text-dark'> --Select One--</h6>
                    <ul style={{ color: '#212529', fontFamily: 'revert-layer', fontSize: '20px' }} required>
                        <li>Aadhar Card  <input type="radio" name="ver" id="AC" onChange={show} /> </li>
                        <li>PAN Card <input type="radio" name="ver" id="PC" onChange={show2} /></li>
                        <li>Passport <input type="radio" name="ver" id="PP" onChange={show3} /></li>
                    </ul>
                    {ACchecked &&  <input type="text" name="AC" id="ACshow" placeholder='Enter the Aadhar Card Number' value={AC} onChange={(e)=>setAC(e.target.value)}  maxLength={12}  required />}
                
                    {PCchecked && <input type="text" name="PC" id="PCshow" placeholder='Enter the PAN Card Number' value={PC} onChange={(e)=>setPC(e.target.value)} required/>}
                    {PPchecked && <input type="text" name="PP" id="PPshow" placeholder='Enter the Passport Number'required value={PP} onChange={(e)=>setPP(e.target.value)} />}
                    <br /><br />
                    <button popoverTarget='shows' className='btn btn-outline-info fs-4 my-2 text-uppercase'>Submit</button>
                </form>
            </div>
            <div id='circle'>
              {loader &&   <img className='img-fluid' style={{ height: '35vh' }} src="\src\assets\Social\tube-spinner.svg" alt="" />}
            </div>
            {showPopover && (
                <div className='bg-dark d-flex justify-content-center'>
                    <div id='shows' className='popover bg-dark'>
                        <div className='bg-dark p-3 ms-4'>
                            <h2 className='text-center text-success'>Information is Correct</h2>
                            <button onClick={yes} className='btn btn-outline-success me-3'>Yes✔</button>
                            <button onClick={no} className='btn btn-outline-danger'>NO❌</button>
                        </div>
                    </div>
                </div>
            )}
           
            <Footer />
        </div>
    );
}

