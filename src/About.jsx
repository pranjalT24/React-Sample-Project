import React from "react";
import Common from "./Common";
import Web from "./img/1.png";
import Slide from "react-reveal/Slide";
const About=()=>{
    return(
        <>
            <Slide right>
       <Common htext="Welcome to About Page" 
         stext="We are helping students online as will as offline to get proper guidance with our expertise mentors."
         text="Feel Free To Contact"
         visit="/contact"
         imgsrc={Web}
         />
         </Slide>
        </>
    );
}

export default About;