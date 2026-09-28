import baklava from "../assets/img/baklava.webp";
import berryTart from "../assets/img/berry-tart.webp";
import bomboloni from "../assets/img/bomboloni.webp";
import bougatsa from "../assets/img/bougatsa.webp";
import cannoli from "../assets/img/cannoli.webp";
import caramelPecan from "../assets/img/caramel-pecan-bar.webp";
import cremeBrulee from "../assets/img/creme-brulee.webp";
import croissant from "../assets/img/croissant.webp";
import dubaiLuku from "../assets/img/dubai-lukumadness.webp";
import ekmek from "../assets/img/ekmek.webp";
import espresso from "../assets/img/espresso.webp";
import falafel from "../assets/img/falafel.webp";
import frappe from "../assets/img/frappuccino.webp";
import goatCheese from "../assets/img/goat-cheese-salad.webp";
import greekFrappe from "../assets/img/greek-frappe-24oz.webp";
import greekFrappe16 from "../assets/img/greek-frappe-16oz.webp";
import greekSalad from "../assets/img/greek-salad.webp";
import kataifi from "../assets/img/kataifi.webp";
import latte from "../assets/img/latte-cappuccino.webp";
import lemonade from "../assets/img/lemonade.webp";
import limoncello from "../assets/img/limoncello-cake.webp";
import macaron from "../assets/img/macarons.webp";
import mangoEclair from "../assets/img/eclair-mango.webp";
import napoleon from "../assets/img/napoleon.webp";
import orangeBomb from "../assets/img/orange-bomb.webp";
import pistachioCheesecake from "../assets/img/pistachio-cheesecake.webp";
import pastrami from "../assets/img/pastrami-panini.webp";
import ricotta from "../assets/img/ricotta-pistachio-cake.webp";
import smores from "../assets/img/smores.webp";
import spinikopita from "../assets/img/spanakopita.webp";
import traditional from "../assets/img/lukumadness-traditional.webp";
import vanillaEclair from "../assets/img/eclair-vanilla.webp";
import arabicCoffee from "../assets/img/arabic-coffee.webp";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  image?: string;
  popular?: string;
};

export type MenuSection = {
  category: string;
  items: MenuItem[];
};

const menuData: MenuSection[] = [
  {
    category: "Featured Items",
    items: [
      {
        name: "Pastrami Panini Sandwich",
        price: "$18.24",
        description:
          "House mayo, provolone, pastrami, pickled jalapeños, sauteed onions.",
        image: pastrami,
        popular: "#1 most liked",
      },
      {
        name: "Lukumadness Traditional",
        price: "$13.49",
        description:
          "Traditional Lukumadness donuts with honey, cinnamon and crushed walnuts.",
        image: traditional,
        popular: "#2 most liked",
      },
      {
        name: "Lukumadness Dubai Chocolate",
        price: "$20.00",
        description:
          "Indulge in Greek doughnuts topped with Nutella, pistachio drizzle, crushed pistachio and kataifi.",
        image: dubaiLuku,
        popular: "#3 most liked",
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: ekmek,
        popular: "#4 most liked",
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
        image: spinikopita,
      },
      {
        name: "Bomboloni Bavarian",
        price: "$12.49",
        description: "Sweet Italian doughnuts filled with creamy Bavarian cream.",
        image: bomboloni,
      },
      {
        name: "Bougatsa - Greek Custard Sweet",
        price: "$14.59",
        description:
          "Crispy layers of golden phyllo pastry filled with warm, creamy custard and powdered sugar.",
        image: bougatsa,
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: ekmek,
      },
      {
        name: "Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth coffee in a 16 oz serving.",
        image: latte,
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
      },
      {
        name: "Lukumadness Dubai Chocolate",
        price: "$20.00",
        description:
          "Indulge in Greek doughnuts topped with Nutella, pistachio drizzle, crushed pistachio and kataifi.",
        image: dubaiLuku,
      },
      {
        name: "Lukumadness Fruit Symphony",
        price: "$17.55",
        description: "Contain nuts.",
      },
      {
        name: "Lukumadness Mount Olympus",
        price: "$18.90",
        description: "Traditional Greek-style doughnuts.",
      },
      {
        name: "Lukumadness Traditional",
        price: "$13.49",
        description:
          "Traditional Lukumadness donuts with honey, cinnamon and crushed walnuts.",
        image: traditional,
      },
      {
        name: "Lukumadness Dulce De Leche",
        price: "$15.55",
        description: "Sweet Greek doughnuts filled with dulce de leche.",
      },
      {
        name: "Lukumadness Smores",
        price: "$17.55",
        description:
          "Greek doughnuts filled with chocolate and topped with marshmallows.",
        image: smores,
      },
      {
        name: "Lukumadness Gold'n Cream",
        price: "$17.55",
        description: "Greek-style doughnuts filled with a rich cream.",
      },
      {
        name: "Lukumadness PB Cups",
        price: "$18.90",
        description:
          "PB Lukumadness donuts with PB syrup, Nutella / dark Belgian chocolate and PB cups.",
      },
      {
        name: "Lukumadness Classic",
        price: "$12.50",
        description: "Classic Lukumadness donuts with honey and cinnamon sugar.",
      },
      {
        name: "Madness Special",
        price: "$18.90",
        description: "Create your own Lukumadness. Pick any of three toppings.",
      },
      {
        name: "Madness Box",
        price: "$29.72",
        description: "20 pieces and add two of your choice toppings!",
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
        image: espresso,
      },
      {
        name: "Latte 16 oz",
        price: "$6.75",
        description: "Rich and smooth espresso-style coffee in a 16 oz serving.",
        image: latte,
      },
      {
        name: "Latte 20 oz",
        price: "$7.42",
        description: "Rich and smooth coffee in a 20 oz serving.",
        image: latte,
      },
      {
        name: "Brewed Coffee 16 oz",
        price: "$4.39",
        description: "Rich and smooth coffee in a 16 oz serving.",
      },
      {
        name: "Brewed Coffee 20 oz",
        price: "$5.39",
        description: "Freshly brewed coffee in a 20 oz serving.",
      },
      {
        name: "Americano 16 oz",
        price: "$6.09",
        description: "Rich and smooth coffee made to order.",
      },
      {
        name: "Americano 20 oz",
        price: "$6.75",
        description: "Rich and smooth coffee made to order.",
      },
      {
        name: "Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth coffee in a 16 oz serving.",
        popular: "Popular",
        image: latte,
      },
      {
        name: "Cappuccino 20 oz",
        price: "$7.42",
        description: "Rich and smooth coffee in a 20 oz serving.",
        popular: "Popular",
        image: latte,
      },
      {
        name: "Macchiato Flavor 16 oz",
        price: "$7.72",
        description: "Rich and smooth macchiato-style coffee in a 16 oz serving.",
      },
      {
        name: "Macchiato Flavor 20 oz",
        price: "$8.79",
        description: "Rich and smooth coffee flavor in a 20 oz serving.",
      },
      {
        name: "Red Eye 16 oz",
        price: "$6.42",
        description: "Rich and bold coffee made with a shot of espresso.",
      },
      {
        name: "Red Eye 20 oz",
        price: "$7.77",
        description: "Rich and bold coffee made with a double shot of espresso.",
      },
      {
        name: "Chai Latte 16 oz",
        price: "$7.10",
        description: "Rich and creamy black tea latte.",
      },
      {
        name: "Chai Latte 20 oz",
        price: "$8.45",
        description: "Rich and creamy black tea latte.",
      },
      {
        name: "Matcha Latte 16 oz",
        price: "$7.72",
        description: "Green tea latte in a 16 oz serving.",
      },
      {
        name: "Matcha Latte 20 oz",
        price: "$8.79",
        description: "Green tea latte in a large 20 oz serving.",
      },
      {
        name: "Hot Chocolate 16 oz",
        price: "$7.10",
        description: "Rich and creamy hot beverage.",
      },
      {
        name: "Hot Chocolate 20 oz",
        price: "$8.10",
        description: "Rich and creamy hot beverage.",
      },
      {
        name: "Black Arabic Coffee",
        price: "$5.40",
        description: "Strong and rich coffee with a deep flavor.",
        image: arabicCoffee,
      },
      {
        name: "Tea 16 oz",
        price: "$4.10",
        description: "Hot brewed tea served in a 16 oz cup.",
      },
      {
        name: "Tea 20 oz",
        price: "$5.40",
        description: "Hot brewed tea served in a 20 oz cup.",
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
        image: greekFrappe16,
      },
      {
        name: "Greek Frappe 24 oz",
        price: "$9.80",
        description:
          "Foamy and refreshing Greek-style iced coffee in a 24 oz serving.",
        image: greekFrappe,
        popular: "Popular",
      },
      {
        name: "Frappuccino 16 oz",
        price: "$8.45",
        description: "Rich and creamy coffee drink, topped with whipped cream.",
        image: frappe,
      },
      {
        name: "Frappuccino 24 oz",
        price: "$9.80",
        description: "Cold and refreshing coffee drink in a large 24 oz serving.",
        image: frappe,
      },
      {
        name: "Fresh Lemonade 16 oz",
        price: "$4.73",
        description: "Refreshing drink made with lemon.",
        image: lemonade,
      },
      {
        name: "Fresh Lemonade 24 oz",
        price: "$5.41",
        description: "Refreshing lemonade served over ice in a 24 oz cup.",
        image: lemonade,
      },
      {
        name: "Iced Coffee 16 oz",
        price: "$5.40",
        description: "Brewed coffee served over ice in a 16 oz cup.",
      },
      {
        name: "Iced Coffee 24 oz",
        price: "$6.75",
        description: "Brewed coffee served over ice in a 24 oz cup.",
      },
      {
        name: "Cold Brew 16 oz",
        price: "$6.42",
        description: "Smooth, rich cold brew coffee in a 16 oz serving.",
      },
      {
        name: "Cold Brew 24 oz",
        price: "$7.77",
        description: "Rich and smooth cold coffee in a 24 oz serving.",
      },
      {
        name: "Cold Cappuccino 16 oz",
        price: "$6.75",
        description: "Rich and smooth cold coffee drink.",
      },
      {
        name: "Cold Cappuccino 24 oz",
        price: "$7.42",
        description: "Rich and smooth cold coffee drink.",
      },
      {
        name: "Cold Americano 16 oz",
        price: "$5.40",
        description: "Rich and smooth cold coffee drink.",
      },
      {
        name: "Cold Americano 24 oz",
        price: "$6.75",
        description: "Rich and smooth cold coffee in a 24 oz serving.",
      },
      {
        name: "Cold Chai 16 oz",
        price: "$7.10",
        description: "Rich and creamy black tea, served chilled.",
      },
      {
        name: "Cold Chai 24 oz",
        price: "$8.45",
        description: "Rich and creamy black tea served chilled.",
      },
      {
        name: "Cold Choco 16 oz",
        price: "$5.40",
        description: "Rich and creamy chocolate drink.",
      },
      {
        name: "Cold Choco 24 oz",
        price: "$6.75",
        description: "Rich and creamy chocolate drink.",
      },
      {
        name: "Iced Tea 16 oz",
        price: "$4.55",
        description: "Brewed tea served over ice in a 16 oz cup.",
      },
      {
        name: "Iced Tea 24 oz",
        price: "$5.20",
        description: "Brewed tea served over ice in a 24 oz cup.",
      },
      {
        name: "Iced Tea & Lemonade 16 oz",
        price: "$4.73",
        description: "Refreshing blend of iced tea and lemonade.",
      },
      {
        name: "Iced Tea & Lemonade 24 oz",
        price: "$5.41",
        description: "Refreshing blend of iced tea and lemonade.",
      },
      {
        name: "Cold Milk",
        price: "$4.78",
        description: "Fresh milk served chilled.",
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
      },
      {
        name: "Bomboloni (Nutella or Jelly)",
        price: "$9.99",
        description:
          "Italian-style doughnuts typically filled with a sweet surprise.",
        image: bomboloni,
      },
      {
        name: "Bomboloni Bavarian",
        price: "$12.49",
        description: "Sweet Italian doughnuts filled with creamy Bavarian cream.",
        image: bomboloni,
      },
      {
        name: "Cappuccino Cake",
        price: "$11.49",
        description: "Moist and rich coffee-infused cake.",
      },
      {
        name: "Limoncello Mascarpone Cake",
        price: "$10.39",
        description:
          "Moist and creamy cake infused with the brightness of limoncello.",
        image: limoncello,
      },
      {
        name: "Ricotta & Pistachio Cake",
        price: "$10.39",
        description: "Contain nuts.",
        image: ricotta,
      },
      {
        name: "Pistachio Cheesecake",
        price: "$11.69",
        description: "Contain nuts.",
        image: pistachioCheesecake,
      },
      {
        name: "Croissant Classic",
        price: "$5.85",
        description: "Flaky, buttery pastry.",
        image: croissant,
      },
      {
        name: "Creme Brulee & Berries Glass",
        price: "$12.17",
        description:
          "Rich creamy custard base topped with caramelized sugar and mixed berries.",
        image: cremeBrulee,
      },
      {
        name: "Coppa Rasberries & Cream Glass",
        price: "$12.17",
        description:
          "Sweet raspberries layered with cream in a delicate glass.",
      },
      {
        name: "Sicilian Cannoli",
        price: "$10.39",
        description: "Crisp, fried pastry shells filled with sweet ricotta cheese.",
        image: cannoli,
      },
      {
        name: "Caramel Pecan Bars",
        price: "$9.09",
        description: "Contain nuts.",
        image: caramelPecan,
      },
      {
        name: "Truffle Brownie Bars",
        price: "$9.09",
        description: "Rich, fudgy brownie bars infused with truffle.",
      },
      {
        name: "3 Cantucci",
        price: "$2.60",
        description: "Crunchy almond biscuits, perfect for dipping.",
      },
      {
        name: "Eclair Mango & Passion Fruit",
        price: "$7.79",
        description:
          "Light and airy pastry filled with a sweet mango and passion fruit cream.",
        image: mangoEclair,
      },
      {
        name: "Eclair Chocolate",
        price: "$7.79",
        description:
          "Rich, creamy chocolate filling in a delicate pastry shell.",
        popular: "Popular",
      },
      {
        name: "Eclair Vanilla",
        price: "$7.79",
        description:
          "Light and airy pastry filled with a sweet vanilla cream.",
        image: vanillaEclair,
      },
      {
        name: "Eclair Paris Brest",
        price: "$9.09",
        description: "Light and airy pastry filled with a rich cream.",
      },
      {
        name: "6 Macarons Box",
        price: "$26.00",
        description:
          "Box of 6 assorted macarons with delicate shells and soft filling.",
        image: macaron,
      },
      {
        name: "Baklava Piece",
        price: "$8.85",
        description: "Sweet pastry layers filled with nuts.",
        image: baklava,
        popular: "Popular",
      },
      {
        name: "Baklava Box",
        price: "$32.50",
        description: "Assortment of sweet pastries layered with nuts and honey.",
      },
      {
        name: "Orange Bomb",
        price: "$11.69",
        description: "Moist orange-flavored treat.",
        image: orangeBomb,
      },
      {
        name: "Ekmek",
        price: "$12.16",
        description:
          "Turkish-style bread, soft and crusty on the outside, soft inside.",
        image: ekmek,
      },
      {
        name: "Bougatsa - Greek Custard Sweet",
        price: "$14.59",
        description:
          "Crispy layers of golden phyllo pastry filled with warm, creamy custard and powdered sugar.",
        image: bougatsa,
      },
      {
        name: "Kataifi",
        price: "$11.99",
        description:
          "Golden, crispy shredded phyllo pastry wrapped around a sweet nut filling.",
        image: kataifi,
      },
      {
        name: "Croissant Pistachio",
        price: "$8.11",
        description: "Pistachio drizzle & crushed pistachio.",
        image: croissant,
      },
      {
        name: "Croissant Mount Olympus",
        price: "$7.44",
        description:
          "Topped with white chocolate, dark chocolate & crushed almonds.",
        image: croissant,
      },
      {
        name: "Napoleon",
        price: "$10.39",
        description: "Layered pastry filled with sweet cream.",
        image: napoleon,
      },
      {
        name: "1 Macaron",
        price: "$5.19",
        description: "Coconut-based sweet treat.",
      },
      {
        name: "12 Macarons Box",
        price: "$49.00",
        description:
          "Box of 12 assorted macarons with delicate shells and soft filling.",
      },
      {
        name: "Berry Tart",
        price: "$12.16",
        description: "Sweet and tangy mix of berries in a flaky pastry crust.",
        image: berryTart,
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
      },
      {
        name: "Chocolate Caramel Crunch - Gluten Free",
        price: "$13.49",
        description: "Rich chocolate and caramel with a crunchy bite. Gluten-free.",
      },
      {
        name: "Mini Chocolate Cake - Gluten Free",
        price: "$12.49",
        description: "Mini gluten-free chocolate cake with a rich chocolate flavor.",
      },
      {
        name: "6 Macarons Box",
        price: "$26.00",
        description:
          "Box of 6 assorted macarons with delicate shells and soft filling.",
        image: macaron,
      },
      {
        name: "Tiramisu Cake - Gluten Free",
        price: "$13.49",
        description:
          "Gluten-free tiramisu cake with coffee-soaked layers and a creamy filling.",
      },
      {
        name: "1 Macaron",
        price: "$5.19",
        description: "Coconut-based sweet treat.",
      },
      {
        name: "12 Macarons Box",
        price: "$49.00",
        description:
          "Box of 12 assorted macarons with delicate shells and soft filling.",
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
      },
      {
        name: "Pastrami Panini Sandwich",
        price: "$18.24",
        description:
          "House mayo, provolone, pastrami, pickled jalapeños, sauteed onions.",
        image: pastrami,
      },
      {
        name: "Prosciutto Di Parma Panini Sandwich",
        price: "$18.24",
        description:
          "Thinly sliced prosciutto, mozzarella, sun-dried tomatoes and garlic mayo.",
        popular: "Popular",
      },
      {
        name: "Mozzarella Panini Sandwich",
        price: "$18.24",
        description:
          "Fresh basil pesto, mozzarella, fire roasted red peppers.",
      },
      {
        name: "Buffalo Chicken Panini Sandwich",
        price: "$18.24",
        description:
          "Contains buffalo chicken, Swiss cheese, fresh greens, and house mayo.",
      },
      {
        name: "Filet of Roast Beef Sandwich",
        price: "$18.24",
        description:
          "Oven-style filet of roast beef, Swiss cheese, sauteed onion, fresh greens.",
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
        image: falafel,
      },
      {
        name: "Greek Salad",
        price: "$18.49",
        description:
          "Fresh mix of lettuce, tomatoes, cucumbers, feta cheese, and olives.",
        image: greekSalad,
        popular: "Popular",
      },
      {
        name: "Goat Cheese Salad",
        price: "$18.58",
        description:
          "Contain nuts. Fresh mixed greens, tomatoes, fresh pears, dried cranberries.",
        image: goatCheese,
      },
      {
        name: "Chicken Salad",
        price: "$18.24",
        description:
          "Fresh mixed greens, grilled chicken, tomatoes, cucumbers, walnuts.",
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
      },
      {
        name: "Strawberry Lemonade 24 oz",
        price: "$6.58",
        description: "Sweet and tangy blend of strawberry and lemon flavors.",
      },
      {
        name: "Dragon Fruit Madness 16 oz",
        price: "$5.38",
        description:
          "A vibrant blend of dragon fruit and fresh citrus for a bright, tropical flavor.",
      },
      {
        name: "Dragon Fruit Madness 24 oz",
        price: "$6.58",
        description:
          "A vibrant blend of dragon fruit and fresh citrus for a bright, tropical flavor.",
      },
      {
        name: "Peach Lemonade 16 oz",
        price: "$5.38",
        description: "Sweet and tangy blend of peaches and lemon.",
      },
      {
        name: "Peach Lemonade 24 oz",
        price: "$6.58",
        description: "Sweet and tangy blend of peaches and lemon.",
      },
      {
        name: "Passion Fruit Refresher 16 oz",
        price: "$5.38",
        description: "Fresh passion fruit blend.",
      },
      {
        name: "Passion Fruit Refresher 24 oz",
        price: "$6.58",
        description: "Fresh passion fruit blend.",
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
      },
      {
        name: "Cola",
        price: "$3.58",
        description: "Classic cola flavor in a refreshing drink.",
      },
      {
        name: "Orange",
        price: "$2.99",
        description: "Refreshing orange juice served chilled.",
      },
      {
        name: "Pelegrino",
        price: "$3.89",
        description: "Refreshing sparkling beverage.",
      },
      {
        name: "Soda Polar",
        price: "$2.38",
        description: "Refreshing soda beverage.",
      },
      {
        name: "Pellegrino Lemonade",
        price: "$3.89",
        description: "Sparkling lemonade beverage.",
      },
      {
        name: "Swiss Water",
        price: "$3.89",
        description: "Bottled water.",
      },
      {
        name: "Spring Water",
        price: "$2.39",
        description: "Bottled spring water.",
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
      },
      {
        name: "Mixed Nuts",
        price: "$1.50",
        description: "Contain nuts.",
      },
      {
        name: "Banana",
        price: "$1.78",
        description: "Fresh and ripe banana.",
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
      },
      {
        name: "Prosciutto Di Parma Panini Sandwich",
        price: "$18.24",
        description:
          "Thinly sliced prosciutto, mozzarella, sun-dried tomatoes and garlic mayo.",
        popular: "Popular",
      },
      {
        name: "Greek Salad",
        price: "$18.49",
        description:
          "Fresh mix of lettuce, tomatoes, cucumbers, feta cheese, and olives.",
        image: greekSalad,
        popular: "Popular",
      },
      {
        name: "Greek Frappe 24 oz",
        price: "$9.80",
        description:
          "Foamy and refreshing Greek-style iced coffee in a 24 oz serving.",
        popular: "Popular",
        image: greekFrappe,
      },
      {
        name: "Lukumadness Pistachio Heaven",
        price: "$18.45",
        description: "Contain nuts.",
      },
      {
        name: "Dubai Chocolate Crepes",
        price: "$18.99",
        description: "Crepes with pistachio, chocolate, and kataifi.",
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
      },
      {
        name: "Fruit Symphony Crepes - Nutella",
        price: "$13.99",
        description: "Crepes with Nutella, Strawberry, Banana.",
      },
      {
        name: "Dulce De Leche Crepes",
        price: "$13.99",
        description: "Crepes with Dulce De Leche, Nutella, Banana.",
      },
    ],
  },
];

export default menuData;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Number of distinct dishes/drinks (sections repeat some favorites). */
export const uniqueItemCount = new Set(
  menuData.flatMap((section) => section.items.map((item) => item.name)),
).size;
