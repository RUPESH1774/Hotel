import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Navba() {
  return (
    <div className=''>
      <Navbar id='Navv' className="">
        <Container>
          <Navbar.Brand> <h2 id='mainn' className='fs-lg-2  '>Plantinum Series</h2></Navbar.Brand>
        <ul className='d-xl-flex justify-content-evenly '>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Booking">Booking</a></li>
            <li><a href="/Resturant">Resturant</a></li>
            <li><a href="/Contact">Contact_US</a></li>
        </ul>
        </Container>
        </Navbar>
    </div>
  )
}
