import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext"
import pokedexlogo from "../assets/pokedexlogo.png"
import bgclogo from "../assets/bgclogo.png"



const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={bgclogo} alt="bgc Logo" className="bgc-img" />
      </div>
      <div>
        <img src={pokedexlogo} alt="Pokedex Logo" className="pokedex-img" />
      </div>

      <div>Favorites {favoritePokemons.length} ❤️</div>
    </nav>
  );
};


export default Navbar;