import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar';





function LayOut(){

    return(
        <>
        <Navbar/>
        
        <Outlet/>
        
      </>
    )
}
export default LayOut;