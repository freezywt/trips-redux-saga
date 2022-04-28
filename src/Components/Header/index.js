import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../Assets/logo.svg';

export default function Header() {

    const reserveSize = useSelector(state => state.reserve);

 return (
   <header className='container'>
       <Link to="/">
        <img className='logo' src={logo} alt='logo of project'/>
       </Link>

       <Link className='reservations' to='/reservations'>
           <div>
               <strong>My reservations</strong>
               <span>{reserveSize.length} reservations</span>
           </div>
       </Link>
   </header>
 );
}