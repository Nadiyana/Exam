import React from "react";
import "./box.css"
import Zurag from "../test/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"

const Box = () => {
    return (
        <div className="button">
           <div className="buttons">
            <div className="button-1">
                <button className="button-1-1">Read more</button>
                <div className="button-1-2">
                    <img src={Zurag} alt="logo"/>
                </div>
            </div>
            <div className="button-1">
                <button className="button-1-3">Read more</button>
                <button className="button-1-4">Read more</button>
            </div>
           </div>
        </div>
    ) 
};
export default Box;