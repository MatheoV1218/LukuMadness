const placeholder =
  "https://placehold.co/600x600/e9e5df/1a1a1a?text=LukuMadness";

const menuData = [
  {
    category: "Featured Items",
    items: [
      {
        name: "Pastrami Panini Sandwich",
        price: "$18.24",
        description:
          "House mayo, provolone, pastrami, pickled jalapeños, sauteed onions.",
        image: placeholder,
        popular: "#1 most liked",
      },
      {
        name: "Lukumadness Traditional",
        price: "$13.49",
        description:
          "Traditional Lukumadness donuts with honey, cinnamon and crushed walnuts.",
        image: placeholder,
        popular: "#2 most liked",
      },
      {
        name: "Lukumadness Dubai Chocolate",
        price: "$20.00",
        description:
          "Indulge in Greek doughnuts topped with Nutella, pistachio drizzle, crushed pistachio and kataifi.",
        image: placeholder,
        popular: "#3 most liked",
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Picked For You",
    items: [
      {
        name: "Spinach Feta Pie (Spanakopita)",
        price: "$12.99",
        description: "Flaky pastry filled with spinach and cheese.",
        image: placeholder,
      },
      {
        name: "Bomboloni Bavarian",
        price: "$12.49",
        description: "Sweet Italian doughnuts filled with creamy Bavarian cream.",
        image: placeholder,
      },
      {
        name: "Bougatsa - Greek Custard Sweet",
        price: "$14.59",
        description:
          "Crispy layers of golden phyllo pastry filled with warm, creamy custard and powdered sugar.",
        image: placeholder,
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: placeholder,
      },
      {
        name: "Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth coffee in a 16 oz serving.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Lukumadness (Greek Doughnuts)",
    items: [
      {
        name: "Lukumadness Pistachio Heaven",
        price: "$18.45",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Lukumadness Dubai Chocolate",
        price: "$20.00",
        description:
          "Indulge in Greek doughnuts topped with Nutella, pistachio drizzle, crushed pistachio and kataifi.",
        image: placeholder,
      },
      {
        name: "Lukumadness Fruit Symphony",
        price: "$17.55",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Lukumadness Mount Olympus",
        price: "$18.90",
        description: "Traditional Greek-style doughnuts.",
        image: placeholder,
      },
      {
        name: "Lukumadness Traditional",
        price: "$13.49",
        description:
          "Traditional Lukumadness donuts with honey, cinnamon and crushed walnuts.",
        image: placeholder,
      },
      {
        name: "Lukumadness Dulce De Leche",
        price: "$15.55",
        description: "Sweet Greek doughnuts filled with dulce de leche.",
        image: placeholder,
      },
      {
        name: "Lukumadness Smores",
        price: "$17.55",
        description:
          "Greek doughnuts filled with chocolate and topped with marshmallows.",
        image: placeholder,
      },
      {
        name: "Lukumadness Gold'n Cream",
        price: "$17.55",
        description: "Greek-style doughnuts filled with a rich cream.",
        image: placeholder,
      },
      {
        name: "Lukumadness PB Cups",
        price: "$18.90",
        description:
          "PB Lukumadness donuts with PB syrup, Nutella / dark Belgian chocolate and PB cups.",
        image: placeholder,
      },
      {
        name: "Lukumadness Classic",
        price: "$12.50",
        description: "Classic Lukumadness donuts with honey and cinnamon sugar.",
        image: placeholder,
      },
      {
        name: "Madness Special",
        price: "$18.90",
        description: "Create your own Lukumadness. Pick any of three toppings.",
        image: placeholder,
      },
      {
        name: "Madness Box",
        price: "$29.72",
        description: "20 pieces and add two of your choice toppings!",
        image: placeholder,
      },
    ],
  },

  {
    category: "Hot Coffee & More",
    items: [
      {
        name: "Espresso Shot",
        price: "$5.07",
        description: "Rich and bold coffee concentrate.",
        image: placeholder,
      },
      {
        name: "Latte 16 oz",
        price: "$6.75",
        description: "Rich and smooth espresso-style coffee in a 16 oz serving.",
        image: placeholder,
      },
      {
        name: "Latte 20 oz",
        price: "$7.42",
        description: "Rich and smooth coffee in a 20 oz serving.",
        image: placeholder,
      },
      {
        name: "Brewed Coffee 16 oz",
        price: "$4.39",
        description: "Rich and smooth coffee in a 16 oz serving.",
        image: placeholder,
      },
      {
        name: "Brewed Coffee 20 oz",
        price: "$5.39",
        description: "Freshly brewed coffee in a 20 oz serving.",
        image: placeholder,
      },
      {
        name: "Americano 16 oz",
        price: "$6.09",
        description: "Rich and smooth coffee made to order.",
        image: placeholder,
      },
      {
        name: "Americano 20 oz",
        price: "$6.75",
        description: "Rich and smooth coffee made to order.",
        image: placeholder,
      },
      {
        name: "Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth coffee in a 16 oz serving.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Cappuccino 20 oz",
        price: "$7.42",
        description: "Rich and smooth coffee in a 20 oz serving.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Macchiato Flavor 16 oz",
        price: "$7.72",
        description: "Rich and smooth macchiato-style coffee in a 16 oz serving.",
        image: placeholder,
      },
      {
        name: "Macchiato Flavor 20 oz",
        price: "$8.79",
        description: "Rich and smooth coffee flavor in a 20 oz serving.",
        image: placeholder,
      },
      {
        name: "Red Eye 16 oz",
        price: "$6.42",
        description: "Rich and bold coffee made with a shot of espresso.",
        image: placeholder,
      },
      {
        name: "Red Eye 20 oz",
        price: "$7.77",
        description: "Rich and bold coffee made with a double shot of espresso.",
        image: placeholder,
      },
      {
        name: "Chai Latte 16 oz",
        price: "$7.10",
        description: "Rich and creamy black tea latte.",
        image: placeholder,
      },
      {
        name: "Chai Latte 20 oz",
        price: "$8.45",
        description: "Rich and creamy black tea latte.",
        image: placeholder,
      },
      {
        name: "Matcha Latte 16 oz",
        price: "$7.72",
        description: "Green tea latte in a 16 oz serving.",
        image: placeholder,
      },
      {
        name: "Matcha Latte 20 oz",
        price: "$8.79",
        description: "Green tea latte in a large 20 oz serving.",
        image: placeholder,
      },
      {
        name: "Hot Chocolate 16 oz",
        price: "$7.10",
        description: "Rich and creamy hot beverage.",
        image: placeholder,
      },
      {
        name: "Hot Chocolate 20 oz",
        price: "$8.10",
        description: "Rich and creamy hot beverage.",
        image: placeholder,
      },
      {
        name: "Black Arabic Coffee",
        price: "$5.40",
        description: "Strong and rich coffee with a deep flavor.",
        image: placeholder,
      },
      {
        name: "Tea 16 oz",
        price: "$4.10",
        description: "Hot brewed tea served in a 16 oz cup.",
        image: placeholder,
      },
      {
        name: "Tea 20 oz",
        price: "$5.40",
        description: "Hot brewed tea served in a 20 oz cup.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Cold Coffee & More",
    items: [
      {
        name: "Greek Frappe 16 oz",
        price: "$8.45",
        description: "Rich and creamy coffee drink with a refreshing twist.",
        image: placeholder,
      },
      {
        name: "Greek Frappe 24 oz",
        price: "$9.80",
        description:
          "Foamy and refreshing Greek-style iced coffee in a 24 oz serving.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Frappuccino 16 oz",
        price: "$8.45",
        description: "Rich and creamy coffee drink, topped with whipped cream.",
        image: placeholder,
      },
      {
        name: "Frappuccino 24 oz",
        price: "$9.80",
        description: "Cold and refreshing coffee drink in a large 24 oz serving.",
        image: placeholder,
      },
      {
        name: "Fresh Lemonade 16 oz",
        price: "$4.73",
        description: "Refreshing drink made with lemon.",
        image: placeholder,
      },
      {
        name: "Fresh Lemonade 24 oz",
        price: "$5.41",
        description: "Refreshing lemonade served over ice in a 24 oz cup.",
        image: placeholder,
      },
      {
        name: "Iced Coffee 16 oz",
        price: "$5.40",
        description: "Brewed coffee served over ice in a 16 oz cup.",
        image: placeholder,
      },
      {
        name: "Iced Coffee 24 oz",
        price: "$6.75",
        description: "Brewed coffee served over ice in a 24 oz cup.",
        image: placeholder,
      },
      {
        name: "Cold Brew 16 oz",
        price: "$6.42",
        description: "Smooth, rich cold brew coffee in a 16 oz serving.",
        image: placeholder,
      },
      {
        name: "Cold Brew 24 oz",
        price: "$7.77",
        description: "Rich and smooth cold coffee in a 24 oz serving.",
        image: placeholder,
      },
      {
        name: "Cold Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth cold coffee drink.",
        image: placeholder,
      },
      {
        name: "Cold Cappuccino 24 oz",
        price: "$7.42",
        description: "Rich and smooth cold coffee drink.",
        image: placeholder,
      },
      {
        name: "Cold Americano 16 oz",
        price: "$5.40",
        description: "Rich and smooth cold coffee drink.",
        image: placeholder,
      },
      {
        name: "Cold Americano 24 oz",
        price: "$6.75",
        description: "Rich and smooth cold coffee in a 24 oz serving.",
        image: placeholder,
      },
      {
        name: "Cold Chai 16 oz",
        price: "$7.10",
        description: "Rich and creamy black tea, served chilled.",
        image: placeholder,
      },
      {
        name: "Cold Chai 24 oz",
        price: "$8.45",
        description: "Rich and creamy black tea served chilled.",
        image: placeholder,
      },
      {
        name: "Cold Choco 16 oz",
        price: "$5.40",
        description: "Rich and creamy chocolate drink.",
        image: placeholder,
      },
      {
        name: "Cold Choco 24 oz",
        price: "$6.75",
        description: "Rich and creamy chocolate drink.",
        image: placeholder,
      },
      {
        name: "Iced Tea 16 oz",
        price: "$4.55",
        description: "Brewed tea served over ice in a 16 oz cup.",
        image: placeholder,
      },
      {
        name: "Iced Tea 24 oz",
        price: "$5.20",
        description: "Brewed tea served over ice in a 24 oz cup.",
        image: placeholder,
      },
      {
        name: "Iced Tea & Lemonade 16 oz",
        price: "$4.73",
        description: "Refreshing blend of iced tea and lemonade.",
        image: placeholder,
      },
      {
        name: "Iced Tea & Lemonade 24 oz",
        price: "$5.41",
        description: "Refreshing blend of iced tea and lemonade.",
        image: placeholder,
      },
      {
        name: "Cold Milk",
        price: "$4.78",
        description: "Fresh milk served chilled.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Cakes & Desserts",
    items: [
      {
        name: "Chocolate Temptation",
        price: "$10.39",
        description: "Rich, decadent chocolate treat.",
        image: placeholder,
      },
      {
        name: "Bomboloni (Nutella or Jelly)",
        price: "$9.99",
        description:
          "Italian-style doughnuts typically filled with a sweet surprise.",
        image: placeholder,
      },
      {
        name: "Bomboloni Bavarian",
        price: "$12.49",
        description: "Sweet Italian doughnuts filled with creamy Bavarian cream.",
        image: placeholder,
      },
      {
        name: "Cappuccino Cake",
        price: "$11.49",
        description: "Moist and rich coffee-infused cake.",
        image: placeholder,
      },
      {
        name: "Limoncello Mascarpone Cake",
        price: "$10.39",
        description:
          "Moist and creamy cake infused with the brightness of limoncello.",
        image: placeholder,
      },
      {
        name: "Ricotta & Pistachio Cake",
        price: "$10.39",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Pistachio Cheesecake",
        price: "$11.69",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Croissant Classic",
        price: "$5.85",
        description: "Flaky, buttery pastry.",
        image: placeholder,
      },
      {
        name: "Creme Brulee & Berries Glass",
        price: "$12.17",
        description:
          "Rich creamy custard base topped with caramelized sugar and mixed berries.",
        image: placeholder,
      },
      {
        name: "Coppa Rasberries & Cream Glass",
        price: "$12.17",
        description:
          "Sweet raspberries layered with cream in a delicate glass.",
        image: placeholder,
      },
      {
        name: "Sicilian Cannoli",
        price: "$10.39",
        description: "Crisp, fried pastry shells filled with sweet ricotta cheese.",
        image: placeholder,
      },
      {
        name: "Caramel Pecan Bars",
        price: "$9.09",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Truffle Brownie Bars",
        price: "$9.09",
        description: "Rich, fudgy brownie bars infused with truffle.",
        image: placeholder,
      },
      {
        name: "3 Cantucci",
        price: "$2.60",
        description: "Crunchy almond biscuits, perfect for dipping.",
        image: placeholder,
      },
      {
        name: "Eclair Mango & Passion Fruit",
        price: "$7.79",
        description:
          "Light and airy pastry filled with a sweet mango and passion fruit cream.",
        image: placeholder,
      },
      {
        name: "Eclair Chocolate",
        price: "$7.79",
        description:
          "Rich, creamy chocolate filling in a delicate pastry shell.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Eclair Vanilla",
        price: "$7.79",
        description:
          "Light and airy pastry filled with a sweet vanilla cream.",
        image: placeholder,
      },
      {
        name: "Eclair Paris Brest",
        price: "$9.09",
        description: "Light and airy pastry filled with a rich cream.",
        image: placeholder,
      },
      {
        name: "6 Macarons Box",
        price: "$26.00",
        description:
          "Box of 6 assorted macarons with delicate shells and soft filling.",
        image: placeholder,
      },
      {
        name: "Baklava Piece",
        price: "$8.85",
        description: "Sweet pastry layers filled with nuts.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Baklava Box",
        price: "$32.50",
        description: "Assortment of sweet pastries layered with nuts and honey.",
        image: placeholder,
      },
      {
        name: "Orange Bomb",
        price: "$11.69",
        description: "Moist orange-flavored treat.",
        image: placeholder,
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: placeholder,
      },
      {
        name: "Bougatsa - Greek Custard Sweet",
        price: "$14.59",
        description:
          "Crispy layers of golden phyllo pastry filled with warm, creamy custard and powdered sugar.",
        image: placeholder,
      },
      {
        name: "Kataifi",
        price: "$11.99",
        description:
          "Golden, crispy shredded phyllo pastry wrapped around a sweet nut filling.",
        image: placeholder,
      },
      {
        name: "Croissant Pistachio",
        price: "$8.11",
        description: "Pistachio drizzle & crushed pistachio.",
        image: placeholder,
      },
      {
        name: "Croissant Mount Olympus",
        price: "$7.44",
        description:
          "Topped with white chocolate, dark chocolate & crushed almonds.",
        image: placeholder,
      },
      {
        name: "Napoleon",
        price: "$10.39",
        description: "Layered pastry filled with sweet cream.",
        image: placeholder,
      },
      {
        name: "1 Macaron",
        price: "$5.19",
        description: "Coconut-based sweet treat.",
        image: placeholder,
      },
      {
        name: "12 Macarons Box",
        price: "$49.00",
        description:
          "Box of 12 assorted macarons with delicate shells and soft filling.",
        image: placeholder,
      },
      {
        name: "Berry Tart",
        price: "$12.16",
        description: "Sweet and tangy mix of berries in a flaky pastry crust.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Cakes & Desserts - Gluten Free",
    items: [
      {
        name: "100% Pistachio - Gluten Free",
        price: "$13.79",
        description: "Pure, nutty pistachio flavor in a gluten-free dessert.",
        image: placeholder,
      },
      {
        name: "Chocolate Caramel Crunch - Gluten Free",
        price: "$13.49",
        description: "Rich chocolate and caramel with a crunchy bite. Gluten-free.",
        image: placeholder,
      },
      {
        name: "Mini Chocolate Cake - Gluten Free",
        price: "$12.49",
        description: "Mini gluten-free chocolate cake with a rich chocolate flavor.",
        image: placeholder,
      },
      {
        name: "6 Macarons Box",
        price: "$26.00",
        description:
          "Box of 6 assorted macarons with delicate shells and soft filling.",
        image: placeholder,
      },
      {
        name: "Tiramisu Cake - Gluten Free",
        price: "$13.49",
        description:
          "Gluten-free tiramisu cake with coffee-soaked layers and a creamy filling.",
        image: placeholder,
      },
      {
        name: "1 Macaron",
        price: "$5.19",
        description: "Coconut-based sweet treat.",
        image: placeholder,
      },
      {
        name: "12 Macarons Box",
        price: "$49.00",
        description:
          "Box of 12 assorted macarons with delicate shells and soft filling.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Panini Sandwiches",
    items: [
      {
        name: "Turkey & Herbs Panini Sandwich",
        price: "$18.24",
        description: "Fresh basil pesto, Swiss cheese, and smoked turkey.",
        image: placeholder,
      },
      {
        name: "Pastrami Panini Sandwich",
        price: "$18.24",
        description:
          "House mayo, provolone, pastrami, pickled jalapeños, sauteed onions.",
        image: placeholder,
      },
      {
        name: "Prosciutto Di Parma Panini Sandwich",
        price: "$18.24",
        description:
          "Thinly sliced prosciutto, mozzarella, sun-dried tomatoes and garlic mayo.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Mozzarella Panini Sandwich",
        price: "$18.24",
        description:
          "Fresh basil pesto, mozzarella, fire roasted red peppers.",
        image: placeholder,
      },
      {
        name: "Buffalo Chicken Panini Sandwich",
        price: "$18.24",
        description:
          "Contains buffalo chicken, Swiss cheese, fresh greens, and house mayo.",
        image: placeholder,
      },
      {
        name: "Filet of Roast Beef Sandwich",
        price: "$18.24",
        description:
          "Oven-style filet of roast beef, Swiss cheese, sauteed onion, fresh greens.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Salad Bowls & Plates",
    items: [
      {
        name: "Falafel Plate",
        price: "$18.59",
        description:
          "Crispy vegan falafel with smooth hummus, creamy tahini, extra virgin olive oil.",
        image: placeholder,
      },
      {
        name: "Greek Salad",
        price: "$18.49",
        description:
          "Fresh mix of lettuce, tomatoes, cucumbers, feta cheese, and olives.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Goat Cheese Salad",
        price: "$18.58",
        description:
          "Contain nuts. Fresh mixed greens, tomatoes, fresh pears, dried cranberries.",
        image: placeholder,
      },
      {
        name: "Chicken Salad",
        price: "$18.24",
        description:
          "Fresh mixed greens, grilled chicken, tomatoes, cucumbers, walnuts.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Fresh Lemonades & Refreshers",
    items: [
      {
        name: "Strawberry Lemonade 16 oz",
        price: "$5.38",
        description: "Sweet and tangy blend of strawberry and lemon flavors.",
        image: placeholder,
      },
      {
        name: "Strawberry Lemonade 24 oz",
        price: "$6.58",
        description: "Sweet and tangy blend of strawberry and lemon flavors.",
        image: placeholder,
      },
      {
        name: "Dragon Fruit Madness 16 oz",
        price: "$5.38",
        description:
          "A vibrant blend of dragon fruit and fresh citrus for a bright, tropical flavor.",
        image: placeholder,
      },
      {
        name: "Dragon Fruit Madness 24 oz",
        price: "$6.58",
        description:
          "A vibrant blend of dragon fruit and fresh citrus for a bright, tropical flavor.",
        image: placeholder,
      },
      {
        name: "Peach Lemonade 16 oz",
        price: "$5.38",
        description: "Sweet and tangy blend of peaches and lemon.",
        image: placeholder,
      },
      {
        name: "Peach Lemonade 24 oz",
        price: "$6.58",
        description: "Sweet and tangy blend of peaches and lemon.",
        image: placeholder,
      },
      {
        name: "Passion Fruit Refresher 16 oz",
        price: "$5.38",
        description: "Fresh passion fruit blend.",
        image: placeholder,
      },
      {
        name: "Passion Fruit Refresher 24 oz",
        price: "$6.58",
        description: "Fresh passion fruit blend.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Fridge Drinks",
    items: [
      {
        name: "Coconut Water",
        price: "$4.77",
        description: "Refreshing and hydrating young coconut water.",
        image: placeholder,
      },
      {
        name: "Cola",
        price: "$3.58",
        description: "Classic cola flavor in a refreshing drink.",
        image: placeholder,
      },
      {
        name: "Orange",
        price: "$2.99",
        description: "Refreshing orange juice served chilled.",
        image: placeholder,
      },
      {
        name: "Pelegrino",
        price: "$3.89",
        description: "Refreshing sparkling beverage.",
        image: placeholder,
      },
      {
        name: "Soda Polar",
        price: "$2.38",
        description: "Refreshing soda beverage.",
        image: placeholder,
      },
      {
        name: "Pellegrino Lemonade",
        price: "$3.89",
        description: "Sparkling lemonade beverage.",
        image: placeholder,
      },
      {
        name: "Swiss Water",
        price: "$3.89",
        description: "Bottled water.",
        image: placeholder,
      },
      {
        name: "Spring Water",
        price: "$2.39",
        description: "Bottled spring water.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Snacks",
    items: [
      {
        name: "Deep River Chips",
        price: "$4.73",
        description: "Crunchy snack chips.",
        image: placeholder,
      },
      {
        name: "Mixed Nuts",
        price: "$1.50",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Banana",
        price: "$1.78",
        description: "Fresh and ripe banana.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Best Sellers",
    items: [
      {
        name: "Turkey & Herbs Panini Sandwich",
        price: "$18.24",
        description: "Fresh basil pesto, Swiss cheese, and smoked turkey.",
        image: placeholder,
      },
      {
        name: "Prosciutto Di Parma Panini Sandwich",
        price: "$18.24",
        description:
          "Thinly sliced prosciutto, mozzarella, sun-dried tomatoes and garlic mayo.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Greek Salad",
        price: "$18.49",
        description:
          "Fresh mix of lettuce, tomatoes, cucumbers, feta cheese, and olives.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Greek Frappe 24 oz",
        price: "$9.80",
        description:
          "Foamy and refreshing Greek-style iced coffee in a 24 oz serving.",
        image: placeholder,
        popular: "Popular",
      },
      {
        name: "Lukumadness Pistachio Heaven",
        price: "$18.45",
        description: "Contain nuts.",
        image: placeholder,
      },
      {
        name: "Dubai Chocolate Crepes",
        price: "$18.99",
        description: "Crepes with pistachio, chocolate, and kataifi.",
        image: placeholder,
      },
    ],
  },

  {
    category: "Crepes",
    items: [
      {
        name: "Dubai Chocolate Crepes",
        price: "$18.99",
        description: "Crepes with pistachio, chocolate, and kataifi.",
        image: placeholder,
      },
      {
        name: "Fruit Symphony Crepes - Nutella",
        price: "$13.99",
        description: "Crepes with Nutella, Strawberry, Banana.",
        image: placeholder,
      },
      {
        name: "Dulce De Leche Crepes",
        price: "$13.99",
        description: "Crepes with Dulce De Leche, Nutella, Banana.",
        image: placeholder,
      },
    ],
  },
];

export default menuData;