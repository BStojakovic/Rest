import { useEffect } from "react";
import React from "react";
import { useState } from "react";


const Pokes = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    
    const getData = async() => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon"
        ).then((response) => response.json());
        setItems(response.results)
        console.log(response.results[0])
    };
    

    return(
        <ul>
            {items.map((item) => (
                <li key = {item.name}>
                    name : {item.name}
                    <div> link: {item.url}</div>
                </li>
                
            ))}
        </ul>
    )
}

export default Pokes