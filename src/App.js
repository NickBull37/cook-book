import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CookBookLanding, Menu, Recipe } from "./components";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<CookBookLanding />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/recipe" element={<Recipe />} />
            </Routes>
        </Box>
    );
}

export default App;
