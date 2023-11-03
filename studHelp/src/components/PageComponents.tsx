import React from 'react'

interface PageComponentsProps {
    open: boolean
    children: React.ReactNode
}

export const PageComponents = ({children, open}: PageComponentsProps) => {
    return(
        <div className={`h-screen absolute text-blue-950 duration-1000
        ${open ? " w-[50%] left-[50%] md:left-[40%] md:w-[60%] min-[1200px]:left-[25%]  min-[1200px]:w-[75%]": "w-[90%] left-[10%]" }`}>
            {children}
        </div>
    )
}

export default PageComponents;

