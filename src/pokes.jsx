import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


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
        console.log(response.results)
        
    };
    console.log("item", items)

    return(
        <ul>
            {items.map((item) => (
                <li key = {item.name}>
                    <>name : {item.name} </>
                    <Link to ={`/pokes/${item.url}`}>
                    <>url : {item.url} </>
                    </Link>
                </li>
                
            ))}
        </ul>
    )
}
// Napravit route da se na klik određenog ID-a otvori ta stranica pokemona,
// Uredi cssom(vidi šta je s tailwindom)
// napravi export funkciju da passa invoice na singlePoke(napravi ispod const pokes)
export { Pokes }