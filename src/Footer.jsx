import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div>
    <div className=' heading p-5' style={{backgroundColor:'#8d99ae'}}>              
     <h2 id='mainn' className='ms-5 text-center text-light 'style={{fontFamily:'serif',color:'#'}}>Platinum  Series </h2>
    <div style={{textDecoration:'none'}} className='d-flex justify-content-center gap-5 p-3'>
        <a id='food' style={{textDecoration:'none'}} href="">Home</a>
        <a id='food' style={{textDecoration:'none'}} href="">About</a>
        <a  id='food' style={{textDecoration:'none'}} href="">Contact</a>
    </div>
<div id='social' className='d-flex justify-content-center ms-5 gap-4 p-3'>
   <a href=""><img title='Instagram' className='img-fluid' style={{height:'10vh'}} src="\src\assets\Social\icons8-instagram-logo-100.png" alt="" /></a> 
<a href=""><img title='Facbook' className='img-fluid' style={{height:'10vh'}} src="\src\assets\Social\icons8-facebook-logo-100.png" alt="" /></a> 
 <a href=""><img title='Twitter' className='img-fluid' style={{height:'10vh'}}src="\src\assets\Social\icons8-twitter-logo-100.png" alt="" /></a> 
<a href=""><img title='YouTube' className='img-fluid' style={{height:'10vh'}} src="\src\assets\Social\icons8-youtube-logo-100.png" alt="" /></a> 
    </div>
     <p  className=' text-center mt-5' style={{fontFamily:'serif',fontSize:'15px' ,color:'#000814'}}>Platinum Series Copyright © 2025 Plantinum - All rights reserved || Designed By: Rupesh Sharm@</p>
     </div>
    </div>
  )
}
