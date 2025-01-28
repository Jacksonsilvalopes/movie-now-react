import React from 'react';
import { Routes, Route } from "react-router";
import Main from './pages/Main';
import ListEpisodes from './pages/ListEpsodes';
import Watch from './pages/Whatch';


const Rotas = () => (
    
        <Routes>
            <Route index element={<Main />} />
            <Route path="list-episodes" element={<ListEpisodes />} />
            <Route path="watch" element={<Watch />} />
        </Routes>
  
);

export default Rotas;