import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { CookBookLanding, Menu, Recipe, ShoppingList } from "./components";

function App() {

    // State variables
    const [shoppingList, setShoppingList] = useState([]);

    return (
        <Box>
            <Routes>
                <Route path="/" element={<CookBookLanding />} />
                <Route
                    path="/menu"
                    element={
                        <Menu setShoppingList={setShoppingList} />
                    }
                />
                <Route path="/recipe" element={<Recipe />} />
                <Route
                    path="/shopping-list"
                    element={
                        <ShoppingList
                            shoppingList={shoppingList}
                            setShoppingList={setShoppingList}
                        />
                    }
                />
            </Routes>
        </Box>
    );
}

export default App;
