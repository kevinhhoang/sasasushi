import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  // we init with resources
  resources: {
    en: {
      translations: {
        // url
        urlalacarte: "alacarte",
        urllunch: "lunch",
        urlsupper: "supper",
        urlgallery: "gallery",
        urlcontact: "contact",

        // navbar
        menu: "Menu",
        alacarte: "À la carte",
        lunch: "Lunch",
        supper: "Supper",
        gallery: "Gallery",
        contact: "Contact",

        // home
        introtext1:
          "At Sasa Sushi, we are always looking for something new and better.",
        introtext2:
          "According to the inspiration of the moment and fresh ingredients found at the market, our chef creates new dishes or can develop tasting menus.",

        // footer
        address1: "71 Chemin St-Francois-Xavier",
        address2: "Candiac, QC J5R 4V4",
        hours1: "Tuesday - Friday | 11:30pm - 2pm",
        hours2: "Tuesday, Wednesday, Sunday | 5pm - 8pm",
        hours3: "Thursday, Friday, Saturday | 5pm - 9pm",
        contact1: "450.632.0559",
        contact2: "sasasushi@gmail.com",

        // sidebar
        sbalacarte: "À LA CARTE",
        sblunch: "LUNCH",
        sbsupper: "SUPPER",

        // a la carte
        catdesc1:
          "(Choice of either Nigiri (2pcs) or Sashimi (2pcs or 3pcs indicated by *) unless stated otherwise)",
        maguro: "Tuna",
        albacore: "White Tuna",
        hamachi: "Yellowtail",
        sake: "Salmon",
        shiromi: "White Fish",
        shimesaba: "Mackerel",
        karamehotategai: "Scallop, Caviar, Strawberry, Scallion, Spicy Mayo",
        hotategai: "Scallop",
        ikura: "Salmon Roe",
        sunrise: "Caviar, Scallop",
        tobiko: "Flying Fish Roe",
        massago: "Smelt Roe",
        sushitempura: "Shrimp Tempura, Teriyaki Sauce",
        sakekunsei: "Smoked Salmon",
        ebi: "Shrimp",
        unagi: "Freshwater Eel",
        kanikama: "Crab Stick",
        tako: "Octopus",

        catdesc2: "uhm",
        grilledsalmonskintitle: "Grilled Salmon Skin",
        grilledsalmonskin: "Grilled Salmon Skin, Cucumber",
        sakemaki: "Salmon Roll",
        tekkamaki: "Tuna Roll",
        unakyu: "Eel, Cucumber",
        karamesaba: "Mackerel, Caviar, Scallion, Jalapeno Sauce",
        karamesake: "Salmon, Caviar, Scallion, Spicy Mayo",
        karamemaguro: "Tuna, Caviar, Scallion, Spicy Mayo",
        karamenerihamachi: "Yellowtail, Caviar, Scallion, Spicy Mayo",
        boston: "Shrimp, Crab Stick, Cucumber, Lettuce, Mayo",
        newyork: "Caviar, Crab Stick, Cucumber, Lettuce, Mayo",
        california: "Caviar, Crab Stick, Cucumber, Avocado, Mayo",
        kamikaze: "Avocado, Cucumber, Tempura, Scallion, Spicy Mayo",
        tempuraroll: "Shrimp, Salmon, Scallion (Fried Roll)",
        philly:
          "Smoked Salmon, Caviar, Cucumber, Spinach, Scallion Tempura, Cream Cheese",
        toritori:
          "Chicken Katsu, Caviar, Avocado, Cucumber, Tempura, Scallion, Spicy Mayo",
        threeamigostitle: "Three Amigos",
        threeamigos: "Three Types of Fish, Caviar, Scallion, Jalapeno Sauce",
        quebec:
          "Shrimp Tempura, Crab Stick, Avocado, Scallion Tempura, Spicy Mayo",
        montreal: "Salmon, White Fish, Carrot, Scallion (Fried Roll)",
        twister: "Shrimp, Udon, Carrot, Scallion (Fried Roll)",
        sasaduchef: "Scallop Katsu, Caviar, Strawberry, Asparagus, Mayo",
        nijimaki:
          "Tuna, Salmon, Crab Stick, Caviar, Avocado, Cucumber, Spicy Mayo",
        elnino: "White Tuna, Eggplant Tempura, Caviar, Jalapeno Sauce",
        aloha: "Tuna, Caviar, Mango, Tempura, Scallion, Spicy Mayo",
        volcano: "Grilled Mackerel, Sun-dried Tomato, Caviar, Jalapeno Sauce",
        eyeofthetigertitle: "Eye of the Tiger",
        eyeofthetiger: "Three Types of Fish Tempura, Spinach Tempura, Caviar",
        spidertitle: "Spider",
        spider: "Fried Soft-shell Crab, Caviar, Avocado, Cucumber, Spicy Mayo",
        zen: "Nori Tempura, Eel, Crab Stick, Caviar, Avocado, Scallion",
        karamelobstertitle: "Karame Lobster",
        karamelobster: "Lobster Tempura, Caviar, Avocado, Spicy Mayo",
        dragoneyetitle: "Dragon Eye",
        dragoneye: "Salmon, White Fish, Carrot, Scallion (Fried Roll)",

        cattitle3: "Veggie Maki",
        kappamaki: "Cucumber Roll",
        avocadomaki: "Avocado Roll",
        oshinko: "Marinated Radish, Cucumber",
        mushiyasai: "Steamed Vegetables",
        shoujinage: "Vegetable Tempura",
        sicili: "Saute Vegetables",

        cattitle4: "Sasa Sushi Speciality",
        tunaspecialtitle: "Tuna Special",
        tunaspecial:
          "Pieces of Tuna Lightly Fried, Caviar, Scallion, Special Mayo",
        lanina: "Fried Eggplant, White Tuna, Caviar, Jalapeno Sauce",
        avalanche: "Grilled Mackerel, Sun-dried Tomato, Caviar, Jalapeno Sauce",
        soleilcandiac:
          "Salmon, White Fish, Fresh Ginger, Scallion, Special Sauce",
        francemaki:
          "Salmon, White Fish, Shrimp Tempura, Caviar, Avocado, Mango, Scallion",
        pizza:
          "Homemade Rice Cracker, Smoked Salmon, Crab Stick, Avocado, Cucumber, Mayo",
        caterpillar:
          "Shrimp Tempura, Salmon, Crab Stick, Avocado, Marinated Rice",
        labelle: "Tuna, Caviar, Asparagus, Scallion, Spicy Mayo",
        labete: "Salmon, Caviar, Asparagus (Lightly Fried Roll)",
        reddragontitle: "Red Dragon",
        reddragon:
          "Panko Shrimp, Tuna, Caviar, Crab Stick, Cucumber, Spicy Mayo",
        dragon: "Eel, Crab Stick, Tempura, Caviar, Avocado, Cucumber",
        trustmetitle: "Trust Me",
        trustme: "Eel, Shrimp Tempura, Caviar, Tempura, Avocado",
        yinyang:
          "Tuna, Salmon, Caviar, Special Avocado Sauce (Lightly Grilled Roll)",

        cattitle5: "Rice Paper Roll",
        catdesc5: "(Served with Special Sauce)",
        indochine: "Salmon, Crab Stick, Caviar, Lettuce, Cucumber",
        illusion: "Shrimp, Caviar, Mixed Salad, Cucumber",
        fantasia: "Shrimp Tempura, Sweet Potato Tempura, Mixed Salad",
        exotica:
          "Smoked Salmon, Caviar, Strawberry, Mango, Cucumber, Mixed Salad",
        voilier: "Grilled Shrimp, Red Pepper, Caviar, Vermicelli, Mixed Salad",
        passion:
          "Shrimp, Crab Stick, Caviar, Mango, Cucumber, Vermicelli, Mixed Salad",
        amoureux:
          "Salmon & Crab Stick Panko, Caviar, Cucumber, Vermicelli, Mixed Salad",
        nue: "Vegetable Tempura, Shrimp, Caviar, Avocado",

        // lunch
        appetizer: "Appetizer",
        agedashitofu:
          "Lightly fried tofu served with tempura sauce & bonito flakes",
        yakitori: "Grilled chicken skewers served with teriyaki sauce",
        gyoza: "Japanese dumplings served with house sauce",
        vegetabletempuratitle: "Vegetable Tempura",
        vegetabletempura: "Deep fried vegetables served with tempura sauce",

        hotmeals: "Hot Meals",
        hotmealsdesc: "(Served with miso soup or salad, rice included)",
        chickenkatsutitle: "Chicken Katsu",
        chickenkatsu: "Fried breaded chicken served with katsu sauce",
        teriyaki:
          "Grilled dish garnished with vegetables served with teriyaki sauce",
        chicken: "Chicken",
        salmon: "Salmon",
        steak: "Steak",
        tempura: "Deep fried shrimps & vegetables served with tempura sauce",
        sasaspecial:
          "Grilled chicken brochettes, deep fried shrimps and vegetables served with teriyaki sauce",

        sushicombodesc: "(Served with miso soup or salad)",
        sushimoriowase:
          "Assortment of raw fish and shellfish sushi & a Kamikaze maki",
        sashimiandmaki: "Assortment of raw fish sashimi served with rice",
        withoutrice: "without Rice",
        withrice: "with Rice",
        makicombo: "Combo of Kamikaze & California",

        // dinner
        harumaki:
          "Japanese spring roll wrapped with shrimp, pork, and vegetables",
        dinnerpizza:
          "Rice cake topped with smoked salmon, crab stick, avocado, cucumber, and mayo",
        dinnerlanina:
          "Deep fried eggplant topped with lightly grilled white tuna, caviar, and jalapeno sauce",
        dinneravalanche:
          "Grilled mackerel and sun-dried tomato topped with caviar, and jalapeno sauce",
        tunasteaktitle: "Tuna Steak",
        tunasteak: "Lightly grilled tuna served with special sauce",
        dinnertunaspecialtitle: "Tuna Special",
        dinnertunaspecial:
          "Lightly fried tuna topped with caviar, scallion, and special sauce",

        soup: "Soup",
        misoshiru: "White soybean paste soup",
        seafoodmisotitle: "Seafood Miso",
        seafoodmiso: "Seafood miso soup",
        sumashi: "Chicken broth with seafood",
        udon: "Shrimp broth with noodles",
        vegetarian: "Vegetarian",
        shrimptempura: "Shrimp Tempura",

        salad: "Salad",
        mixedsaladtitle: "Mixed Salad",
        mixedsalad: "Mixed salad served with house dressing",
        ohitashi: "Steamed spinach served with sesame sauce",
        seafoodsaladtitle: "Seafood Salad",
        seafoodsalad:
          "Mixed salad with smoked salmon, shrimp, and crab stick served with house dressing",

        dinnerhotmealsdesc: "(Served with miso soup or salad, rice included)",
        seafood: "Seafood",
        shrimp: "Shrimp",
        seafoodyakiudontitle: "Seafood Yaki Udon",
        seafoodyakiudon:
          "Stir fry shrimps and scallops with shichimi spice, served with yaki udon (spicy)",

        sushisashimidesc: "(Served with miso soup)",
        assortedsushititle: "Assorted Sushi (16pcs)",
        assortedsushi: "6 nigiri sushi & 10 pieces of maki roll",
        sushisashimititle: "Sushi & Sashimi (17pcs)",
        sushisashimi: "5 nigiri, 6 pieces of sashimi & 6 pieces of maki roll",
        sashimititle: "Sashimi (16pcs)",
        sashimi: "16 pieces of sashimi served with rice",
      },
    },
    fr: {
      translations: {
        // url
        urlalacarte: "alacarte",
        urllunch: "diner",
        urlsupper: "souper",
        urlgallery: "galerie",
        urlcontact: "contact",

        // navbar
        menu: "Menu",
        alacarte: "À la carte",
        lunch: "Dinner",
        supper: "Souper",
        gallery: "Galerie",
        contact: "Contact",

        // home
        introtext1:
          "Chez Sasa Sushi, nous cherchons sans cesse à vous faire profiter de ce qu'il y a de nouveau et de meilleur.",
        introtext2:
          "Selon l'inspiration du moment et en fonction de ingrédients frais qu'il trouve au marché, notre chef crée des plats inédits ou peut élaborer des menus dégustation. Renseignez-vous.",

        // footer
        address1: "71 Chemin St-Francois-Xavier",
        address2: "Candiac, QC J5R 4V4",
        hours1: "Mardi - Vendredi | 11:30pm - 2pm",
        hours2: "Mardi, Mercredi, Dimache | 5pm - 8pm",
        hours3: "Jeudi, Vendredi, Samedi | 5pm - 9pm",
        contact1: "450.632.0559",
        contact2: "sasasushi@gmail.com",

        // sidebar
        sbalacarte: "À LA CARTE",
        sblunch: "DÎNER",
        sbsupper: "SOUPER",

        // a la carte
        catdesc1:
          "(Choix entre Nigiri (2mcx) ou Sashimi (2mcx ou 3mcx indiquer par *) sauf indication contraire)",
        maguro: "Thon",
        albacore: "Thon Blanc",
        hamachi: "Thon à Queue Jaune",
        sake: "Saumon",
        shiromi: "Poisson Blanc",
        shimesaba: "Maquereau",
        karamehotategai: "Pétoncle, Caviar, Fraise, Oignon Vert, Mayo Épicée",
        hotategai: "Pétoncle",
        ikura: "Oeuf de Saumon",
        sunrise: "Caviar, Pétoncle",
        tobiko: "Oeuf de Poisson Volant",
        massago: "Oeufs d'Éperlan",
        sushitempura: "Crevette Tempura, Sauce Teriyaki",
        sakekunsei: "Saumon Fumée",
        ebi: "Crevette",
        unagi: "Anguille",
        kanikama: "Imitation de Crabe",
        tako: "Pieuvre",

        catdesc2: "uhm",
        grilledsalmonskintitle: "Peau de Saumon Grillé",
        grilledsalmonskin: "Peau de Saumon Grillé, Concombre",
        sakemaki: "Rouleau de Saumon",
        tekkamaki: "Rouleau de Thon",
        unakyu: "Anguille, Concombre",
        karamesaba: "Maquereau, Caviar, Oignon Vert, Sauce Jalapeno",
        karamesake: "Saumon, Caviar, Oignon Vert, Mayo Épicée",
        karamemaguro: "Thon, Caviar, Oignon Vert, Mayo Épicée",
        karamenerihamachi:
          "Thon à Queue Jaune, Caviar, Oignon Vert, Mayo Épicée",
        boston: "Crevette, Imitation de Crabe, Concombre, Laitue, Mayo",
        newyork: "Caviar, Imitation de Crabe, Concombre, Laitue, Mayo",
        california: "Caviar, Imitation de Crabe, Concombre, Avocat, Mayo",
        kamikaze: "Avocat, Concombre, Tempura, Oignon Vert, Mayo Épicée",
        tempuraroll: "Crevette, Saumon, Oignon Vert (Rouleau Frit)",
        philly:
          "Saumon Fumée, Caviar, Concombre, Épinard, Oignon Vert Tempura, Fromage à la Crème",
        toritori:
          "Poulet Katsu, Caviar, Avocat, Concombre, Tempura, Oignon Vert, Mayo Épicée",
        threeamigostitle: "Trois Amigos",
        threeamigos:
          "Trois Sortes de Poissons, Caviar, Oignon Vert, Sauce Jalapeno",
        quebec:
          "Crevette Tempura, Imitation de Crabe, Avocat, Oignon Vert Tempura, Mayo Épicée",
        montreal: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",
        twister: "Crevette, Udon, Carotte, Oignon Vert (Rouleau Frit)",
        sasaduchef: "Pétoncle Pané, Caviar, Strawberry, Asperge, Mayo",
        nijimaki:
          "Thon, Saumon, Imitation de Crabe, Caviar, Avocat, Concombre, Mayo Épicée",
        elnino: "Thon Blanc, Aubergine Tempura, Caviar, Sauce Jalapeno",
        aloha: "Thon, Caviar, Mangue, Tempura, Oignon Vert, Mayo Épicée",
        volcano: "Maquereau Grillé, Tomate Séchée, Caviar, Sauce Jalapeno",
        eyeofthetigertitle: "Yeux du Tigre",
        eyeofthetiger:
          "Trois Sortes de Poisson Tempura, Épinard Tempura, Caviar",
        spidertitle: "Araignée",
        spider:
          "Crabe à Carapace Molle Frit, Caviar, Avocat, Concombre, Mayo Épicée",
        zen:
          "Nori Tempura, Anguille, Imitation de Crabe, Caviar, Avocat, Oignon Vert",
        karamelobstertitle: "Karame Homard",
        karamelobster: "Homard Tempura, Caviar, Avocat, Mayo Épicée",
        dragoneyetitle: "Dragon Eye",
        dragoneye: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",

        cattitle3: "Maki Végétarien",
        kappamaki: "Rouleau de Concombre",
        avocadomaki: "Rouleau d'Avocat",
        oshinko: "Radis Mariné, Concombre",
        mushiyasai: "Légume Cuit à la Vapeur",
        shoujinage: "Légume Tempura",
        sicili: "Légumes Sautés",

        cattitle4: "Sasa Sushi Spécialité",
        tunaspecialtitle: "Thon Spécial",
        tunaspecial:
          "Morceaux de Thon Légèrement Frit, Caviar, Oignon Vert, Mayo Spécial",
        lanina: "Aubergine Frit, Thon Blanc, Caviar, Sauce Jalapeno",
        avalanche: "Maquereau Grillé, Tomate Séchée, Caviar, Sauce Jalapeno",
        soleilcandiac:
          "Saumon, Poisson Blanc, Gingembre Frais, Oignon Vert, Sauce Special",
        francemaki:
          "Saumon, Poisson Blanc, Crevette Tempura, Caviar, Avocat, Mangue, Oignon Vert",
        pizza:
          "Galette de Riz, Saumon Fumée, Imitation de Crabe, Avocat, Concombre, Mayo",
        caterpillar:
          "Crevette Tempura, Saumon, Imitation de Crabe, Avocat, Riz Mariné",
        labelle: "Thon, Caviar, Asperge, Oignon Vert, Mayo Épicée",
        labete: "Saumon, Caviar, Asperge (Rouleau Légèrement Frit)",
        reddragontitle: "Dragon Rouge",
        reddragon:
          "Crevette Panée, Thon, Caviar, Imitation de Crabe, Concombre, Mayo Épicée",
        dragon:
          "Anguille, Imitation de Crabe, Tempura, Caviar, Avocat, Concombre",
        trustmetitle: "Crois-moi",
        trustme: "Anguille, Crevette Tempura, Caviar, Tempura, Avocat",
        yinyang:
          "Thon, Saumon, Caviar, Sauce Avocat Special (Rouleau Légèrement Grillé)",

        cattitle5: "Rouleau de Papier de Riz",
        catdesc5: "(Servi avec Sauce Spécial)",
        indochine: "Saumon, Imitation de Crabe, Caviar, Laitue, Concombre",
        illusion: "Crevette, Caviar, Salade Mixte, Concombre",
        fantasia: "Crevette Tempura, Patate Douce Tempura, Salade Mixte",
        exotica:
          "Saumon Fumée, Caviar, Strawberry, Mangue, Concombre, Salade Mixte",
        voilier:
          "Crevette Grillé, Poivron Rouge, Caviar, Vermicelle, Salade Mixte",
        passion:
          "Crevette, Imitation de Crabe, Caviar, Mangue, Concombre, Vermicelle, Salade Mixte",
        amoureux:
          "Saumon & Imitation de Crabe Panées, Caviar, Concombre, Vermicelle, Salade Mixte",
        nue: "Légume Tempura, Crevette, Caviar, Avocat",

        // lunch
        appetizer: "Entrée",
        agedashitofu: "Tofu légèrement frit servi avec sauce tempura",
        yakitori: "Brochettes de poulet grillé servies avec sauce teriyaki",
        gyoza: "Dumplings Japonais au porc et légumes servis avec sauce maison",
        vegetabletempuratitle: "Légumes Tempura",
        vegetabletempura: "Légumes panés servis avec sauce tempura",

        hotmeals: "Plats Chauds",
        hotmealsdesc: "(Servi avec une soupe miso ou salade, riz inclus)",
        chickenkatsutitle: "Poulet Katsu",
        chickenkatsu:
          "Poulet pané avec chapelure japonaise servi avec sauce katsu",
        teriyaki: "Plat grillé garni de légumes servi avec sauce teriyaki",
        chicken: "Poulet",
        salmon: "Saumon",
        steak: "Steak",
        tempura: "Crevettes et légumes frits accompagnés d'une sauce tempura",
        sasaspecial:
          "Brochettes de poulet grillé, crevettes et légumes frits servis avec sauce teriyaki",

        sushicombodesc: "(Servi avec soupe miso ou salade)",
        sushimoriowase:
          "Assortiment de sushis de poisson et de fruits de mer crus avec un rouleau Kamikaze",
        sashimiandmaki:
          "Assortiment de sashimi de poisson cru servi avec du riz",
        withoutrice: "sans Riz",
        withrice: "avez Riz",
        makicombo: "Combo de Kamikaze & California",

        // dinner
        harumaki:
          "Rouleau de printemps japonais enrobé de crevettes, de porc et de légumes",
        dinnerpizza:
          "Galette de riz garnie de saumon fumé, bâtonnet de crabe, avocat, concombre et mayo",
        dinnerlanina:
          "Aubergines frites garnies de thon blanc légèrement grillé, de caviar et de sauce jalapeno",
        dinneravalanche:
          "Maquereaux grillés et tomates séchées, garnis de caviar et de sauce jalapeno",
        tunasteaktitle: "Steak de Thon",
        tunasteak: "Thon légèrement grillé servi avec une sauce spéciale",
        dinnertunaspecialtitle: "Thon Spécial",
        dinnertunaspecial:
          "Thon légèrement frit garni de caviar, échalote et sauce spéciale",

        soup: "Soupe",
        misoshiru: "Soupe de pâte de soja blanche",
        seafoodmisotitle: "Miso aux Fruits de Mer",
        seafoodmiso: "Soupe miso aux fruits de mer",
        sumashi: "Bouillon de poulet aux fruits de mer",
        udon: "Bouillon de crevettes avec des nouilles udon",
        vegetarian: "Végétarien",
        shrimptempura: "Crevette Tempura",

        salad: "Salade",
        mixedsaladtitle: "Salade Mixte",
        mixedsalad: "Salade mixte servie avec vinaigrette maison",
        ohitashi: "Épinards cuits à la vapeur servis avec sauce au sésame",
        seafoodsaladtitle: "Salade de Fruit de Mer",
        seafoodsalad:
          "Salade mixte garnie de saumon fumé, de crevettes et d'imitation de crabe servie avec une vinaigrette maison",

        dinnerhotmealsdesc: "(Servi avec une soupe miso, riz inclus)",
        seafood: "Fruit de Mer",
        shrimp: "Crevette",
        seafoodyakiudontitle: "Yaki Udon aux Fruits de Mer",
        seafoodyakiudon:
          "Sauté de crevettes et de pétoncles aux épices shichimi, servi avec du yaki udon (épicé)",

        sushisashimidesc: "(Servi avec soupe miso)",
        assortedsushititle: "Sushi Assortis (16mcx)",
        assortedsushi: "6 nigiri sushi & 10 morceaux de rouleau maki",
        sushisashimititle: "Sushi & Sashimi (17mcx)",
        sushisashimi:
          "5 nigiri, 6 morceaux de sashimi & 6 morceaux de rouleau maki",
        sashimititle: "Sashimi (16mcx)",
        sashimi: "16 morceaux de sashimi servis avec du riz",
      },
    },
  },
  fallbackLng: "fr",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
