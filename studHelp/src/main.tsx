import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SideBar from "./components/SideBar.tsx";
import HeaderAluno from "./components/HeaderAluno.tsx";
import BodyAlunoMaterias from "./components/BodyAlunoMaterias.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
<div className="w-screen h-screen">
    <div className="absolute w-screen">
    <SideBar /> 
    </div>

    <div className = {`w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%] absolute min-[1200px]:w-[75%]`}>
    <HeaderAluno /> 
    <BodyAlunoMaterias />
    </div>  
</div>
);
