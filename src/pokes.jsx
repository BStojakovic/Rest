import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";



export function Pokes () {
    const [items, setItems] = useState([]);
    useEffect(() => {
        getData();
        
    }, []);

    

    
    
    const getData = async() => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon"
        ).then((response) => response.json());
        setItems(response.results)
       // console.log(response.results)
        
    };

    
    console.log("item", items)

    return(
        <ul>
            {items.map((item) => (
                <Link
                    to={`/${item.name}`}
                    key={item.name}>
                    <li>name : {item.name}</li>
                </Link>
            ))}
            <Outlet />
            
            
        </ul>
    )
    
}





