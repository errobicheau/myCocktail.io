import React from 'react';
import logo from '../images/myCocktailCover.svg'

const Header = () => {
    return(
        <div class="container mx-auto text-center mt-5">
            <img
            className='w-80 h-auto mx-auto'
            src={logo}
            alt="myCocktail Logo"
            />
            <p className="mt-5 font-light text-gray-800">Cocktail search made easy.</p>
        </div>
    )
}

export default Header;