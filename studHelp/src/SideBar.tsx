import { useState } from "react";
import React from "react";


function App() {
  const [open, setOpen] = useState(true);
  return (   
   <div className='flex'> 
      <div className={`${open ? 'w-1/5' : 'w-28'} duration-300 h-screen bg-gradient-to-b from-blue-50  via-mid-bar  opacity-40 to-blue-50 relative`}>  
          <img 
            src='./src/assets/right-arrow-angle 2.svg'
            className={`absolute cursor-pointer -right-2 w-10 top-2 ${open && "rotate-180"}`}
            onClick={()=>setOpen(!open)}
          />
         <div>
          <img src='./src/assets/logo.svg' className={`cursor-pointer duration-500 w-20`} />
          <h1 className={`text-black origin-left font-sans`}>StudHelp</h1>
         </div>
      </div> 
   </div>
  );  
}

export default App;