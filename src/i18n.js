import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  // we init with resources
  resources: {
    en: {
      translations: {
        // link
        menu: "Menu",
        alacarte: "A la carte",
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
        tempura: "Shrimp, Salmon, Scallion (Fried Roll)",
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
        Sicili: "Saute Vegetables",

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
        nue: "Vegetable Tempura, Shrimp, Caviar, Avocado"
      }
    },
    fr: {
      translations: {
        // link
        menu: "Menu",
        alacarte: "A la carte",
        lunch: "Dinner",
        supper: "Souper",
        gallery: "Gallerie",
        contact: "Contact",

        // home
        introtext1:
          "Chez Sasa Sushi, nous cherchons sans cesse à vous faire profiter de ce qu'il y a  de nouveau et de meilleur.",
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

        // a la carte
        catdesc1:
          "(Choix entre Nigiri (2pcs) ou Sashimi (2pcs ou 3pcs indiquer par *) sauf indication contraire)",
        maguro: "Thon",
        albacore: "Thon Blanc",
        hamachi: "Thon a Queue Jaune",
        sake: "Saumon",
        shiromi: "Poisson Blanc",
        shimesaba: "Maquereau",
        karamehotategai: "Petoncle, Caviar, Fraise, Oignon Vert, Mayo Epicee",
        hotategai: "Petoncle",
        ikura: "Oeuf de Saumon",
        sunrise: "Caviar, Petoncle",
        tobiko: "Oeuf de Poisson Volant",
        massago: "Eperlan d'Oeuf",
        sushitempura: "Crevette Tempura, Sauce Teriyaki",
        sakekunsei: "Saumon Fumee",
        ebi: "Crevette",
        unagi: "Anguille",
        kanikama: "Imitation de Crabe",
        tako: "Pieuvre",

        catdesc2: "uhm",
        grilledsalmonskintitle: "Peau de Saumon Grille",
        grilledsalmonskin: "Peau de Saumon Grille, Concombre",
        sakemaki: "Rouleau de Saumon",
        tekkamaki: "Rouleau de Thon",
        unakyu: "Anguille, Concombre",
        karamesaba: "Maquereau, Caviar, Oignon Vert, Sauce Jalapeno",
        karamesake: "Saumon, Caviar, Oignon Vert, Mayo Epicee",
        karamemaguro: "Thon, Caviar, Oignon Vert, Mayo Epicee",
        karamenerihamachi:
          "Thon a Queue Jaune, Caviar, Oignon Vert, Mayo Epicee",
        boston: "Crevette, Imitation de Crabe, Concombre, Laitue, Mayo",
        newyork: "Caviar, Imitation de Crabe, Concombre, Laitue, Mayo",
        california: "Caviar, Imitation de Crabe, Concombre, Avocat, Mayo",
        kamikaze: "Avocat, Concombre, Tempura, Oignon Vert, Mayo Epicee",
        tempura: "Crevette, Saumon, Oignon Vert (Rouleau Frit)",
        philly:
          "Saumon Fumee, Caviar, Concombre, Epinard, Oignon Vert Tempura, Fromage a la Creme",
        toritori:
          "Poulet Katsu, Caviar, Avocat, Concombre, Tempura, Oignon Vert, Mayo Epicee",
        threeamigostitle: "Trois Amigos",
        threeamigos:
          "Trois Sortes de Poissons, Caviar, Oignon Vert, Sauce Jalapeno",
        quebec:
          "Crevette Tempura, Imitation de Crabe, Avocat, Oignon Vert Tempura, Mayo Epicee",
        montreal: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",
        twister: "Crevette, Udon, Carotte, Oignon Vert (Rouleau Frit)",
        sasaduchef: "Petoncle Katsu, Caviar, Strawberry, Asperge, Mayo",
        nijimaki:
          "Thon, Saumon, Imitation de Crabe, Caviar, Avocat, Concombre, Mayo Epicee",
        elnino: "Thon Blanc, Aubergine Tempura, Caviar, Sauce Jalapeno",
        aloha: "Thon, Caviar, Mangue, Tempura, Oignon Vert, Mayo Epicee",
        volcano: "Maquereau Grille, Tomate Sechee, Caviar, Sauce Jalapeno",
        eyeofthetigertitle: "Yeux du Tigre",
        eyeofthetiger:
          "Trois Sortes de Poisson Tempura, Epinard Tempura, Caviar",
        spidertitle: "Araignee",
        spider:
          "Crabe a Carapace Molle Frit, Caviar, Avocat, Concombre, Mayo Epicee",
        zen:
          "Nori Tempura, Anguille, Imitation de Crabe, Caviar, Avocat, Oignon Vert",
        karamelobstertitle: "Karame Homard",
        karamelobster: "Homard Tempura, Caviar, Avocat, Mayo Epicee",
        dragoneyetitle: "Dragon Eye",
        dragoneye: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",

        cattitle3: "Maki Vegetarien",
        kappamaki: "Rouleau de Concombre",
        Avocatmaki: "Rouleau d'Avocat",
        oshinko: "Radis Marinee, Concombre",
        mushiyasai: "Legume Cuit a la Vapeur",
        shoujinage: "Legume Tempura",
        Sicili: "Legumes Sautes",

        cattitle4: "Sasa Sushi Specialite",
        Thonspecialtitle: "Thon Special",
        Thonspecial:
          "Morceaux de Thon Legerement Frit, Caviar, Oignon Vert, Special Mayo",
        lanina: "Aubergine Frit, Thon Blanc, Caviar, Sauce Jalapeno",
        avalanche: "Maquereau Grille, Tomate Sechee, Caviar, Sauce Jalapeno",
        soleilcandiac:
          "Saumon, Poisson Blanc, Gingembre Frais, Oignon Vert, Sauce Special",
        francemaki:
          "Saumon, Poisson Blanc, Crevette Tempura, Caviar, Avocat, Mangue, Oignon Vert",
        pizza:
          "Biscuit de Riz Fait Maison, Saumon Fumee, Imitation de Crabe, Avocat, Concombre, Mayo",
        caterpillar:
          "Crevette Tempura, Saumon, Imitation de Crabe, Avocat, Rice Marine",
        labelle: "Thon, Caviar, Asperge, Oignon Vert, Mayo Epicee",
        labete: "Saumon, Caviar, Asperge (Rouleau Legerement Frit)",
        reddragontitle: "Dragon Rouge",
        reddragon:
          "Crevette Panko, Thon, Caviar, Imitation de Crabe, Concombre, Mayo Epicee",
        dragon:
          "Anguille, Imitation de Crabe, Tempura, Caviar, Avocat, Concombre",
        trustmetitle: "Crois-moi",
        trustme: "Anguille, Crevette Tempura, Caviar, Tempura, Avocat",
        yinyang:
          "Thon, Saumon, Caviar, Sauce Avocat Special (Rouleau Legerement Grille)",

        cattitle5: "Rouleau de Papier de Riz",
        catdesc5: "(Servi avec Sauce Special)",
        indochine: "Saumon, Imitation de Crabe, Caviar, Laitue, Concombre",
        illusion: "Crevette, Caviar, Saladee Mix, Concombre",
        fantasia: "Crevette Tempura, Potato Douce Tempura, Salade Mix",
        exotica:
          "Saumon Fumee, Caviar, Strawberry, Mangue, Concombre, Salade Mix",
        voilier:
          "Crevette Grille, Poivron Rouge, Caviar, Vermicelli, Salade Mix",
        passion:
          "Crevette, Imitation de Crabe, Caviar, Mangue, Concombre, Vermicelli, Salade Mix",
        amoureux:
          "Saumon & Imitation de Crabe Panko, Caviar, Concombre, Vermicelle, Salade Mix",
        nue: "Legume Tempura, Crevette, Caviar, Avocat"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
