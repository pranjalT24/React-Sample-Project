import React from "react";
import Web3 from "./img/4.png";
import Slide from "react-reveal/Slide";

const Contact=()=>{
    return(
        <>
       <Slide top>
           <div className="text-center my-5"><h1>Contact Us</h1></div>
           </Slide>
           <Slide bottom>
       <div className="container-fluid mb-5">
 <div className="row">
     <div className="col-10 mx-auto">
     <div className="row mb-5">
         <div className="col-md-6 pt-lg-0 order-2 order-lg-1 header2">
         <form>
        <ul>
            <li>
                <label for="name"><span>Name <span class="required-star">*</span></span></label>
                <input type="text" id="name" name="user_name"/>
            </li>
            <li>
                <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label for="msg"><span>Message</span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="submit"/>
            </li>
        </ul>
    </form>
         </div>
         <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={Web3} className="img-fluid animated2" alt="no img" />
         </div>
         </div>
     </div>
 </div>
 </div>
 </Slide>
        </>
    );
}

export default Contact;