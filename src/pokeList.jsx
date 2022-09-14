import React from "react";


function PokeList ({items,setItems}) {
    //console.log("item", items)

    return(
    <ul>
        {items.map((item) => {
            <li key = {item.name}>
            name : {item.name}
            <div> link: {item.url}</div>
        </li>
        })}
    </ul>
)}

export default PokeList