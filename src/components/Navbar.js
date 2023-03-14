import React, { useState, useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import { Auth } from "aws-amplify";
import pokedexlogo from "../assets/pokedexlogo.png";
import bgclogo from "../assets/bgclogo2.png";
import "./Navbar.css";


const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="https://www.bgcbrasil.com.br/" className="button-link">
            <img src={bgclogo} alt="bgc Logo" className="bgc-logo" />
          </a>
          <img src={pokedexlogo} alt="Pokedex Logo" className="pokedex-logo" />
        </div>
        <div className="button-container">
          <button className="favorites-button">
            Favorites {favoritePokemons.length} ❤️
          </button>
          <button className="signout-button" onClick={() => Auth.signOut()}>
            Signout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
