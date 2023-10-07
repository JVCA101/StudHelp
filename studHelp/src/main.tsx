import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SideBar from "./components/SideBar.tsx";
import  HeaderAluno from "./components/HeaderAluno.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="flex w-screen">

    <SideBar />
    
    <HeaderAluno />
  </div>
);
