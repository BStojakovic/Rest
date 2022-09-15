import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Pokes} from './pokes';
import SinglePoke from './singlePoke';

import { BrowserRouter, Route, Routes } from "react-router-dom"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App  />} >
        <Route path="pokes" element={<Pokes/>}/>
        <Route path = "/:itemId" element ={<SinglePoke />}/>
        <Route
            path="*"
           element={
             <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
           }
          />
        
      </Route>
    </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

