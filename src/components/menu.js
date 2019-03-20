import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
    return(
        <div className='menu-container'>
            <Link to='/Task-Manager'
                className='link'
            >All tasks</Link>      

            <Link to='/Task-Manager/form'
                className='link'
            >Create task</Link>
        
            <Link to='/Task-Manager/login'
                className='link'
            >Sign in</Link>

        </div>
    );
};

export default Menu;