import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios({
    url: baseUrl, formatter: (data) => ({
      id: data.id,
      front: data.sprites.front_default,
      back: data.sprites.back_default,
      name: data.name,
      stats: data.stats
    })
  });

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={(name) => addPokemon(name)} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
      <div>
        <button onClick={clearPokemon} >Remove pokemon</button>
      </div>
    </div>
  );
}

export default PokeDex;
