import React, {useContext, useState, useEffect} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);
    const {pokemon} = props;
    const [moveDescription, setMoveDescription] = useState("");

    useEffect(() => {
        const fetchMoveDescription = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/move/${pokemon.moves[0].move.name}`);
                const data = await response.json();
                setMoveDescription(data.effect_entries[0].short_effect);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMoveDescription();
    }, [pokemon.moves]);

    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name);
    };
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3> {pokemon.name}</h3>
                    <div>N° {pokemon.id}</div>
                    
                </div>
                <div className="card-move">
                <div>{moveDescription}</div>

                </div>
    
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button onClick={onHeartClick} className="favorite-button">{heart}</button>
                </div>
            </div>
        </div>
    )
};

export default Pokemon;
