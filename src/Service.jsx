import React from "react";
// import Web from "./img/3.png";
import Card from "./Card"
import SerData from "./SerData"
import Slide from "react-reveal/Slide";
const Service=()=>{
    return(
        <>
        <Slide left>
        <div className="my-5">
            <h1 className="text-center">Our Service</h1>
        </div>
        </Slide>
        <Slide bottom>
        <div className="container-fluid mb-5 ">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                   
                    {
                        SerData.map((val,key)=>{
                            return <Card imgsrc={val.imgsrc} service={val.title} />
                        })
                    }
                    </div>
                    </div>
                </div>
            </div>
            </Slide>
        </>
    );
}

export default Service;