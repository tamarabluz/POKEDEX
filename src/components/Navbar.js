import React from "react";

const Navbar = () => {
    const logoPoke = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img alt="PokéAPI" 
                src={logoPoke}
                className="navbar-img" />
            </div>

        </nav>
    );
};
export default Navbar;