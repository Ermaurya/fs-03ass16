import React, {useContext} from 'react';
import {ContextApi} from '../ContextApi';
import Navbar from './Navbar';


const Home = () => {

const {bgColor} = useContext(ContextApi);

    return (
        <div className={bgColor?'light' : 'dark'}>
        <Navbar />
        <div className='home-main'>
<div className='margin'>

            <h2 className='h1-tag'>HOME Lorem ipsum dolor eiusmod tempor</h2>
            <p className='p-tag'> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                
               </p>
</div>
               <div className='searchbar'>
                

               <input type='text' className='textinput height search__input' placeholder='search jobs'/>
               {/* <input type='text' className='locationinput height'placeholder='use current location'/> */}
               {/* <input type='button' className='locationinput 'value='submit'/> */}

               </div>
               
        </div>
        </div>
    )
}

export default Home;