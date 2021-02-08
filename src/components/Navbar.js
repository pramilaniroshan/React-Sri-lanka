import React from 'react';
import {Link} from 'react-router-dom';
import { useState ,useEffect } from 'react';
import {Button} from './Button';
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setbutton] = useState(true)

   const handleClick =()=>{
        setClick(!click)
    }

    const closeMobileMenu=()=> setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setbutton(false);
        }else{
            setbutton(true);
        }
    }

    window.addEventListener('resize', showButton);

    useEffect( () =>{
        showButton()
    },[])

    return (
        <>
           <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <i class="fas fa-heart">   SRI LANKA  </i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' :'nav-menu'} >
                    <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closeMobileMenu} > 
                       Home
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to='/services' className='nav-links' onClick={closeMobileMenu} > 
                       Services
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to='/produts' className='nav-links' onClick={closeMobileMenu} > 
                       Products
                       </Link>
                    </li>
                    <li className='nav-item'>
                       <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu} > 
                       Signup
                       </Link>
                    </li>


                    
                </ul>
                {button && <Button buttonStyle='btn--outline' >SIGN UP</Button>}
            </div>
            </nav>   
        </>
    )
}

export default Navbar


