import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SideBar from "./components/SideBar.tsx";
import HeaderAluno from "./components/HeaderAluno.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
<div className="">
    <div className="absolute w-screen">
    <SideBar />
    </div>

    <div className = "left-28 absolute">
    <HeaderAluno />
    </div>
    

    
    
</div>


);
