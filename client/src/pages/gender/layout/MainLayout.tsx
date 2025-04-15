import React from "react"
import Navbar from "../../../components/Navbar"
interface MainLayoutprops {
    content: React.ReactNode;
}


const MainLayout = ({content}: MainLayoutprops) => {
  return (
    <>
    <div className="cotainer-fluid">
        <Navbar/>
        <div > {content}</div>
                    
        </div>
    </>
  )
}

export default MainLayout 
