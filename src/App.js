import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CookBookLanding, CookBookDashboard, Recipe } from "./components";

function App() {
    return (
        <Box>
            <Routes>
                <Route path="/" element={<CookBookLanding />} />
                <Route path="/dashboard" element={<CookBookDashboard />} />
                <Route path="/recipe" element={<Recipe />} />
            </Routes>
        </Box>
    );
}

export default App;
