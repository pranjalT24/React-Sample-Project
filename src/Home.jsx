import React from "react";
import Web from "./img/2.png";
import Common from "./Common";
import Slide from "react-reveal/Slide";

const Home=()=>{
    return(
        <>
        <Slide left>
        <Common htext="Welcome to CODE BENDER's React.js website" 
         stext="Learn to code with CODE BENDER"
         text="Let Get Started"
         visit="/service"
         imgsrc={Web}
         />
         </Slide>
        </>
    );
}

export default Home;