import recipes from "../../data/recipes.json";

export default function() {
    recipes.categories.forEach((category) => {
        console.log(category.name);
    });
}