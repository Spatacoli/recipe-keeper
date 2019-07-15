import recipes from "../../data/recipes.json";

export default function() {
    loadRecipes();
    initNav();
}

function initNav() {
    let navItems = [...document.getElementsByClassName("nav-item")];
    
    navItems.forEach((item) => {
        item.onclick = openRecipeSection.bind(this, item.classList[1]);
    });
}

function openRecipeSection(sectionId) {
    const recipes = document.getElementById("recipes");
    if (recipes) {
        const sections = [...recipes.getElementsByClassName("recipeContainer")];
        sections.forEach((s) => {
            s.style.display = "none";
        });
    
        let section = recipes.getElementsByClassName(sectionId);
        section[0].style.display = "block";
    }
}

function loadRecipes() {
    const loading = document.getElementById("loading");
    const container = document.getElementById("container");
    const navList = document.getElementById("nav-items");
    const recipeList = document.getElementById("recipes");
    recipes.categories.forEach((category, index) => {
        let markup = buildNavItem(category, index);
        let container = document.createElement("li");
        container.innerHTML = markup;
        navList.appendChild(container);

        let recipes = category.recipes.map((recipe) => {
            return buildArticle(recipe);
        }).join("");

        let recipeContainer = document.createElement("li");
        recipeContainer.classList.add("tab" + index);
        recipeContainer.classList.add("recipeContainer");
        recipeContainer.innerHTML = recipes;
        recipeList.appendChild(recipeContainer);
    });
    loading.style.display = "none";
    container.style.display = "block";
}

function buildNavItem(category, index) {
    return `<div class="nav-item tab${index}">${category.name}</div>`;
}

function buildArticle(recipe) {
    const authorNames = recipe.author.map((author) => {
        return `<span class="author-name">${author}</span>`;
    }).join(", ");
    const ingredientList = recipe.ingredient.map((item) => {
        return `<li class="ingredient">${item}</li>`;
    }).join("");
    const instructions = recipe.instructions.map((instruction) => {
        return `<p>${instruction.value}</p>`;
    }).join("");
    return `<article class="recipe">
        <h1>${recipe.name}</h1>
        <h2 class="author">
          From the kitchen of <span class="author-name">${authorNames}</span>
        </h2>
        <ul>${ingredientList}</ul>
        <div class="instructions">${instructions}</div>
      </article>`;
}