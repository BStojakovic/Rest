import React from "react";
//import PokeList from "./pokeList";
import { useParams } from "react-router-dom"

function SinglePoke() {
  //  console.log("item", item)
    let params = useParams();
    return <h2>item : {params.itemsUrl}</h2>;
    
}

export default SinglePoke
