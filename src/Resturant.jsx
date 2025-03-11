import React, { useState } from 'react';
import Navba from './Navba';
import './Resturant.css';
import Footer from './Footer';

export default function Resturant() {
  const [showPopover, setShowPopover] = useState(false);
  const [loader, setloader]=useState(false)
  const handleBooking = (e) => {
    e.preventDefault();
    setShowPopover(true);
  };
  function yes(e){
    e.preventDefault();
    setloader(true);
    setTimeout(() => {
      setloader(false);
      alert('Your Booking Is Done');
      history.go(0);
    }, 3000);

      
  }
  function no(){
  let remove=document.getElementById('shows')
   remove.style.display='none';
  }
  return (
    <div>
      <Navba />
      <h2
        id='changer'
        className='text-center mt-4 text-uppercase'
        style={{ fontFamily: 'serif', fontSize: '2.9pc' }}
      >
        Resturant
      </h2>
      <div>
        <img
          id='abut'
          className='img-fluid float-end border border-2 border-secondary rounded-5 me-3'
          style={{ height: '70vh', boxShadow: '10px 12px 12px black' }}
          src='\src\assets\hotelstaffandKitchen\pexels-life-of-pix-67468.jpg'
          alt=''
        />
        <br />
        <p className='text-center p-2' style={{ color: '#778da9' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dignissimos fuga. Optio magni culpa sapiente ab fugit atque, quisquam nesciunt rem sed perferendis animi quibusdam sit vero officia quo corporis. Sed maiores sunt laborum velit magnam consectetur cum a ut, tempora labore aperiam placeat ipsa alias deserunt hic itaque ad at aut! Nemo molestiae ratione quia quidem laboriosam, cum possimus, ipsum assumenda nam est velit distinctio, fuga perspiciatis quibusdam. Quas placeat provident omnis non nisi nam doloremque quidem veniam autem ducimus. Deserunt sunt exercitationem commodi pariatur sapiente dolor numquam earum quam atque! Sunt commodi asperiores, quasi distinctio quod quis labore numquam? Sint culpa reiciendis voluptates nostrum veritatis perspiciatis optio magni, laboriosam eligendi aspernatur illo enim deleniti laborum minima sequi animi delectus itaque, laudantium perferendis? Illum aliquam sapiente doloribus neque, nulla facere eveniet iure? Corrupti optio illum assumenda aut omnis, dolorum consequuntur nostrum! Ratione omnis dicta dolores atque neque laudantium odit modi nihil, quidem voluptates quae voluptatum tempora necessitatibus inventore. Doloremque praesentium atque, repellendus distinctio placeat laborum consequuntur natus optio quae! Officiis soluta quibusdam recusandae rerum. Accusantium atque accusamus ea ipsa, consectetur voluptatum expedita. Voluptates nulla minus labore quisquam debitis architecto consectetur totam deleniti harum, aperiam ea eligendi? Facilis doloremque unde, accusamus tenetur illo beatae, temporibus nostrum ipsum necessitatibus quasi obcaecati quae dicta eos, dolorem hic adipisci qui. Rem quibusdam, itaque quae deleniti commodi distinctio recusandae labore ex natus facilis sint in dolores. Quisquam, rem quasi. Quam deleniti blanditiis at consequuntur aliquid voluptatibus atque officiis a deserunt sint id totam et mollitia, iste animi voluptate? Est quidem laborum expedita tempore, iste voluptates officia consequatur facere ipsam! Aut aliquid reprehenderit eos, repellendus animi perspiciatis magni explicabo blanditiis ipsum eligendi. Quo animi iure quaerat nulla, eius sed neque cum rem corporis optio sint nesciunt necessitatibus? Laboriosam sed vero corporis autem, at necessitatibus voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias enim fugiat sequi repudiandae labore ab, eligendi pariatur deserunt voluptatum quaerat, dolor, mollitia obcaecati inventore! Ducimus voluptate nam earum. Ducimus.
        </p>
      </div>
      <div className='d-xl-flex justify-content-center' id='Res'>
        <img
          className='img-fluid border border-3 border-secondary py-3'
          style={{ height: '70vh' }}
          src='\src\assets\hotelstaffandKitchen\pexels-evonics-1058277.jpg'
          alt=''
        />
        <form action='' className='text-center ms-5' onSubmit={handleBooking}>
          <h2
            className='text-center mt-4 text-uppercase'
            style={{ fontFamily: 'serif', fontSize: '2.9pc' }}
          >
            Table Booking
          </h2>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            name='Name'
            id='Name'
            placeholder='enter your Name'
            required
          />
          <br />
          <br />
          <label htmlFor='Number'>Number</label>
          <input
            type='number'
            name='Number'
            id='Number'
            placeholder='enter your Number'
            required
          />
          <br />
          <br />
          <label htmlFor='People'>People</label>
          <input
            type='number'
            name='People'
            id='people'
            placeholder='enter People Number'
            required
          />
          <br />
          <br />
          <label htmlFor='DT'>Date & Time</label>
          <input type='datetime-local' name='DT' id='DT' required />
          <br />
          <br />
          <h3 className='fs-4 text-uppercase'>
            You will pay In Advance 1000/-
            <input
              style={{ height: '20px' }}
              type='checkbox'
              name='pay'
              id='pay'
              required
            />{' '}
          </h3>
          <br />
          <button
            popoverTarget='shows'
            className='btn btn-danger text-uppercase my-3 p-3'
            type='submit'
          >
            Book
          </button>
        </form>
          </div>
          <div id='circle'>
              {loader &&   <img className='img-fluid' style={{ height: '35vh' }} src="\src\assets\Social\tube-spinner.svg" alt="" />}
            </div>
        {showPopover && (
          <div className='bg-dark d-flex justify-content-center mt-3'>
          <div className='popover bg-dark' id='shows'>
            <div className='bg-dark p-3 ms-4' >
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
