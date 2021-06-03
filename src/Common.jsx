import React from "react";

const Common=(props)=>{
    return(
        <>
         <section id="header" className="main-head-hom">
       <div className="container-fluid">
 <div className="row">
     <div className="col-10 mx-auto">
     <div className="row">
         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 header2">
             <h1>{props.htext}</h1>
             <h2 className="my-3">{props.stext}</h2>
             <div className="mt-3">
            <a href={props.visit} className="btn btn-outline-primary"> {props.text}</a>
             </div>
         </div>
         <div className="col-lg-6 order-1 order-lg-2 header-img">
             <img src={props.imgsrc} className="img-fluid animated" alt="no img"/>
         </div>
         </div>
     </div>
 </div>
 </div>
      </section>
        </>
    );
}

export default Common;