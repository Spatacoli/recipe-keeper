var spatafore = (function () {
  'use strict';

  var categories = {
  	appetizers: [
  		{
  			name: "Frosted Pecans",
  			author: [
  				"Renee Huntley"
  			],
  			ingredient: [
  				"1/2 C Dairy Sour Cream",
  				"1 1/2 C Sugar",
  				"1 1/2 tsp Vanilla",
  				"3 C Pecan Halves"
  			],
  			"yield": "1 1/4 lbs",
  			instructions: [
  				{
  					value: "Combine sour cream, sugar, and vanilla in 2 QT heavy saucepan. Cook to the soft ball stage (234°), stirring frequently to prevent scorching. Add pecans and stir to coat. Turn into buttered baking sheet and separate with 2 forks. Package and freeze in airtight containers."
  				}
  			]
  		},
  		{
  			name: "Egg Rolls",
  			author: [
  				"Tonja Cone"
  			],
  			ingredient: [
  				"1 LB ground beef",
  				"1 tsp salt",
  				"1 tsp accent",
  				"1/2 tsp pepper",
  				"1 C chopped onions",
  				"1 C shredded carrots",
  				"3 C shredded cabbage",
  				"1 1/2 C chopped celery",
  				"1 pkg egg roll wrappers"
  			],
  			"yield": null,
  			instructions: [
  				{
  					value: "Brown ground beef, add salt, pepper, and accent. Stir in the vegetables (add a little at a time). Constantly stirring mixture. Cook on low heat until the vegetables are cooked. Cool 10-15 minutes. Put a moderate amount of mixture on each wrapper. Fold one side over the mixture, then fold in the 2 ends on opposite sides and roll. Should look like a folded burrito. Deep fry in hot oil until golden brown."
  				}
  			]
  		},
  		{
  			name: "Oven-made Carmel Corn",
  			author: [
  				"Renee Huntley"
  			],
  			ingredient: [
  				"5 qts popped corn",
  				"1 C butter",
  				"2 C brown sugar, firmly packed",
  				"1/2 C light corn syrup",
  				"1 tsp salt",
  				"1/2 tsp baking soda"
  			],
  			"yield": null,
  			instructions: [
  				{
  					value: "Spread freshly popped corn in a large, shallow sheet pan. Put it in a slow oven (250°) to keep warm and crisp. Combine butter, brown sugar, corn syrup, and salt in 2 QT heavy saucepan. Place on medium heat, stirring until sugar dissolves. Continue to boil to the firm ball stage (248°), about 5 minutes. Remove from heat and stir in baking soda. Syrup will foam. Take popped corn from oven and pour hot carmel mixture over it in a fine stream. Stir to mix well. Return to oven for 45-50 minutes, stirring every 15 minutes. Cool."
  				}
  			]
  		},
  		{
  			name: "Oh Yeah!",
  			author: [
  				"Nancy Vohs"
  			],
  			ingredient: [
  				"2 sm cans diced green peppers. (if you like it hot use Jalapenos)",
  				"2 sm cans diced black olives",
  				"some chopped onions (to taste)",
  				"2 chopped tomatoes",
  				"1/4 C vinegar",
  				"2 tbs oil",
  				"Taco or Picante Sauce"
  			],
  			"yield": null,
  			instructions: [
  				{
  					value: "Mix everything and taste as you go along. Serve with taco chips."
  				}
  			]
  		},
  		{
  			name: "Italian Meat Balls",
  			author: [
  				"Thomas Spatafore"
  			],
  			ingredient: [
  				"1 LB ground beef",
  				"1/2 C shredded provolone or mozzerella cheese",
  				"2 tsp garlic salt",
  				"1 - 1 1/2 tsp Italian seasoning",
  				"1/2 C bread crumbs",
  				"1 Egg, slightly beaten",
  				"1/2 C tomato sauce"
  			],
  			"yield": null,
  			instructions: [
  				{
  					value: "Combine all ingredients. Shape into 1 - 1 1/2 inch balls. Bake in shallow pan at 350° for 12 - 15 minutes or until done. Add to pasta dishes or spaghetti with tomato sauce."
  				}
  			]
  		},
  		{
  			name: "Toast",
  			author: [
  				"Tom Cone"
  			],
  			ingredient: [
  				"Bread",
  				"Toaster"
  			],
  			"yield": "2 slices",
  			instructions: [
  				{
  					value: "Carefully, remove bread from package. Place 2 slices in space provided. For those that have 4 spaces, choose 2 you feel comfortable with. INsure toaster is plugged in (that is the tricky part). Apply pressure to button until clicking sound. This tells you the toaster is cooking. When button pops up, this tells you your creation is done. Pat yourself on the back and apply whatever condiments are to your tastes or whatever is available."
  				}
  			]
  		}
  	],
  	"soups-salads": [
  	],
  	"main-dishes": [
  	],
  	"side-dishes": [
  	],
  	desserts: [
  	],
  	miscellaneous: [
  	]
  };
  var recipes = {
  	categories: categories
  };

  function main() {
      console.log(recipes);
  }

  return main;

}());
