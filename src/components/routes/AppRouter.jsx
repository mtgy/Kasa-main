import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '@/pages/Home'
import Logement from '@/pages/Logement'
import About from '@/pages/About';
import NotFound from '@/pages/NotFound';

const AppRouter = () => {
    return (
       <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/logement/:id" element={<Logement/>}/>
        <Route path="/a-propos" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRouter;