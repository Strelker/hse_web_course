const API_URL = 'http://localhost:3000/api/v1';

const getAllRecipes = async () => {
    const response = await fetch(`${API_URL}/recipes`);
    if (!response.ok) throw new Error('Failed to fetch recipes');
    return response.json();
};

const createRecipe = async (recipe) => {
    const response = await fetch(`${API_URL}/recipes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
    });
    if (!response.ok) throw new Error('Failed to create recipe');
    return response.json();
};

const renderRecipes = async () => {
    const container = document.getElementById('recipe-list');
    container.innerHTML = '';
    try {
        const recipes = await getAllRecipes();
        recipes.forEach((recipe) => {
            const item = document.createElement('div');
            item.innerHTML = `<h3>${recipe.name}</h3><p>${recipe.description}</p>`;
            container.appendChild(item);
        });
    } catch (err) {
        container.innerHTML = `<p>Error loading recipes: ${err.message}</p>`;
    }
};

document.getElementById('add-recipe').addEventListener('click', async () => {
    const newRecipe = {
        name: 'Banana Smoothie',
        description: 'A delicious and healthy smoothie made with bananas.',
    };
    await createRecipe(newRecipe);
    renderRecipes();
});

renderRecipes();