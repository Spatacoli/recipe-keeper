import recipes from "../../data/recipes.json";
import "../css/main.scss";

export default function() {
  loadRecipes();
  initNav();
  openRecipeSection("tab0");
}

function initNav() {
  let navItems = [...document.getElementsByClassName("nav-item")];
  const navExpose = document.getElementsByClassName("nav-expose")[0];
  const navClose = document.getElementsByClassName("nav-close")[0];

  navExpose.classList.remove("hide");
  navClose.classList.add("hide");

  navItems.forEach(item => {
    item.onclick = openRecipeSection.bind(this, item.classList[1]);
  });

  navExpose.onclick = openNavigation;
  navClose.onclick = closeNavigation;
}

function openNavigation() {
  const navExpose = document.getElementsByClassName("nav-expose")[0];
  const navClose = document.getElementsByClassName("nav-close")[0];

  navExpose.classList.add("hide");
  navClose.classList.remove("hide");

  const navItems = document.getElementById("nav-items");
  navItems.classList.add("show");

  const nav = document.getElementsByTagName("nav")[0];
  nav.classList.add("open");
  nav.classList.remove("closed");
}

function closeNavigation() {
  const navExpose = document.getElementsByClassName("nav-expose")[0];
  const navClose = document.getElementsByClassName("nav-close")[0];

  navExpose.classList.remove("hide");
  navClose.classList.add("hide");

  const navItems = document.getElementById("nav-items");
  navItems.classList.remove("show");

  const nav = document.getElementsByTagName("nav")[0];
  nav.classList.remove("open");
  nav.classList.add("closed");
}

function openRecipeSection(sectionId) {
  closeNavigation();
  const oldSelectedItems = document.getElementsByClassName("selected");
  if (oldSelectedItems) {
    [...oldSelectedItems].forEach(item => {
      item.classList.remove("selected");
    });
  }

  const newSelectedItems = document.getElementsByClassName(sectionId);
  if (newSelectedItems) {
    [...newSelectedItems].forEach(item => {
      item.classList.add("selected");
    });
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

    let recipes = category.recipes
      .map(recipe => {
        return buildArticle(recipe);
      })
      .join("");

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
  const authorNames = recipe.author
    .map(author => {
      return `<span class="author-name">${author}</span>`;
    })
    .join(", ");
  const ingredientList = recipe.ingredient
    .map(item => {
      return `<li class="ingredient">${item}</li>`;
    })
    .join("");
  const instructions = recipe.instructions
    .map(instruction => {
      return `<p>${instruction.value}</p>`;
    })
    .join("");
  return `<article class="recipe">
        <h1>${recipe.name}</h1>
        <h2 class="author">
          From the kitchen of <span class="author-name">${authorNames}</span>
        </h2>
        <ul class="ingredient-list">${ingredientList}</ul>
        <div class="instructions">${instructions}</div>
      </article>`;
}
