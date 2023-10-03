import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SideBar from "./components/SideBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SideBar />
  </React.StrictMode>
);
