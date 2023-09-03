import React,{useContext} from 'react';
import {ContextApi} from '../ContextApi';
import {Link} from 'react-router-dom';

const Navbar = () => {


const {bgColor, changeTheme} = useContext(ContextApi);


    return(
        <>
        <div className='nav-main'>

        <div className='navbar'>
        <h1>Geekster</h1>
        <Link to="/">Home</Link>
        
        <Link to="/contact">Contact</Link>
        
        <Link to="/service">Service</Link>
        
        <Link to="/Careers">Careers</Link>
       
         
        </div>
        <button onClick={()=>{changeTheme()}}>{bgColor?"Light ":"Dark "}Theme</button>
        </div>
        </>
    )
}

export default Navbar;