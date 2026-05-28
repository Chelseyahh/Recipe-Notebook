const form = document.getElementById('recipe-form');

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    // Get form values (i.e the Recipe Name, Ingredients, and Instructions)
    const name = document.getElementById('recipe-name').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const instructions = document.getElementById('instructions').value.trim();

    // Validate form inputs
    if (!name || !ingredients || !instructions) {
        alert('Please fill in all the fields before adding a recipe.');
        return;
    }

    // Save recipe to localStorage
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    recipes.push({ name, ingredients, instructions});
    localStorage.setItem('recipes', JSON.stringify(recipes));

    form.reset();
    window.location.href = 'list/list.html';
})