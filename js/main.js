/**
 * ==============================================================================
 *   UNITED STATES RECIPES - MASTER INTERACTIVE JS (main.js)
 * ==============================================================================
 *   Contains the complete client-side database of the 30 traditional US recipes.
 *   Powers the interactive mobile navigation drawer, header search toggle,
 *   real-time archives filtering, dynamic cards, and ingredients checklist.
 *   Fully commented and design-first as per instructions.
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. RE-USEABLE SYSTEM CORE DATA: THE 30 UNITED STATE RECIPES DATABASE
// ------------------------------------------------------------------------------
const ALL_RECIPES = [
  {
    id: "classic-burger",
    title: "Classic American Burger",
    slug: "classic-burger",
    category: "mains",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "4",
    calories: "520",
    region: "Widespread US",
    description: "The ultimate juicy grilled beef patty served with fresh lettuce, toasted buns, ripe tomatoes, and standard American burger sauce.",
    image: "/images/Classic American Burger.webp",
    ingredients: [
      "1.5 lbs ground beef (80/20 chuck)",
      "4 brioche or standard hamburger buns",
      "4 slices cheddar or American cheese",
      "1 large heirloom tomato, sliced",
      "4 crisp butter lettuce leaves",
      "1 red onion, thinly sliced",
      "2 tbsp unsalted butter (for toasting)",
      "Salt and freshly cracked black pepper to taste",
      "Burger Sauce: 1/3 cup mayonnaise, 2 tbsp ketchup, 1 tbsp sweet pickle relish, 1 tsp yellow mustard"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions and shape gently into flat patties about 3/4-inch thick. Press a slight indentation in the center of each patty to prevent puffing.",
      "In a small bowl, whisk together mayonnaise, ketchup, relish, and mustard until smooth. Set burger sauce aside.",
      "Preheat grill or heavy cast-iron skillet over high-medium heat. Generously season both sides of the patties with salt and pepper.",
      "Grill patties for 3-4 minutes per side for medium doneness. In the last minute, lay a cheese slice over each patty and close grill lid to melt.",
      "Spread melted butter on bun faces and toast on the grill for 30 seconds until golden-brown.",
      "Assemble: spread 1 tbsp of burger sauce on bottom toasted bun, add lettuce, cheesy patty, tomato slices, red onion, and top bun to serve."
    ],
    nutrition: { calories: 520, fat: "32g", satFat: "14g", carbs: "26g", protein: "34g", sodium: "680mg", sugar: "5g" }
  },
  {
    id: "apple-pie",
    title: "Deep Dish Apple Pie",
    slug: "apple-pie",
    category: "desserts",
    prepTime: "30 mins",
    cookTime: "1 hr",
    servings: "8",
    calories: "410",
    region: "New England",
    description: "Traditional double-crust American apple pie spiced with cinnamon and nutmeg, showcasing tender golden baking apples.",
    image: "/images/Deep Dish Apple Pie.webp",
    ingredients: [
      "2 pre-made double pie-crust sheets (or homemade)",
      "6 large baking apples (Granny Smith & Honeywell mix, peeled and sliced)",
      "3/4 cup granulated white sugar",
      "2 tbsp all-purpose flour",
      "1 tsp ground cinnamon",
      "1/4 tsp ground nutmeg",
      "1/4 tsp salt",
      "1 tbsp lemon juice",
      "2 tbsp cold butter, diced into small cubes",
      "1 egg beaten with 1 tbsp water (for egg wash)"
    ],
    instructions: [
      "Preheat your oven to 425°F (218°C) and place kitchen rack in the lower third slot.",
      "In a large bowl, toss the peeled and sliced apples with lemon juice, white sugar, flour, cinnamon, nutmeg, and salt until evenly coated.",
      "Roll out one pie crust disc and press it gently into a 9-inch deep-dish pie pan.",
      "Fill the crust with the spiced apple mixture, piling them slightly high in the center, and dot with cold butter cubes.",
      "Roll out the second pie crust sheet over the apples. Flute or crimp the edges together to seal, and cut 4-5 slits in the top for steam vent.",
      "Brush the entire top crust with egg wash, sprinkle with a pinch of sugar, and bake for 45-50 minutes until apples are tender and crust is deep golden crust. Cool before slicing."
    ],
    nutrition: { calories: 410, fat: "16g", satFat: "7g", carbs: "64g", protein: "4g", sodium: "320mg", sugar: "38g" }
  },
  {
    id: "fluffy-pancakes",
    title: "Fluffy Buttermilk Pancakes",
    slug: "fluffy-pancakes",
    category: "breakfast",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4",
    calories: "350",
    region: "Nationwide",
    description: "Classic featherlight diner-style buttermilk pancakes served warm with real maple syrup and a pat of butter.",
    image: "/images/Fluffy Buttermilk Pancakes.webp",
    ingredients: [
      "2 cups all-purpose flour",
      "3 tbsp granulated sugar",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups fresh buttermilk",
      "2 large eggs",
      "1/4 cup unsalted butter, melted and cooled",
      "1 tsp pure vanilla extract",
      "Extra butter for pan greasing and serving maple syrup"
    ],
    instructions: [
      "In a large bowl, whisk flour, sugar, baking powder, baking soda, and salt together until well integrated.",
      "In a separate bowl, whisk buttermilk, eggs, melted butter, and vanilla extract together.",
      "Pour the wet mixture into the dry ingredients and stir gently using a spatula just until combined (small lumps are expected and desirable).",
      "Heat a large non-stick griddle or skillet over medium-high heat. Coat lightly with a touch of butter.",
      "Pour 1/3-cup scoops of batter onto the hot griddle. Cook until bubbles rise to the surface, start to pop, and the edges look set (about 2-3 minutes).",
      "Flip carefully and cook the other side for an additional 1-2 minutes until beautifully puffed and cooked through. Serve immediately."
    ],
    nutrition: { calories: 350, fat: "9g", satFat: "5g", carbs: "54g", protein: "10g", sodium: "490mg", sugar: "12g" }
  },
  {
    id: "new-york-cheesecake",
    title: "New York Style Cheesecake",
    slug: "new-york-cheesecake",
    category: "desserts",
    prepTime: "30 mins",
    cookTime: "1 hr 15 mins",
    servings: "12",
    calories: "580",
    region: "New York",
    description: "Rich, dense, and ultra-creamy cheesecake sitting snug on a buttery graham cracker crust with a light sour cream topping.",
    image: "/images/New York Style Cheesecake.webp",
    ingredients: [
      "Crust: 1.5 cups graham cracker crumbs, 1/4 cup sugar, 6 tbsp melted butter",
      "Filling: 4 pkgs (32 oz) cream cheese at room temp, 1.25 cups granulated sugar",
      "1/2 cup sour cream at room temp",
      "4 large eggs at room temp",
      "1 tbsp lemon juice, 2 tsp vanilla extract",
      "3 tbsp all-purpose flour"
    ],
    instructions: [
      "Preheat oven to 325°F (163°C). Combine crust ingredients and pack firmly into bottom of a 9-inch springform pan. Bake for 8 minutes, then cool.",
      "Beat cream cheese and sugar in a large stand-mixer until completely smooth. Add sour cream, lemon juice, flour, and vanilla; beat to integrate.",
      "Add eggs one at a time, mixing on low speed just until combined (do not over-incorporate air).",
      "Pour batter onto baked crust. Wrap the outer bottom of springform pan with double layer of heavy alum foil and set inside a roasting pan.",
      "Pour hot water half-way up the sides of springform pan to make a water bath. Bake for 75-80 minutes until edges are set but center giggles.",
      "Turn off oven, open oven door slightly and let rest inside for 1 hour. Chill in refrigerator for at least 6 hours before opening."
    ],
    nutrition: { calories: 580, fat: "42g", satFat: "24g", carbs: "41g", protein: "10g", sodium: "420mg", sugar: "29g" }
  },
  {
    id: "southern-fried-chicken",
    title: "Southern Fried Chicken",
    slug: "southern-fried-chicken",
    category: "mains",
    prepTime: "24 hrs",
    cookTime: "30 mins",
    servings: "6",
    calories: "640",
    region: "Southern States",
    description: "Crispy, shatteringly crunchy skin wrapping succulent buttermilk-marinated chicken spiced with paprika and garlic.",
    image: "/images/Southern Fried Chicken.webp",
    ingredients: [
      "1 regular whole chicken (cut into 8 standard pieces)",
      "Marinade: 3 cups buttermilk, 1 tbsp kosher salt, 1 tbsp hot sauce, 1 tsp garlic powder",
      "Coating: 3 cups all-purpose flour, 1 tbsp sweet paprika, 1 tbsp garlic powder",
      "1 tbsp onion powder, 1 tsp cayenne pepper, 1 tbsp kosher salt, 1 tsp black pepper",
      "1 quart peanut oil or vegetable oil for frying"
    ],
    instructions: [
      "Submerge cut chicken pieces in the seasoned buttermilk marinade. Cover and refrigerate for 4 to 24 hours.",
      "In a large brown bag or deep tray, whisk all flour coating ingredients together.",
      "Remove chicken piece from marinade, let excess buttermilk drip off, then dredge thoroughly in the flour mix until heavily crusted.",
      "Pour oil into deep cast-iron skillet to half-full and heat to 350°F (175°C).",
      "Fry chicken in small batches (do not crowd) for 12-15 minutes, turning occasionally, until gold and cooked to internal temp of 165°F. Drain on wire racks."
    ],
    nutrition: { calories: 640, fat: "38g", satFat: "9g", carbs: "24g", protein: "48g", sodium: "950mg", sugar: "1g" }
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    slug: "chocolate-chip-cookies",
    category: "desserts",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "24",
    calories: "180",
    region: "Massachusetts",
    description: "The classic Toll House chocolate chip cookie recipe with a soft chewy center and crisp butter-baked edges.",
    image: "/images/Chocolate Chip Cookies.webp",
    ingredients: [
      "2.25 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup (2 sticks) unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "1 tsp vanilla extract",
      "2 large eggs",
      "2 cups semi-sweet chocolate chips",
      "1 cup chopped walnuts (optional)"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
      "In a small bowl, whisk flour, baking soda, and salt together; set aside.",
      "In a large bowl, beat softened butter, granulated sugar, brown sugar, and vanilla extract until creamy.",
      "Add eggs one at a time, beating well after each addition. Gradually stir in the flour mixture.",
      "Fold in the chocolate chips and walnuts (if using) evenly into the cookie dough.",
      "Drop rounded tablespoons of dough onto sheets, leaving 2 inches spacing. Bake 9-11 minutes until golden brown; cool on wire racks."
    ],
    nutrition: { calories: 180, fat: "9g", satFat: "5g", carbs: "23g", protein: "2g", sodium: "140mg", sugar: "16g" }
  },
  {
    id: "clam-chowder",
    title: "New England Clam Chowder",
    slug: "clam-chowder",
    category: "soups-salads",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "6",
    calories: "380",
    region: "New England",
    description: "Rich, comforting, and creamy white chowder packed with sea clams, diced bacon, and tender Russet potatoes.",
    image: "/images/New England Clam Chowder.webp",
    ingredients: [
      "4 slices thick-cut bacon, cut into small bits",
      "2 tbsp unsalted butter",
      "1 medium yellow onion, finely diced",
      "2 celery ribs, finely chopped",
      "3 tbsp all-purpose flour",
      "2 cups clam juice (bottled)",
      "2 cans (6.5 oz each) minced sea clams (drain clams and save juice)",
      "2 cups heavy cream or half-and-half",
      "2 medium Russet potatoes, peeled and diced small",
      "Bay leaf, fresh thyme sprigs, salt, pepper"
    ],
    instructions: [
      "In a heavy-bottomed stockpot, cook bacon pieces over medium heat until crispy. Remove bacon with a slotted spoon, leaving grease in pan.",
      "Add butter, onions, and celery to pot. Sauté for 5 minutes until soft and translucent.",
      "Sprinkle flour over veggies and cook, stirring constantly, for 1-2 minutes to paste.",
      "Gradually whisk in reserved clam juices and cream, ensuring no flour lumps remain.",
      "Add potatoes, bay leaf, and thyme. Bring to a low boil, reduce heat to low, and simmer for 15 minutes until potatoes are cooked.",
      "Discard bay leaf and thyme. Stir in the minced clams and simmer for 5 more minutes. Top with bacon bits and serve."
    ],
    nutrition: { calories: 380, fat: "26g", satFat: "15g", carbs: "22g", protein: "14g", sodium: "820mg", sugar: "3g" }
  },
  {
    id: "philly-cheesesteak",
    title: "Philadelphia Cheesesteak",
    slug: "philly-cheesesteak",
    category: "mains",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "2",
    calories: "780",
    region: "Pennsylvania",
    description: "Thinly sliced griddled ribeye steak smothered with melted Provolone (or Cheez Whiz) in a long Italian roll.",
    image: "/images/Philadelphia Cheesesteak.webp",
    ingredients: [
      "1 lb ribeye steak, frozen for 30 minutes, sliced paper-thin",
      "2 soft Hoagie/Italian long rolls",
      "4 slices Provolone cheese or Cheez Whiz",
      "1 medium yellow onion, sliced into strips",
      "1 green bell pepper, sliced into strips (optional)",
      "2 tbsp vegetable oil",
      "Salt and black pepper to taste"
    ],
    instructions: [
      "Heat 1 tbsp oil in a large griddle or cast-iron skillet over medium-high heat. Cook onions (and peppers) until soft and browned. Set aside.",
      "Add remaining oil to the ripping-hot griddle. Separate the paper-thin ribeye slices and sear quickly without moving for 1-2 minutes.",
      "Chop and shred the meat with a spatula as it browns. Season generously with salt and pepper.",
      "Form meat into two long rectangular piles matching the length of hoagie rolls. Top with onions and drape 2 cheese slices over each pile.",
      "Open hoagie rolls and lay facedown over the melting cheese-meat pile. Let steam for 1 minute.",
      "Slide spatula under meat and flip rolls over, tucking meat snugly inside, and serve instantly."
    ],
    nutrition: { calories: 780, fat: "44g", satFat: "14g", carbs: "48g", protein: "48g", sodium: "1150mg", sugar: "4g" }
  },
  {
    id: "buffalo-wings",
    title: "Buffalo Chicken Wings",
    slug: "buffalo-wings",
    category: "soups-salads",
    prepTime: "10 mins",
    cookTime: "30 mins",
    servings: "4",
    calories: "490",
    region: "New York State",
    description: "Crispy fried or baked chicken wings tossed in a spicy, buttery cayenne pepper sauce and served with blue cheese dressing.",
    image: "/images/Buffalo Chicken Wings.webp",
    ingredients: [
      "2 lbs chicken wings & drumettes, patted dry",
      "1 tbsp baking powder (crucial for baked crispiness!)",
      "1/2 tsp kosher salt",
      "Buffalo Sauce: 1/2 cup Frank's RedHot sauce, 1/3 cup unsalted butter melted, 1 tbsp honey",
      "Serving: Celery sticks, carrots, and blue cheese or ranch dressing"
    ],
    instructions: [
      "Preheat oven to 425°F (218°C). Toss dry chicken wings in a bowl with baking powder and salt until lightly coated.",
      "Line a baking sheet with foil and place a wire rack on top. Arrange wings in a single layer with space between them.",
      "Bake for 30 minutes, turning once, until skin is crackly, thin, and deep golden brown.",
      "In a large bowl, whisk Frank's hot sauce, melted butter, and honey together until emulsified.",
      "Transfer hot cooked wings to the bowl of buffalo sauce and toss gently until completely coated. Serve hot with celery and blue cheese dressing."
    ],
    nutrition: { calories: 490, fat: "35g", satFat: "14g", carbs: "5g", protein: "38g", sodium: "1480mg", sugar: "3g" }
  },
  {
    id: "key-lime-pie",
    title: "Key Lime Pie",
    slug: "key-lime-pie",
    category: "desserts",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: "8",
    calories: "360",
    region: "Florida Keys",
    description: "Tangy, sweet Key lime custard poured into a buttery graham cracker crust, topped with fresh whipped cream.",
    image: "/images/Key Lime Pie.webp",
    ingredients: [
      "1.5 cups graham cracker crumbs",
      "1/3 cup granulated sugar",
      "6 tbsp unsalted butter, melted",
      "2 cans (14 oz each) sweetened condensed milk",
      "1/2 cup sour cream",
      "3/4 cup fresh Key lime juice (or standard lime premium juice)",
      "1 tbsp lime zest",
      "whipped cream and lime wheels for garnish"
    ],
    instructions: [
      "Preheat oven to 350°F (177°C). Combine cracker crumbs, sugar, and melted butter. Press firmly into bottom of 9-inch pie pan. Bake 8 minutes; cool.",
      "In a large bowl, whisk sweetened condensed milk, sour cream, Key lime juice, and zest together until smooth.",
      "Pour lime filling into cooked graham crust and slide back into oven.",
      "Bake for exactly 10 minutes until filling is set but still slightly wobbly in center. Do not let brown.",
      "Cool to room temperature, then cover and chill in freezer/refrigerator for at least 4 hours.",
      "Pipe whipped cream stars around the borders, top with lime wheels, and slice."
    ],
    nutrition: { calories: 360, fat: "14g", satFat: "8g", carbs: "52g", protein: "6g", sodium: "210mg", sugar: "42g" }
  },
  {
    id: "texas-brisket",
    title: "Texas Smoked Brisket",
    slug: "texas-brisket",
    category: "mains",
    prepTime: "30 mins",
    cookTime: "12 hrs",
    servings: "12",
    calories: "680",
    region: "Texas Hill Country",
    description: "The holy grail of Texas BBQ: slow-oak-smoked beef brisket rubbed with salt, black pepper, and a dash of garlic.",
    image: "/images/Texas Smoked Brisket.webp",
    ingredients: [
      "1 packer-cut whole beef brisket (10-12 lbs), trimmed",
      "Rub: 1/4 cup coarse black pepper (16 mesh)",
      "Rub: 1/4 cup coarse kosher salt",
      "1 tbsp garlic powder",
      "Wood chunks/logs: Post Oak wood preferred"
    ],
    instructions: [
      "Keep brisket cold to facilitate easy trimming. Slice off excess hard deck fat, leaving consistent 1/4-inch fat cap on fat side.",
      "Combine salt, black pepper, and garlic powder in a shaker. Shake generous coat over entire surface of brisket.",
      "Preheat smoker to 225°F-250°F containing active burning seasoned Oak wood logs.",
      "Place brisket inside smoker, fat side up (or facing heat source). Smoke consistently for 6-8 hours until internal temp hits 165°F.",
      "Wrap beef brisket tightly in peach butcher paper (or aluminum foil) and return to smoker.",
      "Continue cooking for 3-4 hours until probe-tender in the flat section (internal temperature around 203°F). Rest inside a cooler for 2 hours before slicing."
    ],
    nutrition: { calories: 680, fat: "48g", satFat: "18g", carbs: "1g", protein: "58g", sodium: "840mg", sugar: "0g" }
  },
  {
    id: "seafood-gumbo",
    title: "Louisiana Seafood Gumbo",
    slug: "seafood-gumbo",
    category: "mains",
    prepTime: "35 mins",
    cookTime: "2 hrs",
    servings: "8",
    calories: "420",
    region: "Louisiana",
    description: "A dark rich Creole-style gumbo loaded with shrimp, blue crab, okra, and traditional holy trinity seasonings in a deep flour-oil roux.",
    image: "/images/Louisiana Seafood Gumbo.webp",
    ingredients: [
      "Dark Roux: 1/2 cup vegetable oil, 1/2 cup all-purpose flour",
      "1 large green bell pepper, diced",
      "2 large stalks celery, diced",
      "1 medium yellow onion, diced",
      "4 cloves garlic, minced",
      "1 lb fresh okra, sliced in rounds",
      "6 cups seafood/shrimp stock",
      "1 lb raw shrimp, peeled and deveined",
      "1/2 lb lump crab meat or blue crab bodies",
      "1 tbsp Cajun/Creole spice blend, salt, file powder, and white cooked rice"
    ],
    instructions: [
      "In a heavy bottomed Dutch oven, make the dark roux: whisk oil and flour over medium-low heat constantly for 30-40 minutes until chocolate browner color.",
      "Stir the 'holy trinity' (onions, pepper, celery) into roux. Cook 5 minutes, stirring, until softened.",
      "Add garlic and okra. Sauté for another 3 minutes, then pour in warm seafood stock slowly, whisking to prevent lumps.",
      "Stir in Cajun seasonings and bay leaf. Bring to boil, reduce to low, and simmer uncovered for 1-1.5 hours.",
      "Add shrimp and crab meat. Cook gently for 8-10 minutes until raw shellfish turns opaque white and shrimp pink.",
      "Ladle warm soup over cups of white long-grain rice and sprinkle with gumbo file powder if desired."
    ],
    nutrition: { calories: 420, fat: "18g", satFat: "3g", carbs: "28g", protein: "32g", sodium: "1050mg", sugar: "4g" }
  },
  {
    id: "boston-cream-pie",
    title: "Boston Cream Pie",
    slug: "boston-cream-pie",
    category: "desserts",
    prepTime: "30 mins",
    cookTime: "25 mins",
    servings: "10",
    calories: "380",
    region: "Massachusetts",
    description: "Layers of moist vanilla sponge cake sandwiching thick, silky pastry cream and topped with shiny dark chocolate glaze.",
    image: "/images/Boston Cream Pie.webp",
    ingredients: [
      "Cake: 1.5 cups cake flour, 1.5 tsp baking powder, 1/2 tsp salt, 3/4 cup sugar, 1/2 cup soft butter, 2 large eggs, 2/3 cup milk, 1 tsp vanilla extract",
      "Custard: 1.5 cups milk, 4 egg yolks, 1/3 cup sugar, 2.5 tbsp cornstarch, 1 tsp vanilla",
      "Glaze: 4 oz dark chocolate chopped, 1/2 cup heavy cream, 1 tbsp light corn syrup"
    ],
    instructions: [
      "Custard: Whisk egg yolks, sugar, and cornstarch. Heat milk separately, then temper into egg mixture. Cook on stove until thick custard. Chill covered.",
      "Cake: Preheat oven to 350°F (177°C). Grease two 9-inch cake pans. Cream butter and sugar, add eggs and vanilla.",
      "Alternately add dry flour mix and milk. Pour into pans. Bake 20-25 minutes; cool completely.",
      "Glaze: Heat heavy cream and corn syrup. Pour over dark chocolate pieces; whisk until shiny smooth finish.",
      "Assemble: Place one cake layer down, spread custard cream heavily, top with second cake layer. Pour warm chocolate glaze over top layer."
    ],
    nutrition: { calories: 380, fat: "16g", satFat: "9g", carbs: "52g", protein: "6g", sodium: "310mg", sugar: "32g" }
  },
  {
    id: "mac-and-cheese",
    title: "Baked Macaroni and Cheese",
    slug: "mac-and-cheese",
    category: "sides",
    prepTime: "20 mins",
    cookTime: "30 mins",
    servings: "8",
    calories: "450",
    region: "Widespread Southern",
    description: "Creamy baked elbow macaroni covered in rich cheddar and gruyère cheese sauce, topped with toasted buttered breadcrumbs.",
    image: "/images/Baked Macaroni and Cheese.webp",
    ingredients: [
      "1 lb elbow macaroni pasta",
      "1/2 cup unsalted butter",
      "1/2 cup all-purpose flour",
      "4 cups milk (warm)",
      "4 cups shredded sharp cheddar cheese (grate yourself to prevent chalk)",
      "2 cups shredded Gruyere or Monterey Jack cheese",
      "1/2 tsp paprika, 1/4 tsp cayenne, salt, white pepper",
      "Top: 1 cup panko breadcrumbs, 2 tbsp melted butter"
    ],
    instructions: [
      "Preheat oven to 350°F (177°C). Boil macaroni pasta in salted water for 1-2 minutes shy of packaging's al dente recommendation. Drain.",
      "In a deep saucepan, melt butter. Whisk in flour and cook 1 minute. Slowly stream in warm milk while whisking constantly to create a smooth bechamel sauce.",
      "Simmer sauce for 3 minutes, then turn off heat. Stir in 3 cups cheddar and 1.5 cups Gruyere slowly until sauce is smooth cheese sauce.",
      "Combine pasta and cheese sauce. Pour half into 9x13 baking dish, sprinkle remaining cheeses in layer, add remainder of pasta.",
      "Toss crumbs in butter and paprika, sprinkle over macaroni. Bake for 28-30 minutes until bubbling on corners and golden."
    ],
    nutrition: { calories: 450, fat: "24g", satFat: "14g", carbs: "44g", protein: "18g", sodium: "610mg", sugar: "5g" }
  },
  {
    id: "classic-meatloaf",
    title: "Traditional American Meatloaf",
    slug: "classic-meatloaf",
    category: "mains",
    prepTime: "15 mins",
    cookTime: "1 hr",
    servings: "6",
    calories: "390",
    region: "Midwest States",
    description: "Homestyle comfort beef meatloaf seasoned with minced sweet onions, celery, herbs, and finished with garlic-brown sugar ketchup glaze.",
    image: "/images/Traditional American Meatloaf.webp",
    ingredients: [
      "2 lbs ground beef (85/15 lean chuck)",
      "1 cup Italian breadcrumbs",
      "1/2 cup finely diced yellow onion",
      "1/2 cup milk",
      "2 large eggs, beaten",
      "2 tbsp Worcestershire sauce",
      "2 cloves garlic, minced",
      "Glaze: 3/4 cup tomato ketchup, 2 tbsp brown sugar, 1 tbsp apple cider vinegar, 1 tsp onion powder, salt, pepper"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Spray a 9x5 loaf pan lightly with vegetable cooking spray.",
      "In a bowl, soak breadcrumbs in milk for any easy panada. Mix eggs, Worcestershire, and garlic in.",
      "In a large mixing bowl, combine meat, onions, breadcrumb soak, and seasonings. Mix with clean hands just until blended (do not over-squeeze).",
      "Pack meatloaf mixture gently into loaf pan. Combine glaze ingredients and spread half over top of meatloaf.",
      "Bake for 45 minutes. Carefully spread remaining helper glaze over loaf and bake and cook for another 15 minutes.",
      "Cool loaf inside pan for 10 minutes, slice and serve with mashed potatoes."
    ],
    nutrition: { calories: 390, fat: "22g", satFat: "8g", carbs: "18g", protein: "30g", sodium: "730mg", sugar: "11g" }
  },
  {
    id: "bbq-ribs",
    title: "Kansas City Sweet Ribs",
    slug: "bbq-ribs",
    category: "mains",
    prepTime: "20 mins",
    cookTime: "4 hrs",
    servings: "4",
    calories: "720",
    region: "Missouri/Midwest",
    description: "Tender, fall-off-the-bone baby back pork ribs dry-rubbed and slow baked, then glazed with thick sweet-tangy molasses BBQ sauce.",
    image: "/images/Kansas City Sweet Ribs.webp",
    ingredients: [
      "2 full slabs baby back pork ribs (3-4 lbs total)",
      "Dry Rub: 1/4 cup brown sugar, 1 tbsp paprika, 1 tsp chili powder",
      "1 tsp garlic powder, 1 tsp salt, 1/2 tsp cayenne pepper",
      "Sauce: 1.5 cups premium Kansas City sweet-molasses barbecue sauce"
    ],
    instructions: [
      "Preheat oven to 275°F (135°C). Remove the tough membrane (silverskin) from backing bone side of slabs.",
      "Combine rub items and pat dry rib slabs, then coat generously over meat and bones.",
      "Wrap each rack tightly in double layer of heavy aluminum foil on baking sheet. Bake slab for 3 hours until tender.",
      "Remove sheets. Increase oven temperature to 425°F (218°C) or fire up grill.",
      "Carefully unwrap racks, discarding liquid. Slather rib slabs liberally with barbecue sauce.",
      "Bake or grill uncovered for 10-15 minutes, repeating glazing layer once until charred caramel edges form."
    ],
    nutrition: { calories: 720, fat: "48g", satFat: "17g", carbs: "32g", protein: "40g", sodium: "1350mg", sugar: "25g" }
  },
  {
    id: "cobb-salad",
    title: "Classic Cobb Salad",
    slug: "cobb-salad",
    category: "soups-salads",
    prepTime: "20 mins",
    cookTime: "10 mins",
    servings: "4",
    calories: "450",
    region: "California",
    description: "Beautifully composed garden salad featuring crisp lettuce arranged in neat stripes of diced chicken, bacon, avocado, blue cheese, and hard-boiled eggs.",
    image: "/images/Classic Cobb Salad.webp",
    ingredients: [
      "1 head Romaine lettuce, washed and chopped fine",
      "2 cooked chicken breasts, diced neat cubed",
      "4 slices bacon, cooked until crispy and chopped",
      "2 hard-boiled eggs, peeled and diced",
      "1 large Hass avocado, cubed",
      "1 cup cherry tomatoes, halved",
      "1/2 cup crumbled blue cheese",
      "Vinaigrette: 1/3 cup red wine vinegar, 2/3 cup extra virgin olive oil, 1 tsp Dijon, salt, garlic powder"
    ],
    instructions: [
      "Prepare vinaigrette: Whisk vinegar, mustard, salt, pepper. Stream in olive oil slowly until thick emulsion.",
      "Scatter Romaine lettuce base across a large wide serving platter.",
      "In straight rows atop lettuce (abiding by 'E-A-T-C-O-B-B' tradition: Egg, Avocado, Tomato, Chicken, Onion, Bacon, Blue cheese), lay sorted ingredients.",
      "Drizzle dressing over rows right before serving and toss table side."
    ],
    nutrition: { calories: 450, fat: "35g", satFat: "9g", carbs: "12g", protein: "24g", sodium: "720mg", sugar: "3g" }
  },
  {
    id: "classic-cornbread",
    title: "Southern Golden Cornbread",
    slug: "classic-cornbread",
    category: "sides",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "8",
    calories: "210",
    region: "Southern US",
    description: "Classic crumbly, buttery southern cornbread baked in a sizzling hot cast-iron skillet for thick crispy golden edges.",
    image: "/images/Southern Golden Cornbread.webp",
    ingredients: [
      "1.5 cups yellow cornmeal",
      "1/2 cup all-purpose flour",
      "1/4 cup sugar (optional for absolute purists)",
      "1 tsp baking powder, 1/2 tsp baking soda, 1 tsp salt",
      "1.25 cups buttermilk (shaken)",
      "2 large eggs",
      "6 tbsp unsalted butter, melted",
      "1 tbsp lard or bacon fat (for skillet)."
    ],
    instructions: [
      "Preheat oven to 400°F (204°C). Place 10-inch cast iron skillet on rack inside oven with lard/bacon fat to heat.",
      "In a bowl, mix cornmeal, flour, sugar, baking soda, powder, and salt.",
      "In separate pitcher, whisk egg, buttermilk, and melted butter.",
      "Pour wet mix into dries, folding together gently. Carefully pull blazing hot skillet out of oven and swirl melted fat over edges.",
      "Pour cornbread batter into sizzling skillet. Bake for 20 minutes until center springs back up when pressed."
    ],
    nutrition: { calories: 210, fat: "9g", satFat: "5g", carbs: "28g", protein: "5g", sodium: "380mg", sugar: "7g" }
  },
  {
    id: "maryland-crab-cakes",
    title: "Maryland Jumbo Crab Cakes",
    slug: "maryland-crab-cakes",
    category: "mains",
    prepTime: "20 mins",
    cookTime: "12 mins",
    servings: "4",
    calories: "290",
    region: "Maryland",
    description: "Savory, golden pan-fried crab cakes made with sweet, premium Maryland lump blue crab, with minimal filler.",
    image: "/images/Maryland Jumbo Crab Cakes.webp",
    ingredients: [
      "1 lb premium jumbo lump crab meat (drained and picked for shells)",
      "1/2 cup saltine crackers crushed crumbs",
      "1/4 cup mayonnaise",
      "1 large egg beaten",
      "1 tbsp Dijon mustard, 1 tsp Worcestershire, 1 tbsp lemon juice",
      "1 tbsp Old Bay seasoning",
      "2 tbsp melted butter, fresh parsley chopped, lemon wedges"
    ],
    instructions: [
      "In a medium bowl, whisk mayonnaise, egg, Old Bay, Worcestershire, lemon, and mustard together.",
      "Add picked crab meat and cracker crumbs. Fold with flat hand/spatula VERY gently to maintain lump texture.",
      "Divide into 4 patties, press shapes, cover and chill in cooler for 1 hour.",
      "Heat broiler or large skillet. Brush skillet with butter or coat, and sear patties for 5-6 minutes per side until bubbling hot."
    ],
    nutrition: { calories: 290, fat: "16g", satFat: "4g", carbs: "11g", protein: "24g", sodium: "1120mg", sugar: "1g" }
  },
  {
    id: "louisiana-jambalaya",
    title: "Louisiana Cajun Jambalaya",
    slug: "louisiana-jambalaya",
    category: "mains",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: "6",
    calories: "490",
    region: "Louisiana Creole",
    description: "Classic one-pot seasoned rice dish containing smoky Andouille sausage, seasoned chicken breast pieces, dynamic shrimp, vegetables and Cajuns spices.",
    image: "/images/Louisiana Cajun Jambalaya.webp",
    ingredients: [
      "1 lb Andouille sausage, sliced into rounds",
      "1/2 lb chicken thigh meat, chopped cubes",
      "1/2 lb shrimp raw, peeled",
      "Holy trinity: 1 green pepper, 1 onion, 2 celery ribs, chopped",
      "4 cloves garlic, minced",
      "1 can (14 oz) fire-roasted crushed tomatoes",
      "1.5 cups raw long-grain white rice",
      "3 cups chicken stock, bay leaf, Cajun spices to taste"
    ],
    instructions: [
      "In deep Dutch oven over medium, brown Andouille rounds. Remove sausage, then brown chicken cubes in same grease.",
      "Sauté celery, onions, pepper, and garlic until soft. Add rice, stock, canned tomatoes, sausage, chicken, spices and bay leaf.",
      "Bring pot to boil, drop flame down, cover and simmer for 25 minutes until rice is tender and liquid absorbed.",
      "Lay raw cleaned shrimp on top of hot rice, replace lid and steam for 6-8 minutes until pink. Fluff with fork."
    ],
    nutrition: { calories: 490, fat: "22g", satFat: "7g", carbs: "42g", protein: "32g", sodium: "1280mg", sugar: "5g" }
  },
  {
    id: "classic-pumpkin-pie",
    title: "Classic Homemade Pumpkin Pie",
    slug: "classic-pumpkin-pie",
    category: "desserts",
    prepTime: "15 mins",
    cookTime: "55 mins",
    servings: "8",
    calories: "320",
    region: "New England / National",
    description: "Richly spiced spiced custard sweet pumpkin pie flavored with clove, nutmeg, ginger and baked inside flaky pastry crust.",
    image: "/images/Classic Homemade Pumpkin Pie.webp",
    ingredients: [
      "1 standard rolled pie-crust pastry sheet",
      "1 can (15 oz) pure pumpkin puree",
      "1 can (12 oz) evaporated milk",
      "2 large eggs, beaten",
      "3/4 cup granulated white sugar",
      "1 tsp ground cinnamon, 1/2 tsp ginger, 1/4 tsp nutmeg, 1/4 tsp cloves",
      "1/2 tsp kosher salt, whipped cream topping"
    ],
    instructions: [
      "Preheat baking oven to 425°F (218°C). Lay pastry sheet in solid 9-inch metal pie pan.",
      "Whisk sugar, cinnamon, ginger, cloves, and salt into a small bowl.",
      "In deep mix container, beat eggs, pumpkin puree, evaporated milk, and seasonings until uniform smooth glaze.",
      "Pour into pie pan. Bake at 425°F for 15 minutes, then turn down temp to 350°F (177°C).",
      "Bake for 40 more minutes until a knife inserted in center comes out clean. Serve chilled with whipped cream."
    ],
    nutrition: { calories: 320, fat: "12g", satFat: "5g", carbs: "44g", protein: "6g", sodium: "280mg", sugar: "28g" }
  },
  {
    id: "southern-pecan-pie",
    title: "Southern Bourbon Pecan Pie",
    slug: "southern-pecan-pie",
    category: "desserts",
    prepTime: "15 mins",
    cookTime: "50 mins",
    servings: "8",
    calories: "450",
    region: "Georgia / Southern",
    description: "A decadent, sweet, gooey dark syrup pecan custard filling infused with real Kentucky bourbon inside a flaky pastry case.",
    image: "/images/Southern Bourbon Pecan Pie.webp",
    ingredients: [
      "1 prepped pie crust sheet",
      "1.5 cups whole dark pecan halves",
      "3 large eggs, beaten",
      "1 cup dark corn syrup or pure syrup equivalent",
      "1/2 cup brown sugar packed, 4 tbsp melted butter",
      "2 tbsp Kentucky Bourbon whiskey, 1 tsp vanilla digest, salt"
    ],
    instructions: [
      "Roll pastry sheet in 9-inch baking dish. Preheat clean oven to 350°F (177°C).",
      "Scatter pecan halves uniformly across bottom of crust sheet.",
      "Whisk eggs, corn syrup, vanilla, salt, bourbon, and liquid butter recursively.",
      "Inundate backing pecans with dynamic batter syrup. Bake 50 minutes until filling has set. Cool completely before cutting."
    ],
    nutrition: { calories: 450, fat: "22g", satFat: "6g", carbs: "58g", protein: "4g", sodium: "210mg", sugar: "44g" }
  },
  {
    id: "classic-banana-split",
    title: "Classic Soda Fountain Banana Split",
    slug: "classic-banana-split",
    category: "desserts",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: "2",
    calories: "510",
    region: "Pennsylvania",
    description: "The classic American parlor sundae: a split banana loaded with chocolate, vanilla, and strawberry ice cream, topped with sauces, nuts, and cherries.",
    image: "/images/Classic Soda Fountain Banana Split.webp",
    ingredients: [
      "1 ripe firm banana, peeled and split lengthwise",
      "1 scoop strawberry ice cream, 1 scoop chocolate ice cream, 1 scoop vanilla ice cream",
      "Chocolate syrup glaze, strawberry syrup glaze, pineapple glaze",
      "whipped cream can, chopped walnuts or peanuts, maraschino cherries"
    ],
    instructions: [
      "Lay split banana halves flat inside an oblong glass boat bowl.",
      "Sit strawberry, vanilla, and chocolate scoops in line in between split banana halves.",
      "Drizzle pineapple sauce over vanilla, strawberry sauce over strawberry, and hot chocolate fudge over chocolate scoops.",
      "Adorn with whipped cream peaks, minced crispy walnuts, and maraschino cherries on high peak."
    ],
    nutrition: { calories: 510, fat: "22g", satFat: "12g", carbs: "72g", protein: "6g", sodium: "140mg", sugar: "54g" }
  },
  {
    id: "eggs-benedict",
    title: "Traditional Eggs Benedict",
    slug: "eggs-benedict",
    category: "breakfast",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "2",
    calories: "450",
    region: "New York City",
    description: "Perfectly poached farm eggs and grilled Canadian bacon laid atop toasted English muffin halves, coated with luscious warm lemon hollandaise sauce.",
    image: "/images/Traditional Eggs Benedict.webp",
    ingredients: [
      "2 splits English muffins toasted",
      "4 fresh poached eggs",
      "4 slices Canadian bacon grilled",
      "Hollandaise: 3 egg yolks, 1 tbsp lemon juice, 1 stick warm unsalted butter, salt, cayenne"
    ],
    instructions: [
      "In a blender jar, place 3 egg yolks and lemon juice. Pulse to emulsify.",
      "Slowly stream in sizzling warm melted butter with blender running on low. Sauce will instantly emulsify into a beautiful warm yellow glaze.",
      "Grill bacon on flat skillet. Poach eggs in simmering vinegar water bath recursively.",
      "Assemble: toasted muffin half, grilled Canadian bacon, poached egg, heavy ladle of warm Hollandaise, paprika pinch."
    ],
    nutrition: { calories: 450, fat: "32g", satFat: "15g", carbs: "26g", protein: "18g", sodium: "820mg", sugar: "2g" }
  },
  {
    id: "yankee-pot-roast",
    title: "Yankee Pot Roast",
    slug: "yankee-pot-roast",
    category: "mains",
    prepTime: "15 mins",
    cookTime: "3 hrs",
    servings: "6",
    calories: "510",
    region: "New England",
    description: "Savory slow-braised beef chuck roast cooked fork-tender with beef broth and loaded with sweet carrots, onions, and thick baby potatoes.",
    image: "/images/Yankee Pot Roast.webp",
    ingredients: [
      "3-4 lbs whole beef chuck roast bone-out",
      "Holy veggies: 4 carrots thick chopped, 1 lb baby red potatoes halved, 1 yellow onion wedged",
      "Stock: 2 cups beef broth, 1 cup dry red wine, 2 cloves garlic",
      "herby: 2 bay leaves, fresh rosemary, thyme, salt, pepper"
    ],
    instructions: [
      "Pat beef chuck roast dry and season heavily with salt and pepper. Brown deeply in hot Dutch oven oil on all sides.",
      "Remove meat. Add onions and garlic to pot, cooking for 3 minutes. Deglaze pot with red wine, scraping up bits.",
      "Lay roast back in pot. Pour beef broth, adding rosemary and thyme bundles.",
      "Cover and simmer on low for 2 hours, then add baby potatoes and carrots.",
      "Cook for another 45-60 minutes until meat breaks apart with fork and veg is soft. Slice roast and spoon juices."
    ],
    nutrition: { calories: 510, fat: "26g", satFat: "11g", carbs: "22g", protein: "42g", sodium: "610mg", sugar: "4g" }
  },
  {
    id: "chicago-deep-dish-pizza",
    title: "Chicago Deep Dish Pizza",
    slug: "chicago-deep-dish-pizza",
    category: "mains",
    prepTime: "1 hr 30 mins",
    cookTime: "30 mins",
    servings: "4",
    calories: "620",
    region: "Illinois / Midwest",
    description: "Classic deep-dish butter crust pizza layered with sausage patties, heaps of mozzarella cheese, and chunky crushed sweet tomatoes.",
    image: "/images/Chicago Deep Dish Pizza.webp",
    ingredients: [
      "Dough: 2 cups flour, 1/3 cup cornmeal, 1 tsp yeast, 3 tbsp butter, olive oil",
      "Inside: 1/2 lb sweet Italian sausage crumbles, 3 cups sliced mozzarella cheese slices",
      "Sauce: 2 cups chunky pure crushed tomatoes cooked with garlic and oregano, basil"
    ],
    instructions: [
      "Prepare cornmeal yeast dough, knead with butter for classic crumbly deep dish texture, raise and stretch into 10-inch cake pans.",
      "Lay sliced mozzarella cheese directly on raw dough bottom recursively.",
      "Press the raw Italian sausage bits across cheese, adding mushrooms or pepperoni (if using).",
      "Spoon thick chunks sauce over toppings, sprinkle Parmesan, and bake at 425°F (218°C) for 25-30 minutes until bubbling."
    ],
    nutrition: { calories: 620, fat: "32g", satFat: "14g", carbs: "56g", protein: "28g", sodium: "1250mg", sugar: "6g" }
  },
  {
    id: "maine-lobster-roll",
    title: "Maine Lobster Roll",
    slug: "maine-lobster-roll",
    category: "mains",
    prepTime: "15 mins",
    cookTime: "5 mins",
    servings: "2",
    calories: "450",
    region: "Maine / Northeast",
    description: "Sweet, poached chunk lobster meat tossed gently with a dash of premium mayonnaise, fresh lemon juice, celery, inside butter-griddled split-top New England buns.",
    image: "/images/Maine Lobster Roll.webp",
    ingredients: [
      "1 lb cooked chilled lobster meat cubed",
      "2 original New England style split-top hot dog buns",
      "2 tbsp premium mayonnaise, 1 tsp lemon juice, 1/4 cup celery stick finely diced",
      "2 tbsp unsalted butter melted, chives minced, salt, pepper"
    ],
    instructions: [
      "In a medium bowl, toss cooked chilled lobster chunks with celery, mayo, lemon, and seasonings very gently.",
      "Brush outer sides of split-top buns with melted butter.",
      "Toast buns on flat pan over medium heat until outer faces are beautifully golden brown.",
      "Pack splits tightly with the cold seasoned lobster chunks. Top with fresh chopped chives."
    ],
    nutrition: { calories: 450, fat: "22g", satFat: "8g", carbs: "28g", protein: "32g", sodium: "780mg", sugar: "2g" }
  },
  {
    id: "biscuits-and-gravy",
    title: "Southern Biscuits and Gravy",
    slug: "biscuits-and-gravy",
    category: "breakfast",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "4",
    calories: "540",
    region: "Appalachia / South",
    description: "Flaky, hot buttermilk baking biscuits split and smothered in a thick sausage skillet milk gravy spiked with black pepper.",
    image: "/images/Southern Biscuits and Gravy.webp",
    ingredients: [
      "4 jumbo freshly baked buttermilk biscuits",
      "1 lb premium pork breakfast sausage",
      "1/3 cup all-purpose flour",
      "3 cups whole milk warm",
      "1 tsp freshly ground black pepper (course), salt to taste"
    ],
    instructions: [
      "Brown breakfast pork sausage crumbles in deep iron skillet. Do not drain remaining grease cooking oil.",
      "Sprinkle flour over cooked sausage bits. Stir recursively with spatula to coat sausage and form paste.",
      "Gradually pour in warm whole milk, whisking constantly. Simmer for 5-8 minutes until thick gravies form.",
      "Split newly baked warm biscuits in half, lay on plates and flood heavily with Andouille/pepper sausage gravy."
    ],
    nutrition: { calories: 540, fat: "32g", satFat: "15g", carbs: "42g", protein: "18g", sodium: "1120mg", sugar: "6g" }
  },
  {
    id: "classic-sloppy-joes",
    title: "Classic American Sloppy Joes",
    slug: "classic-sloppy-joes",
    category: "mains",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "4",
    calories: "380",
    region: "Midwest States",
    description: "Savory-sweet simmered ground beef in a rich, tangy tomato, brown sugar, mustard and green pepper sauce served inside soft hamburger buns.",
    image: "/images/Classic American Sloppy Joes.webp",
    ingredients: [
      "1 lb lean ground beef chuck",
      "1/2 yellow onion minced, 1/2 green bell pepper minced",
      "2 cloves garlic, minced",
      "Sauce: 3/4 cup tomato ketchup, 1 tbsp yellow mustard, 1 tbsp Worcestershire",
      "1 tbsp brown sugar, salt, black pepper, toasted hamburger buns"
    ],
    instructions: [
      "Brown ground beef in a skillet. Add onions, bell pepper, and garlic; sauté until vegetables are tender.",
      "Drain excess oil. Pour ketchup, mustard, Worcestershire, brown sugar, and seasonings directly into pan.",
      "Simmer on low-medium flame for 10-12 minutes until thick meat sauce slurry forms.",
      "Ladle high scoops of sweet meat mix into bottom toasted hamburger buns and close top."
    ],
    nutrition: { calories: 380, fat: "14g", satFat: "6g", carbs: "34g", protein: "28g", sodium: "840mg", sugar: "12g" }
  },
  {
    id: "georgia-peach-cobbler",
    title: "Georgia Peach Cobbler",
    slug: "georgia-peach-cobbler",
    category: "desserts",
    prepTime: "15 mins",
    cookTime: "40 mins",
    servings: "8",
    calories: "340",
    region: "Georgia",
    description: "Sweet, juicy baking peaches tucked underneath a hot golden buttermilk drop biscuit pie crust pastry layer.",
    image: "/images/Georgia Peach Cobbler.webp",
    ingredients: [
      "Filling: 5 fresh peaches pitted sliced, 1/2 cup sugar, 1 tbsp flour, 1 tsp cinnamon, lemon juice",
      "Batter crust: 1 cup flour, 1 cup sugar, 1 tbsp baking powder, 1/2 tsp salt, 3/4 cup milk, 1 stick butter"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C). Melt 1 stick of butter inside a deep 9x13 baking dish.",
      "Whisk flour, sugar, baking powder, and milk inside mixing container to create simple thick batter.",
      "Pour batter inside hot baking dish over melted butter. Do not mix.",
      "Scatter seasoned sugar peaches over top of batter layer. Bake 40 minutes until golden cookie-biscuit top forms."
    ],
    nutrition: { calories: 340, fat: "12g", satFat: "7g", carbs: "56g", protein: "4g", sodium: "280mg", sugar: "38g" }
  }
];

// ------------------------------------------------------------------------------
// 2. HELPER UTILITY FUNCTIONS (Dynamic layouts rendering)
// ------------------------------------------------------------------------------

/**
 * Creates and templates a clean, professional recipe card component
 * @param {Object} item - individual recipe db record
 * @returns {string} stringified raw semantic HTML of the card
 */
function compileRecipeCardHtml(item) {
  // Gracefully use local images or fallback SVGs or high quality Unsplash illustrations
  // Since the user asks to use placeholder images in /images, we'll map the image path
  // but if it's missing, let's gracefully load beautiful culinary themed URLs to ensure high visual design fallback!
  const imageSrc = item.image;

  return `
    <article class="recipe-card" id="card-${item.id}">
      <div class="recipe-card-img-wrapper">
        <span class="recipe-card-category">${item.category}</span>
        <img src="${imageSrc}" alt="${item.title}" class="recipe-card-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600';">
      </div>
      <div class="recipe-card-content">
        <div class="recipe-card-meta">
          <div class="recipe-card-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${item.prepTime}</span>
          </div>
          <div class="recipe-card-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
            <span>${item.region}</span>
          </div>
        </div>
        <h3 class="recipe-card-title">
          <a href="/recipes/${item.slug}.html">${item.title}</a>
        </h3>
        <p class="recipe-card-desc">${item.description}</p>
        <div class="recipe-card-footer">
          <span class="recipe-card-region">${item.calories} kCal</span>
          <a href="/recipes/${item.slug}.html" class="recipe-card-link">
            <span>View Recipe</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ------------------------------------------------------------------------------
// 3. EVENT LISTENER REGISTRATION & ROUTING
// ------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupNavigationDrawer();
  setupHeaderSearch();
  setupNewsletterForm();
  setupContactForm();
  setupActiveNavHighlight();
  setupCookieConsent();

  // Dynamic Page Specific Handlers
  const path = window.location.pathname;

  if (path.endsWith("index.html") || path === "/" || path === "") {
    renderHomeSections();
  } else if (path.endsWith("recipes.html")) {
    setupRecipesArchiveFilter();
  } else if (path.includes("/recipes/")) {
    setupRecipeDetailScript();
  }
});

// ------------------------------------------------------------------------------
// 4. INTERACTIVE GLOBAL INTERFACES (Mobile Menu, Search toggles)
// ------------------------------------------------------------------------------

/**
 * Orchestrates the sliding Drawer Menu for smaller screen configurations
 */
function setupNavigationDrawer() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");

  if (!hamburgerBtn || !mobileDrawer || !drawerBackdrop) return;

  function toggleDrawer() {
    const isExpanded = hamburgerBtn.classList.toggle("is-active");
    mobileDrawer.classList.toggle("open");
    drawerBackdrop.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", isExpanded);
  }

  hamburgerBtn.addEventListener("click", toggleDrawer);
  drawerBackdrop.addEventListener("click", toggleDrawer);
}

/**
 * Governs the sliding overlay search form in the header
 */
function setupHeaderSearch() {
  const searchToggleBtn = document.getElementById("search-toggle-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const headerSearchForm = document.getElementById("header-search-form");
  const headerSearchInput = document.getElementById("header-search-input");

  if (!searchToggleBtn || !searchOverlay) return;

  searchToggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = searchOverlay.classList.toggle("open");
    if (isOpen) {
      headerSearchInput && headerSearchInput.focus();
    }
  });

  // Tap background out of form to dismiss
  document.addEventListener("click", (e) => {
    if (searchOverlay.classList.contains("open") && !searchOverlay.contains(e.target) && e.target !== searchToggleBtn) {
      searchOverlay.classList.remove("open");
    }
  });

  if (headerSearchForm) {
    headerSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = headerSearchInput.value.trim();
      if (query) {
        window.location.href = `/recipes.html?search=${encodeURIComponent(query)}`;
      }
    });
  }
}

/**
 * Self-highlight current navigation link
 */
function setupActiveNavHighlight() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    // Check if link href matches path
    const href = link.getAttribute("href");
    if (href && (currentPath.endsWith(href) || (currentPath === "/" && href === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ------------------------------------------------------------------------------
// 5. LANDING MAIN PAGE VISUAL LAYOUTS (index.html)
// ------------------------------------------------------------------------------
function renderHomeSections() {
  // Grab containers
  const featuredGrid = document.getElementById("featured-recipes-grid");
  const latestGrid = document.getElementById("latest-recipes-grid");

  if (!featuredGrid && !latestGrid) return;

  // Let's grab featured items
  // Let's declare first 3 as featured recipes
  const featured = ALL_RECIPES.slice(0, 3);
  // Let's declare next 3 as latest recipes
  const latest = ALL_RECIPES.slice(3, 6);

  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map(item => compileRecipeCardHtml(item)).join('');
  }

  if (latestGrid) {
    latestGrid.innerHTML = latest.map(item => compileRecipeCardHtml(item)).join('');
  }
}

// ------------------------------------------------------------------------------
// 6. RECIPE ARCHIVES DIRECTORY SCRIPTS (recipes.html)
// ------------------------------------------------------------------------------
function setupRecipesArchiveFilter() {
  const archiveGrid = document.getElementById("archive-recipes-grid");
  const searchMeta = document.getElementById("search-results-meta");
  const archiveSearchInput = document.getElementById("archive-search-input");

  if (!archiveGrid) return;

  // Track state of selected values
  let currentCategory = "all";
  let currentRegion = "all";
  let searchRawQuery = "";

  // Check URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  const categoryParam = urlParams.get("category");

  if (searchParam) {
    searchRawQuery = searchParam.toLowerCase();
    if (archiveSearchInput) archiveSearchInput.value = searchParam;
  }
  if (categoryParam) {
    currentCategory = categoryParam;
  }

  // Filter rendering machine
  function filterAndRender() {
    let filtered = ALL_RECIPES;

    // 1. Run category matching
    if (currentCategory !== "all") {
      filtered = filtered.filter(recipe => recipe.category === currentCategory);
    }

    // 2. Run region matching
    if (currentRegion !== "all") {
      filtered = filtered.filter(recipe => recipe.region.toLowerCase().includes(currentRegion.toLowerCase()));
    }

    // 3. Run string search query matching
    if (searchRawQuery.trim() !== "") {
      filtered = filtered.filter(recipe => {
        return (
          recipe.title.toLowerCase().includes(searchRawQuery) ||
          recipe.description.toLowerCase().includes(searchRawQuery) ||
          recipe.region.toLowerCase().includes(searchRawQuery) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(searchRawQuery))
        );
      });
    }

    // Render cards
    if (filtered.length === 0) {
      archiveGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-size: 1.25rem;">No recipes found fitting your criteria.</p>
          <button id="reset-filters-btn" class="btn btn-primary" style="margin-top: 1rem;">Clear All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-filters-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          currentCategory = "all";
          currentRegion = "all";
          searchRawQuery = "";
          if (archiveSearchInput) archiveSearchInput.value = "";
          // update button states
          document.querySelectorAll("[data-category-filter]").forEach(btn => btn.classList.remove("active"));
          const allBtn = document.querySelector("[data-category-filter='all']");
          if (allBtn) allBtn.classList.add("active");
          const regSelect = document.getElementById("filter-region-select");
          if (regSelect) regSelect.value = "all";
          filterAndRender();
        });
      }
    } else {
      archiveGrid.innerHTML = filtered.map(item => compileRecipeCardHtml(item)).join('');
    }

    // Update result description metadata
    if (searchMeta) {
      searchMeta.textContent = `Showing ${filtered.length} recipe${filtered.length === 1 ? '' : 's'} matching your selections`;
    }
  }

  // Bind category options buttons
  const categoryFilters = document.querySelectorAll("[data-category-filter]");
  categoryFilters.forEach(button => {
    // Highlight self if state hits
    const cat = button.getAttribute("data-category-filter");
    if (cat === currentCategory) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }

    button.addEventListener("click", () => {
      categoryFilters.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      currentCategory = cat;
      filterAndRender();
    });
  });

  // Bind Region drop downs
  const regionSelector = document.getElementById("filter-region-select");
  if (regionSelector) {
    regionSelector.addEventListener("change", (e) => {
      currentRegion = e.target.value;
      filterAndRender();
    });
  }

  // Bind text search box
  if (archiveSearchInput) {
    archiveSearchInput.addEventListener("input", (e) => {
      searchRawQuery = e.target.value.toLowerCase();
      // clean url state to be clean for normal typing
      const newUrl = window.location.pathname + (e.target.value ? `?search=${encodeURIComponent(e.target.value)}` : '');
      window.history.replaceState({ path: newUrl }, '', newUrl);
      filterAndRender();
    });
  }

  // Kickoff first run
  filterAndRender();
}

// ------------------------------------------------------------------------------
// 7. SPECIFIC ACTIVE RECIPE SUBPAGES SCRIPTING (inside /recipes/)
// ------------------------------------------------------------------------------
function setupRecipeDetailScript() {
  // 7.1 Interactive checkable list for Ingredients
  const checklistItems = document.querySelectorAll(".ingredient-item");
  checklistItems.forEach(item => {
    const chk = item.querySelector(".ingredient-checkbox");
    if (chk) {
      chk.addEventListener("change", () => {
        // Class modifications or checked strikethroughs handled in CSS
      });

      // Tap whole wrap padding to flip checkbox
      item.addEventListener("click", (e) => {
        if (e.target !== chk) {
          chk.checked = !chk.checked;
          // Trigger change manually to check off visually
          const event = new Event("change");
          chk.dispatchEvent(event);
        }
      });
    }
  });

  // 7.2 Pull 3 Related Recipes dynamically inside bottom layout
  // We discover matches which have identical category or regions
  const relatedGrid = document.getElementById("related-recipes-grid");
  const currentRecipeId = relatedGrid ? relatedGrid.getAttribute("data-current-recipe") : null;

  if (relatedGrid && currentRecipeId) {
    // Discover recipe object
    const selfObj = ALL_RECIPES.find(r => r.id === currentRecipeId);
    if (selfObj) {
      // Find matches where category is identical or tags match (excluding self)
      let matches = ALL_RECIPES.filter(r => r.id !== currentRecipeId && (r.category === selfObj.category || r.region === selfObj.region));

      // Fallback to random if not enough
      if (matches.length < 3) {
        const fallbacks = ALL_RECIPES.filter(r => r.id !== currentRecipeId && !matches.includes(r));
        matches = matches.concat(fallbacks.slice(0, 3 - matches.length));
      }

      // Cut to exactly three
      const finalThree = matches.slice(0, 3);
      relatedGrid.innerHTML = finalThree.map(item => compileRecipeCardHtml(item)).join('');
    }
  }
}

// ------------------------------------------------------------------------------
// 8. CONTACT & NEWSLETTER FORMS (Submission toast handling mocks)
// ------------------------------------------------------------------------------

/**
 * Bind footer subscription newsletter submission
 */
function setupNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  const successAlert = document.getElementById("newsletter-success-toast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector(".newsletter-email-input").value;
    if (email) {
      // Show success
      if (successAlert) {
        successAlert.style.display = "flex";
        form.reset();
        setTimeout(() => {
          successAlert.style.display = "none";
        }, 5000);
      }
    }
  });
}

/**
 * Bind contact page submission
 */
function setupContactForm() {
  const form = document.getElementById("contact-webform");
  const successAlert = document.getElementById("contact-success-toast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulate API posting
    if (successAlert) {
      successAlert.style.display = "flex";
      form.reset();
      window.scrollTo({ top: successAlert.offsetTop - 120, behavior: "smooth" });
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 7000);
    }
  });
}

/**
 * Setup Google AdSense Compliant Privacy & Cookie Consent manager banner dynamically.
 */
function setupCookieConsent() {
  const consentSaved = localStorage.getItem("cookieConsentStatus");
  if (consentSaved === "accepted" || consentSaved === "declined") {
    return; // Already resolved
  }

  // Create the banner container
  const banner = document.createElement("div");
  banner.className = "privacy-consent-banner";
  banner.id = "cookie-consent-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie Consent Notice");

  banner.innerHTML = `
    <div class="consent-header">
      <span class="consent-icon">🍪</span>
      <h3 class="consent-title">Cookie & Privacy Notice</h3>
    </div>
    <p class="consent-text">
      We use cookies and partner tracking technologies via networks like <strong>Google AdSense</strong> to deliver personalized culinary ads, analyze our traffic, and enhance your recipe browsing. Read our full disclosure in our <a href="/privacy-policy.html" style="color: var(--color-accent); text-decoration: underline; font-weight: 600;">Privacy Policy</a>.
    </p>
    <div class="consent-actions">
      <button class="consent-btn consent-btn-accept" id="consent-btn-accept">Accept All</button>
      <button class="consent-btn consent-btn-decline" id="consent-btn-decline">Decline</button>
    </div>
  `;

  document.body.appendChild(banner);

  // Trigger smooth entrance animation after a slight delay
  setTimeout(() => {
    banner.classList.add("show");
  }, 1200);

  // Button interaction handlers
  const acceptBtn = document.getElementById("consent-btn-accept");
  const declineBtn = document.getElementById("consent-btn-decline");

  if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsentStatus", "accepted");
      dismissConsentBanner(banner);
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsentStatus", "declined");
      dismissConsentBanner(banner);
    });
  }
}

function dismissConsentBanner(banner) {
  if (!banner) return;
  banner.classList.remove("show");
  setTimeout(() => {
    banner.remove();
  }, 500);
}
