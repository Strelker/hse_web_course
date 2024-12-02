import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let recipes = [
    { id: 1, name: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, name: 'Chicken Curry', description: 'A spicy and flavorful curry.' },
];

app.get('/api/v1/recipes', (req, res) => {
    res.json(recipes);
});

app.post('/api/v1/recipes', (req, res) => {
    const { name, description } = req.body;
    const newRecipe = {
        id: recipes.length + 1,
        name,
        description,
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
});

app.listen(PORT, () => {
    console.log(`Recipe API running on http://localhost:${PORT}`);
});