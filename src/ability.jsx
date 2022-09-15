import React, { useEffect, useState } from "react";
import SinglePoke from "./singlePoke";

export function Ability ({pokemonData}) {
    pokemonData.abilities.map(ability => {
        return <p>{ability.ability.name}</p>
    })

    }
