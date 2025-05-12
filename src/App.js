import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { CookBookLanding, CookBookDashboard, Recipe } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CookBookLanding />} />
                <Route path="/dashboard" element={<CookBookDashboard />} />
                <Route path="/recipe" element={<Recipe />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
