const recipeList = document.getElementById('recipe-list');

function renderRecipes() {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    // If there are no recipes, show the empty state message
    if (recipes.length === 0) {
        recipeList.innerHTML = '<p class="empty-state">🎀No recipes yet — add one!🎀</p>';
        return;
    }

    // Load each recipe into the page if there are any
    recipeList.innerHTML = recipes.map((recipe, index) => ` 
        <div class="recipe-card">
            <h2>${recipe.name}</h2>
            <p class="section-label">Ingredients</p>
            <p>${recipe.ingredients}</p>
            <p class="section-label">Instructions</p>
            <p>${recipe.instructions}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
    `).join('');

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function (){
            const index = parseInt(this.dataset.index);
            const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
            recipes.splice(index, 1);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            renderRecipes();
        })
    })
}

renderRecipes();
