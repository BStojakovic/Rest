import React, { useEffect, useState } from "react";
import "./pokes";
import { useParams } from "react-router-dom";
//import { Ability } from "./ability";

export default function SinglePoke() {
  const { itemId } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        let pokemonToFind = data.results.find(
          (pokemon) => pokemon.name == itemId
        );
        console.log("found pokemon", pokemonToFind);
        fetch(pokemonToFind.url)
          .then((response) => response.json())
          .then((data) => {
            setPokemonData(data);
          });
      });
  }, [itemId]);
  

  // let poke = getPoke(params.pokeId, 10)
  // console.log(poke)
  console.log("params");
 
  return (<ul class="p-5 m-2 list-disc" key={itemId}>
    <li> Name : {pokemonData?.name}</li>
    <li> Abilities : {JSON.stringify(pokemonData?.abilities[0].ability)}</li>
    <li> Base experience : {JSON.stringify(pokemonData?.base_experience)}</li>
    {/* <li> {Ability} </li> */}
    <li> {pokemonData?.abilities.map(ability => {
      return <p>{ability.ability.name}</p>;
    })}</li> 
  </ul>);
}
