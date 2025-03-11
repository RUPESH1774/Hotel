import React, { useState } from 'react';
import './Contact.css';
import Navba from './Navba';
import Footer from './Footer';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const mes = (e) => {
    e.preventDefault();
    setMessage(true);
  };
function sumbit(){
  alert('Responce Sumbitted Successfully My Team Responce In 24-48 Hourse')
  history.go(0);
}
  return (
    <div>
      <Navba />
      <h2 id="changer" className="text-center mt-4 text-uppercase" style={{ fontFamily: 'serif', fontSize: '2.9pc' }}>
        Contact
      </h2>
      <img
        className="img-fluid"
        style={{ height: '50pc', padding: '3vh' }}
        src="\src\assets\Contact\contact-us-communication-support-service-assistance-concept_53876-128103.jpg"
        alt="Contact"
      />
      <div className="d-xl-flex justify-content-evenly text-center">
        <div id="cont" className="border border-3 border-secondary p-3">
          <img className="img-fluid" style={{ height: '20vh' }} src="\src\assets\Contact\call-center_24877-49051.jpg" alt="Call Center" />
          <h3>Call Any Time</h3>
          <h5>23+302830234 & 23+302830235</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti distinctio tenetur commodi, quae porro cumque quia accusamus
            corrupti natus ad quam praesentium! Neque doloribus velit nam culpa voluptatum molestias nulla hic incidunt totam quod cumque
            alias id tenetur consequatur explicabo, cupiditate suscipit porro quaerat.
          </p>
        </div>

        <div id="cont" className="border border-3 border-secondary p-3">
          <img className="img-fluid" style={{ height: '20vh' }} src="\src\assets\Contact\Message.avif" alt="Message" />
          <h3>Message Any Time</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque cum est ex, cupiditate, dicta deserunt rem non doloremque,
            accusantium distinctio fugit? Nisi, magni sapiente, at quasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ex
            ad quo doloremque animi eaque dolore, eveniet, repellat sequi quae inventore quam ab temporibus pariatur eligendi provident
            consequuntur ipsa. Alias. adipisci!
          </p>
          <a href="/" onClick={mes} popoverTarget="mes">
            <button className="btn btn-light p-2 border border-3 border-dark rounded-2">Text Me</button>
          </a>
        </div>
      </div>
      {message && (
        <div className="text-center d-flex justify-content-center bg-dark">
          <div className="popover bg-dark" id="mes">
            <form action="">
            <label className="text-center" htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" placeholder="Enter your Email" required /><br /><br />
            <textarea className="text-center fs-5 fw-light border border-2 border-success rounded-2" name="Message" id="Message" placeholder="Enter your Message" required></textarea>
            <br />
            <button onClick={sumbit} className="ms-5 mt-3 btn btn-outline-secondary">Submit</button>
            </form>
          </div>
        </div>
      )}
    <br />
<div className='pb-4 'style={{border:'2px solid #22223b',background:'#52b788',height:'137vh'}} >
   <h2 className='text-center mt-5' style={{fontFamily:'serif',fontSize:'10vh',textDecoration:'3px solid underline #252422',textShadow:'13px 22px 7px'}}> HELP</h2>
<div className='text-center'>
<p className='mt-3 ms-3 fs-1 fw-semibold h3' style={{textShadow:'13px 22px 7px'}} > Los Angles  <img id='cimg'  className='img-fluid' style={{height:'20vh'}} src="\src\assets\Contact\Location-removebg-preview.png" alt="" /> </p>
<a id='email' class="email-link text-dark" href="mailto:info@example.com?subject=Inquiry&body=Hello, I would like to know more about..."> <p className=' ms-3 fw-semibold h3'style={{textShadow:'13px 22px 7px'}}> platinumseries@gmail.com <img  id='cimg' className='img-fluid ms-3' style={{height:'13vh'}} src="\src\assets\Contact\icons8-email-100.png" alt="" /> </p></a>
<p className=' ms-3 fw-semibold h3' style={{textShadow:'13px 22px 7px'}}> 91+2312413 & 91+834701 <img  id='cimg' className='img-fluid ms-3' src="\src\assets\Contact\icons8-phone-100.png" alt="image" /></p>
  </div>
  <img id='help' style={{height:'60vh'}} className='img-fluid mx-auto d-block' src="\src\assets\Contact\map.jpg" alt="" />
    </div>
    <br />
   <div  className='d-xl-flex justify-content-evenly bg-secondary p-3 '>
   <p style={{marginTop:'10vh',fontFamily:'sans-serif',fontSize:'16px'}}>  <h2 id='mainn'>Plantinum Series</h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis similique aspernatur cumque in, suscipit officiis <br /> nam, eos incidunt recusandae asperiores neque ipsum illum harum delectus enim? Veritatis quae, <br /> est nam officiis rerum quia itaque facilis. Architecto odio quisquam, hic est iste numquam autem? <br /> Necessitatibus officiis culpa animi accusantium. Iusto reprehenderit aspernatur <br />enim, autem dignissimos in atque quasi ratione sit blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptate commodi, mollitia quidem iure eum quis <br /> a tempore. Et, libero eius.</p>
   <h2 id='phone' className='text-center fs-4  ' style={{fontFamily:'serif', marginLeft:"10px", marginTop:'30px'}}>Download Our App on <br /> <br /> <br /> <br /> PlayStore <br /> 
    <img style={{height:'10vh'}} className='img-fluid' src="\src\assets\Contact\icons8-google-play-store-144.png" alt="" /> <br /> <br /> 
    App Store <br /> <img className='img-fluid' style={{height:'10vh'}} src="\src\assets\Contact\icons8-app-store-100.png" alt="" /></h2>
    {/* <img  style={{height:'50vh'}} className='img-fluid float-start' src="\src\assets\Contact\5cb0633d80f2cf201a4c3253.png" alt="" /> */}
   
   </div>
    <Footer/>
    </div>
  )
}
