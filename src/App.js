import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons} from './api';
import { FavoriteProvider } from "./contexts/favoritesContext";

const favoritesKey = "f"
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 25;
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }
    useEffect(() => {
      console.log("carregou")
      fetchPokemons();
    }, [page])

    const updateFavoritePokemons = (name) => {
      const updatedFavorites = [...favorites]
      const favoriteIndex = favorites.indexOf(name)
      if(favoriteIndex >= 0) {
        updatedFavorites.splice(favoriteIndex, 1);
      }else {
        updatedFavorites.push(name);
      }
      window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
      setFavorites(updatedFavorites);
    }

    return (
      <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div>
        <Navbar />
        <Searchbar />
        <Pokedex 
        pokemons = {pokemons} 
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        />
      </div>
      </FavoriteProvider>
    );
  }

  export default App;
