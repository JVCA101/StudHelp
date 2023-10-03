import { useState } from "react";
import React from "react";

function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-1/5" : "w-28"
        } duration-300 h-screen bg-gradient-to-b from-blue-50  via-mid-bar  opacity-40 to-blue-50 relative`}
      >
        <img
          src="./src/assets/right-arrow-angle 2.svg"
          className={`absolute cursor-pointer -right-2 w-10 top-2 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-2">
          <img
            src="./src/assets/logo.svg"
            className={`cursor-pointer duration-300 w-32 py-2 ${
              !open && "scale-[0.80] origin-left py-0"
            }`}
          />
          <h1
            className={`text-black origin-left font-medium text-5xl left-3 duration-300 py-4 ${
              !open && "scale-0"
            }`}
          >
            StudHelp
            <h2 className="opacity-60 text-sm px-1 py-2">
              Sua plataforma de estudo
            </h2>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
