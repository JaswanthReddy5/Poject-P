import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Assassin/Navbar";
import HexagonBackground from "./Assassin/HexagonBackground";
import Knownlanguages from "./Assassin/Knownlanguages"
import Myself from "./Assassin/Myself";
const Body = ()=>{
    return (
        <>
         <div>
            <Navbar/>
         </div>
         <div>
            <Myself/>
         </div>
         <div>
            <Knownlanguages/>
         </div>

        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);