import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/restaurant'>Restaurant</Link>
        </nav>
    );
};

export default Header;