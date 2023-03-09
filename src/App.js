import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons} from './api';


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

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


    return (
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
    );
  }

  export default App;
