import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import pokedexlogo from "../assets/pokedexlogo.png";
import bgclogo from "../assets/bgclogo.png";
import "./Navbar.css";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="navbar">
      <a href="https://www.bgcbrasil.com.br/" className="button-link">
  <div>
    <img src={bgclogo} alt="bgc Logo" className="bgc-logo" />
  </div>
</a>
      <div>
        <img src={pokedexlogo} alt="Pokedex Logo" className="pokedex-logo" />
      </div>
           <div>Favorites {favoritePokemons.length} ❤️</div>
          
    </nav>
  );
};
  
  
  export default Navbar;