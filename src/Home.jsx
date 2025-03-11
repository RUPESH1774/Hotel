import React from 'react'
import Navba from './Navba'
import'./Home.css'
import Footer from './Footer'
export default function Home() {
  return (
    <div className='bg-dark'>
     
      <div className="main">
      <Navba/>
      <div className='ms-5 heading' >              
      <h2>Welcome To </h2> 
     <h2 id='mainn' className='ms-5'>Platinum Series </h2>
     </div>
      </div>
<div class="parent">
    <div class="div1 mt-2 bg-black p-2">
      <img className='img-fluid ' src="\src\assets\hotelstaffandKitchen\pexels-pixabay-258154.jpg" alt="" />
      <h3 className='text-center display-4 text-light text-uppercase mt-3'>Evening like This</h3>
      <p className='text-center text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto voluptatum unde inventore ea nemo voluptatem numquam dignissimos culpa. Reiciendis veritatis excepturi debitis numquam, cum at ipsum? Quidem, quia dicta sunt iste dignissimos laborum repellat impedit voluptate iusto doloribus accusantium maiores vero in sapiente porro nemo facilis ratione ducimus, consectetur earum distinctio error consequuntur vel? Magnam alias aperiam maiores quos suscipit eos cum velit laudantium doloribus eaque, id temporibus earum. Hic quisquam, inventore cupiditate perferendis aperiam eligendi provident vitae doloribus facilis deserunt, a odio cumque reiciendis excepturi dolor. Veniam nisi distinctio magnam perferendis cum harum, quae eaque quo, eius asperiores enim aut rerum quisquam obcaecati beatae quidem deleniti ex nulla maxime sequi iure voluptatem eum! Deserunt labore neque eveniet ratione minus, esse totam repellat, maiores corporis distinctio laborum quos laboriosam facilis vitae deleniti quam. Consequatur repellendus rem obcaecati vitae mollitia, aliquam dignissimos sit unde temporibus quos molestias sint reiciendis maxime non natus dicta repudiandae architecto illo eius illum rerum esse quas, exercitationem quis. Quas iure itaque neque tempora reiciendis architecto officiis modi quia quaerat, pariatur quibusdam fuga, possimus asperiores cum in quidem adipisci! Culpa corrupti deleniti eum modi minus libero ab repellendus eveniet inventore deserunt hic, animi at quidem consectetur nostrum corporis ipsum, vel quis nesciunt aperiam, ea voluptatibus maxime? Ea, dolor. Impedit magni laudantium provident praesentium harum at expedita labore maxime autem, dolores assumenda ratione explicabo repudiandae hic, ipsum sit reiciendis laboriosam tempora similique doloremque. Minima, repudiandae iure animi consequatur commodi nostrum blanditiis amet. Repellendus voluptate, numquam, impedit ex corrupti nobis repudiandae molestiae vel asperiores aperiam quidem, corporis porro qui provident.</p>
    <img id='pub' className='img-fluid' src="\src\assets\hotelstaffandKitchen\istockphoto-2183861914-1024x1024.jpg" alt="" />
    </div>

    <div class="div2 me-5 ">
      <h3 id='social' className=' text-center mt-4 '>Follow On Social Media</h3>
      <img  className='img-fluid mt-3 ' title='facbook' src="\src\assets\Social\icons8-facebook-1300.png" alt="" />  
      <img  className='img-fluid mt-3 ' title='instgram' src="\src\assets\Social\icons8-instagram-1300.png" alt="" />
      <img className='img-fluid mt-3 ' title='Twitter' src="\src\assets\Social\icons8-x-1300.png" alt="" />
      <img className='img-fluid mt-3 ' title='Youtube' src="\src\assets\Social\icons8-youtube-1300.png" alt="" />
     </div>

</div>
<div className='bg-light p-3 mt-4 border border-3 border-secondary rounded-4'>
<div className='mt-4 text-center '>
<h2 style={{fontFamily:"serif",textShadow:'12px 10px 5px grey'}} className='text-center text-primary text-uppercase h2'>Rooms & Resturant</h2>
    </div>
<p className='text-secondary' style={{fontFamily:'serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti sunt id quas nostrum libero, corporis numquam illo quod at eius reiciendis atque fugiat quisquam, magni eveniet excepturi! Iste quia unde molestiae nemo, dolorum possimus alias quos consequuntur iusto laborum, voluptates veniam impedit! Magni velit sint illum quisquam odio non dolores assumenda molestiae blanditiis necessitatibus repellat accusamus magnam, iure corporis incidunt obcaecati ut provident nam, quo dolorum facere eveniet ipsa. Voluptatem suscipit accusamus nesciunt molestiae facere exercitationem numquam distinctio non laboriosam neque officiis, excepturi eveniet recusandae rem alias. Assumenda, labore? Et, vitae libero nisi labore alias culpa maiores repellendus molestiae odit, nam enim! Sequi laboriosam commodi eos dolores, blanditiis quaerat iste aliquid maiores vero id minus ullam cumque. Nam cum nostrum possimus fuga hic sed, harum id excepturi dolorem ducimus dolore, eveniet incidunt voluptatem ab reiciendis suscipit? Eveniet unde, quam omnis cum veniam, architecto iusto alias, adipisci dicta consequuntur inventore? Natus, obcaecati vitae itaque id nulla accusantium quis nobis nemo debitis ullam, nihil recusandae ipsa, possimus adipisci quibusdam aut. Dolorem modi eius velit iste! Quia quo optio eum, neque commodi eos quibusdam facilis minus provident numquam doloribus? Pariatur at labore explicabo hic vel iste sint ex vitae minus. Soluta, maxime!</p>
<div id='room' className=' d-xl-flex justify-content-center gap-3 mb-3 mt-4'>
<img className='img-fluid p-1' src="\src\assets\hotelstaffandKitchen\pexels-cottonbro-5371575.jpg" alt="" />
<img className='img-fluid p-1' src="\src\assets\hotelstaffandKitchen\pexels-wildlittlethingsphoto-696218.jpg" alt="" />
<img className='img-fluid p-1' src="\src\assets\hotelstaffandKitchen\pexels-pixabay-271639.jpg" alt="" />
</div>
</div>
   <div id='pub'>
   <h2 style={{fontFamily:"serif",textShadow:'12px 10px 22px grey'}} className='text-center text-danger text-uppercase h2 mt-5'>Party Room & Pub</h2>
  <div className='d-xl-flex justify-content-evenly mt-5' >
  <img className='img-fluid border border-3 border-secondary rounded-4 ' style={{height:'44vh' ,boxShadow:'8px 12px 8px #c2bbf0' }} src="\src\assets\hotelstaffandKitchen\pexels-olly-787961.jpg" alt="" />
  <img className='img-fluid border border-3 border-secondary rounded-4' style={{height:'44vh',boxShadow:'8px 12px 8px #c2bbf0'}} src="\src\assets\hotelstaffandKitchen\pexels-chanwalrus-941864.jpg" alt="" />
  </div>
  <p className='text-light mt-3 p-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto consequuntur error, fugit pariatur asperiores magnam atque deleniti illo assumenda perferendis nemo recusandae perspiciatisipisci, dolorum libero cumque corporis incidunt doloribus odt. Commodi beatae quaerat quo facilis blanditiis doloremque iure, labore veritatis. Sapiente, explicabo? Officiis distinctio atque ipsa fugit voluptates harum. Cupiditate eum tempore sed blanditiis molestias, sunt commodi iure facilis harum tenetur! Eveniet reprehenderit aliquid commodi aspernatur delectus ratione consequatur voluptatum unde nesciunt rem asperiores quasi, obcaecati iusto doloribus aut ut aperiam atque accusamus ullam modi suscipit expedita! Vel aperiam quam autem sed porro, earum magnam officia dignissimos mollitia voluptates soluta totam alias, fugit vitae eos sint. Vitae quaerat odio id minus sequi maxime incidunt voluptatem. Ut minus impedit aut quis, repellendus, tempore reiciendis deleniti facere consectetur praesentium illum nihil iure obcaecati ratione dicta exercitationem expedita quisquam, adipisci recusandae voluptate officiis. Repellendus repudiandae vel quasi ex quidem molestiae vitae exercitationem non reprehenderit error porro voluptatem blanditiis repellat et, nemo perferendis eius. Ad qui est sint incidunt aliquam provident esse? Enim dolorum veritatis a maiores voluptates! Deleniti soluta natus rem veniam iste. Saepe nesciunt consequuntur maiores doloribus? Maxime, velit saepe pariatur asperiores alias commodi error quos, dignissimos totam ducimus nesciunt corporis blanditiis vitae nihil quisquam? Adipisci minus recusandae ea corrupti perspiciatis vel provident necessitatibus perferendis rerum nam in, praesentium eum dolore cum cupiditate fugiat eveniet mollitia doloribus delectus quo dicta nesciunt! Totam ipsum reiciendis, recusandae voluptatum provident possimus quos alias magni perspiciatis velit assumenda culpa deserunt. Fugiat inventore saepe, sunt culpa ex unde, sed aperiam adipisci ipsam corporis nesciunt facilis aut quibusdam. Ducimus aperiam voluptatem culpa numquam, dolore, non aspernatur optio totam possimus nesciunt, voluptas accusantium consectetur repudiandae quasi! Dicta cumque laudantium officia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime, animi minus praesentium laudantium eaque repellat numquam magni ad voluptatibus in ratione! Porro odit adipisci dolorem soluta maxime id libero accusamus repudiandae eius eligendi. Obcaecati laborum soluta perferendis porro esse.</p> 
  </div>
<Footer/>
   </div>
  )

}
