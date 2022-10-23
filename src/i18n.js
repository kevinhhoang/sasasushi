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
        urlcombo: "combo",

        // navbar
        menu: "Menu",
        alacarte: "À la carte",
        lunch: "Lunch",
        supper: "Supper",
        gallery: "Gallery",
        contact: "Contact",
        combo: "Combo",

        // home
        introtext1:
          "At Sasa Sushi, we are always looking for something new and better.",
        introtext2:
          "According to the inspiration of the moment and fresh ingredients found at the market, our chef creates new dishes or can develop tasting menus.",

        // footer
        addresstitle: "Location",
        address1: "71 Chemin St-Francois-Xavier",
        address2: "Candiac, QC J5R 4V4",
        hourstitle: "Hours",
        // hours1: "Lunch | Tuesday - Friday | 11:30pm - 2pm",
        hours2: "Supper | Wednesday - Saturday | 4:00PM - 8:30PM",
        // hours3: "Supper | Thursday, Friday, Saturday | 5pm - 9pm",
        contacttitle: "Contact",
        contact1: "450.632.0559",

        // sidebar
        sbalacarte: "À LA CARTE",
        sblunch: "LUNCH",
        sbsupper: "SUPPER",
        sbcombo: "COMBO",

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
        sunrise: "Caviar, Scallop",
        tobiko: "Flying Fish Roe",
        massago: "Smelt Roe",
        sushitempura: "Shrimp Tempura, Teriyaki Sauce",
        sakekunsei: "Smoked Salmon",
        ebi: "Shrimp",
        unagi: "Freshwater Eel",
        kanikama: "Crab Stick",
        tako: "Octopus",
        nigirionly: "(Nigiri Only)",

        grilledsalmonskintitle: "Grilled Salmon Skin",
        grilledsalmonskin: "Grilled Salmon Skin, Cucumber",
        sakemakititle: "Sake Maki (6pcs)",
        sakemaki: "Salmon Roll",
        tekkamakititle: "Tekka Maki (6pcs)",
        tekkamaki: "Tuna Roll",
        unakyutitle: "Unakyu (6pcs)",
        unakyu: "Eel, Cucumber",
        karamesabatitle: "Karame Saba (6pcs)",
        karamesaba: "Mackerel, Caviar, Scallion, Jalapeno Sauce",
        karamesaketitle: "Karame Sake (6pcs)",
        karamesake: "Salmon, Caviar, Scallion, Spicy Mayo",
        karamemagurotitle: "Karame Maguro (6pcs)",
        karamemaguro: "Tuna, Caviar, Scallion, Spicy Mayo",
        karamenerihamachititle: "Karame Neri Hamachi (6pcs)",
        karamenerihamachi: "Yellowtail, Caviar, Scallion, Spicy Mayo",
        bostontitle: "Boston (5pcs)",
        boston: "Shrimp, Crab Stick, Cucumber, Lettuce, Mayo",
        newyorktitle: "New York (5pcs)",
        newyork: "Caviar, Crab Stick, Cucumber, Lettuce, Mayo",
        californiatitle: "California (5pcs)",
        california: "Caviar, Crab Stick, Cucumber, Avocado, Mayo",
        kamikazetitle: "Kamikaze (5pcs)",
        kamikaze: "Avocado, Cucumber, Tempura, Scallion, Spicy Mayo",
        tempurarolltitle: "Tempura (4pcs)",
        tempuraroll: "Shrimp, Salmon, Scallion (Fried Roll)",
        phillytitle: "Philly (5pcs)",
        philly:
          "Smoked Salmon, Caviar, Cucumber, Spinach, Scallion Tempura, Cream Cheese",
        toritorititle: "Tori Tori (5pcs)",
        toritori:
          "Chicken Katsu, Caviar, Avocado, Cucumber, Tempura, Scallion, Spicy Mayo",
        threeamigostitle: "Three Amigos (5pcs)",
        threeamigos: "Three Types of Fish, Caviar, Scallion, Jalapeno Sauce",
        quebectitle: "Québec (5pcs)",
        quebec:
          "Shrimp Tempura, Crab Stick, Avocado, Scallion Tempura, Spicy Mayo",
        montrealtitle: "Montréal (5pcs)",
        montreal: "Salmon, White Fish, Carrot, Scallion (Fried Roll)",
        twistertitle: "Twister (5pcs)",
        twister: "Shrimp, Udon, Carrot, Scallion (Fried Roll)",
        sasaducheftitle: "Sasa du Chef (6pcs)",
        sasaduchef: "Scallop Katsu, Caviar, Strawberry, Asparagus, Mayo",
        nijimakititle: "Niji (5pcs)",
        nijimaki:
          "Tuna, Salmon, Crab Stick, Caviar, Avocado, Cucumber, Spicy Mayo",
        elninotitle: "El Nino (5pcs)",
        elnino: "White Tuna, Eggplant Tempura, Caviar, Jalapeno Sauce",
        alohatitle: "Aloha (5pcs)",
        aloha: "Tuna, Caviar, Mango, Tempura, Scallion, Spicy Mayo",
        volcanotitle: "Volcano (5pcs)",
        volcano: "Grilled Mackerel, Sun-dried Tomato, Caviar, Jalapeno Sauce",
        eyeofthetigertitle: "Eye of the Tiger (5pcs)",
        eyeofthetiger: "Three Types of Fish Tempura, Spinach Tempura, Caviar",
        spidertitle: "Spider (5pcs)",
        spider: "Fried Soft-shell Crab, Caviar, Avocado, Cucumber, Spicy Mayo",
        zentitle: "Zen (5pcs)",
        zen: "Nori Tempura, Eel, Crab Stick, Caviar, Avocado, Scallion",
        karamelobstertitle: "Karame Lobster (5pcs)",
        karamelobster: "Lobster Tempura, Caviar, Avocado, Spicy Mayo",
        dragoneyetitle: "Dragon Eye (6pcs)",
        dragoneye: "Salmon, White Fish, Carrot, Scallion (Fried Roll)",

        cattitle3: "Veggie Maki",
        kappamakititle: "Kappa (6pcs)",
        kappamaki: "Cucumber Roll",
        avocadomakititle: "Avocado (6pcs)",
        avocadomaki: "Avocado Roll",
        oshinkotitle: "Oshinko (6pcs)",
        oshinko: "Marinated Radish, Cucumber",
        yasaimakititle: "Yasai (5pcs)",
        yasaimaki: "Steamed Vegetables",
        shoujinagetitle: "Shoujin Age (5pcs)",
        shoujinage: "Vegetable Tempura",
        sicilititle: "Sicili (5pcs)",
        sicili: "Saute Vegetables",

        cattitle4: "Sasa Sushi Speciality",
        tunaspecialtitle: "Tuna Special",
        tunaspecial:
          "Pieces of Tuna Lightly Fried, Caviar, Scallion, Special Mayo",
        lanina: "Fried Eggplant, White Tuna, Caviar, Jalapeno Sauce",
        avalanche: "Grilled Mackerel, Sun-dried Tomato, Caviar, Jalapeno Sauce",
        soleilcandiactitle: "Soleil Candiac (8pcs)",
        soleilcandiac: "Salmon, Spicy Salmon, Caviar, Avocado",
        francemakititle: "France (8pcs)",
        francemaki:
          "Salmon, White Fish, Shrimp Tempura, Caviar, Avocado, Mango, Scallion",
        pizzatitle: "Pizza (4pcs)",
        pizza:
          "Homemade Rice Cracker, Smoked Salmon, Crab Stick, Avocado, Cucumber, Mayo",
        caterpillartitle: "Caterpillar (6pcs)",
        caterpillar:
          "Shrimp Tempura, Salmon, Crab Stick, Avocado, Marinated Rice",
        labelletitle: "La Belle (8pcs)",
        labelle: "Tuna, Caviar, Asparagus, Scallion, Spicy Mayo",
        labetetitle: "La Bête (6pcs)",
        labete: "Salmon, Caviar, Asparagus (Lightly Fried Roll)",
        reddragontitle: "Red Dragon (8pcs)",
        reddragon:
          "Panko Shrimp, Tuna, Caviar, Crab Stick, Cucumber, Spicy Mayo",
        clementinetitle: "Clementine (8pcs)",
        clementine:
          "Panko Shrimp, Salmon, Caviar, Crab Stick, Avocado, Spicy Mayo",
        dragontitle: "Green Dragon (8pcs)",
        dragon: "Eel, Crab Stick, Tempura, Caviar, Avocado, Cucumber",
        trustmetitle: "Trust Me (5pcs)",
        trustme: "Eel, Shrimp Tempura, Caviar, Tempura, Avocado",
        yinyangtitle: "Yin Yang (5pcs)",
        yinyang:
          "Tuna, Salmon, Caviar, Special Avocado Sauce (Lightly Grilled Roll)",

        cattitle5: "Rice Paper Roll",
        catdesc5: "(Served with Special Sauce)",
        indochinetitle: "Indochine (6pcs)",
        indochine: "Salmon, Crab Stick, Caviar, Lettuce, Cucumber",
        illusiontitle: "Illusion (6pcs)",
        illusion: "Shrimp, Caviar, Mixed Salad, Cucumber",
        fantasiatitle: "Fantasia (6pcs)",
        fantasia: "Shrimp Tempura, Sweet Potato Tempura, Mixed Salad",
        exoticatitle: "Exotica (6pcs)",
        exotica:
          "Smoked Salmon, Caviar, Strawberry, Mango, Cucumber, Mixed Salad",
        voiliertitle: "Voilier (6pcs)",
        voilier: "Grilled Shrimp, Red Pepper, Caviar, Vermicelli, Mixed Salad",
        passiontitle: "Passion (6pcs)",
        passion:
          "Shrimp, Crab Stick, Caviar, Mango, Cucumber, Vermicelli, Mixed Salad",
        amoureuxtitle: "Amoureux (6pcs)",
        amoureux:
          "Salmon & Crab Stick Panko, Caviar, Cucumber, Vermicelli, Mixed Salad",
        nuetitle: "Nue (5pcs)",
        nue: "Vegetable Tempura, Shrimp, Caviar, Avocado",

        // combo
        comboroll: "Combo Roll",
        comboonetitle: "Combo 1 (26pcs)",
        comboonelist: "Dragon Eye, Québec, California, Chef's Roll, Kappa",
        combotwotitle: "Combo 2 (26pcs)",
        combotwolist: "Kamikaze, Aloha, Chef's Roll, Sake Maki, Yasai",
        combothreetitle: "Combo 3 (52pcs)",
        combothreelist: "2 Kamikaze, 2 Aloha, 2 Chef's Roll, 2 Québec, 2 Yasai",
        combofourtitle: "Combo 4 (96pcs)",
        combofourlist:
          "2 Kamikaze, 2 Aloha, 2 Dragon Eye, 2 Québec, 2 Chef's Roll, 2 New York, 2 Boston, 2 Sake Maki, 2 Yasai Maki",

        // lunch
        appetizer: "Appetizer",
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

        dinnerhotmealsdesc: "(Served with rice)",
        seafood: "Seafood",
        shrimp: "Shrimp",
        seafoodyakiudontitle: "Seafood Yaki Udon",
        seafoodyakiudon:
          "Stir fry shrimps and scallops with shichimi spice, served with yaki udon (spicy)",

        assortedsushititle: "Assorted Sushi (16pcs)",
        assortedsushi: "6 nigiri sushi & 10 pieces of maki roll",
        sushisashimititle: "Sushi & Sashimi (17pcs)",
        sushisashimi: "5 nigiri, 6 pieces of sashimi & 6 pieces of maki roll",
        sashimititle: "Sashimi (16pcs)",
        sashimi: "16 pieces of sashimi served with rice",

        notincluded: "Soup or Salad is not included for takeout orders.",
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
        urlcombo: "combo",

        // navbar
        menu: "Menu",
        alacarte: "À la carte",
        lunch: "Dinner",
        supper: "Souper",
        gallery: "Galerie",
        contact: "Contact",
        combo: "Combo",

        // home
        introtext1:
          "Chez Sasa Sushi, nous cherchons sans cesse à vous faire profiter de ce qu'il y a de nouveau et de meilleur.",
        introtext2:
          "Selon l'inspiration du moment et les ingrédients frais trouvés au marché, notre chef crée de nouveaux plats ou peut élaborer des menus de dégustation.",

        // footer
        addresstitle: "Location",
        address1: "71 Chemin St-Francois-Xavier",
        address2: "Candiac, QC J5R 4V4",
        hourstitle: "Heures",
        // hours1: "Dîner | Mardi - Vendredi | 11:30pm - 2pm",
        hours2: "Souper | Mercredi - Samedi | 4:00PM - 8:30PM",
        // hours3: "Souper | Jeudi, Vendredi, Samedi | 5pm - 9pm",
        contacttitle: "Contact",
        contact1: "450.632.0559",

        // sidebar
        sbalacarte: "À LA CARTE",
        sblunch: "DÎNER",
        sbsupper: "SOUPER",
        sbcombo: "COMBO",

        // a la carte
        catdesc1:
          "(Choix entre Nigiri (2mcx) ou Sashimi (2mcx ou 3mcx indiqués par *) sauf indication contraire)",
        maguro: "Thon",
        albacore: "Thon Blanc",
        hamachi: "Thon à Queue Jaune",
        sake: "Saumon",
        shiromi: "Poisson Blanc",
        shimesaba: "Maquereau",
        karamehotategai: "Pétoncle, Caviar, Fraise, Oignon Vert, Mayo Épicée",
        hotategai: "Pétoncle",
        sunrise: "Caviar, Pétoncle",
        tobiko: "Oeuf de Poisson Volant",
        massago: "Oeufs d'Éperlan",
        sushitempura: "Crevette Tempura, Sauce Teriyaki",
        sakekunsei: "Saumon Fumée",
        ebi: "Crevette",
        unagi: "Anguille",
        kanikama: "Imitation de Crabe",
        tako: "Pieuvre",
        nigirionly: "(Nigiri Seulement)",

        grilledsalmonskintitle: "Peau de Saumon Grillé (6mcx)",
        grilledsalmonskin: "Peau de Saumon Grillé, Concombre",
        sakemakititle: "Sake Maki (6mcx)",
        sakemaki: "Rouleau de Saumon",
        tekkamakititle: "Tekka Maki (6mcx)",
        tekkamaki: "Rouleau de Thon",
        unakyutitle: "Unakyu (6mcx)",
        unakyu: "Anguille, Concombre",
        karamesabatitle: "Karame Saba (6mcx)",
        karamesaba: "Maquereau, Caviar, Oignon Vert, Sauce Jalapeno",
        karamesaketitle: "Karame Sake (6mcx)",
        karamesake: "Saumon, Caviar, Oignon Vert, Mayo Épicée",
        karamemagurotitle: "Karame Maguro (6mcx)",
        karamemaguro: "Thon, Caviar, Oignon Vert, Mayo Épicée",
        karamenerihamachititle: "Karame Neri Hamachi (6mcx)",
        karamenerihamachi:
          "Thon à Queue Jaune, Caviar, Oignon Vert, Mayo Épicée",
        bostontitle: "Boston (5mcx)",
        boston: "Crevette, Imitation de Crabe, Concombre, Laitue, Mayo",
        newyorktitle: "New York (5mcx)",
        newyork: "Caviar, Imitation de Crabe, Concombre, Laitue, Mayo",
        californiatitle: "Californie (5mcx)",
        california: "Caviar, Imitation de Crabe, Concombre, Avocat, Mayo",
        kamikazetitle: "Kamikaze (5mcx)",
        kamikaze: "Avocat, Concombre, Tempura, Oignon Vert, Mayo Épicée",
        tempurarolltitle: "Tempura (4mcx)",
        tempuraroll: "Crevette, Saumon, Oignon Vert (Rouleau Frit)",
        phillytitle: "Philly (5mcx)",
        philly:
          "Saumon Fumée, Caviar, Concombre, Épinard, Oignon Vert Tempura, Fromage à la Crème",
        toritorititle: "Tori Tori (5mcx)",
        toritori:
          "Poulet Katsu, Caviar, Avocat, Concombre, Tempura, Oignon Vert, Mayo Épicée",
        threeamigostitle: "Trois Amigos (5mcx)",
        threeamigos:
          "Trois Sortes de Poissons, Caviar, Oignon Vert, Sauce Jalapeno",
        quebectitle: "Québec (5mcx)",
        quebec:
          "Crevette Tempura, Imitation de Crabe, Avocat, Oignon Vert Tempura, Mayo Épicée",
        montrealtitle: "Montréal (5mcx)",
        montreal: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",
        twistertitle: "Twister (5mcx)",
        twister: "Crevette, Udon, Carotte, Oignon Vert (Rouleau Frit)",
        sasaducheftitle: "Sasa du Chef (6mcx)",
        sasaduchef: "Pétoncle Pané, Caviar, Strawberry, Asperge, Mayo",
        nijimakititle: "Niji (5mcx)",
        nijimaki:
          "Thon, Saumon, Imitation de Crabe, Caviar, Avocat, Concombre, Mayo Épicée",
        elninotitle: "El Nino (5mcx)",
        elnino: "Thon Blanc, Aubergine Tempura, Caviar, Sauce Jalapeno",
        alohatitle: "Aloha (5mcx)",
        aloha: "Thon, Caviar, Mangue, Tempura, Oignon Vert, Mayo Épicée",
        volcanotitle: "Volcano (5mcx)",
        volcano: "Maquereau Grillé, Tomate Séchée, Caviar, Sauce Jalapeno",
        eyeofthetigertitle: "Oeil du Tigre (5mcx)",
        eyeofthetiger:
          "Trois Sortes de Poisson Tempura, Épinard Tempura, Caviar",
        spidertitle: "Araignée (5mcx)",
        spider:
          "Crabe à Carapace Molle Frit, Caviar, Avocat, Concombre, Mayo Épicée",
        zentitle: "Zen (5mcx)",
        zen:
          "Nori Tempura, Anguille, Imitation de Crabe, Caviar, Avocat, Oignon Vert",
        karamelobstertitle: "Karame Homard (5mcx)",
        karamelobster: "Homard Tempura, Caviar, Avocat, Mayo Épicée",
        dragoneyetitle: "Dragon Eye (6mcx)",
        dragoneye: "Saumon, Poisson Blanc, Carotte, Oignon Vert (Rouleau Frit)",

        cattitle3: "Maki Végétarien",
        kappamakititle: "Kappa (6mcx)",
        kappamaki: "Rouleau de Concombre",
        avocadomakititle: "Avocat (6mcx)",
        avocadomaki: "Rouleau d'Avocat",
        oshinkotitle: "Oshinko (6mcx)",
        oshinko: "Radis Mariné, Concombre",
        yasaimakititle: "Yasai (5mcx)",
        yasaimaki: "Légume Cuit à la Vapeur",
        shoujinagetitle: "Shoujin Age (5mcx)",
        shoujinage: "Légume Tempura",
        sicilititle: "Sicile (5mcx)",
        sicili: "Légumes Sautés",

        cattitle4: "Sasa Sushi Spécialité",
        tunaspecialtitle: "Thon Spécial",
        tunaspecial:
          "Morceaux de Thon Légèrement Frit, Caviar, Oignon Vert, Mayo Spécial",
        lanina: "Aubergine Frit, Thon Blanc, Caviar, Sauce Jalapeno",
        avalanche: "Maquereau Grillé, Tomate Séchée, Caviar, Sauce Jalapeno",
        soleilcandiactitle: "Soleil Candiac (8mcx)",
        soleilcandiac: "Saumon, Saumon Épicée, Caviar, Avocat",
        francemakititle: "France (8mcx)",
        francemaki:
          "Saumon, Poisson Blanc, Crevette Tempura, Caviar, Avocat, Mangue, Oignon Vert",
        pizzatitle: "Pizza (4mcx)",
        pizza:
          "Galette de Riz, Saumon Fumée, Imitation de Crabe, Avocat, Concombre, Mayo",
        caterpillartitle: "Caterpillar (6mcx)",
        caterpillar:
          "Crevette Tempura, Saumon, Imitation de Crabe, Avocat, Riz Mariné",
        labelletitle: "La Belle (8mcx)",
        labelle: "Thon, Caviar, Asperge, Oignon Vert, Mayo Épicée",
        labetetitle: "La Bête (6mcx)",
        labete: "Saumon, Caviar, Asperge (Rouleau Légèrement Frit)",
        reddragontitle: "Dragon Rouge (8mcx)",
        reddragon:
          "Crevette Panée, Thon, Caviar, Imitation de Crabe, Concombre, Mayo Épicée",
        clementinetitle: "Clémentine (8pcs)",
        clementine:
          "Crevette Panée, Saumon, Caviar, Imitation de Crabe, Acvocat, Spicy Mayo",
        dragontitle: "Dragon Vert (8mcx)",
        dragon:
          "Anguille, Imitation de Crabe, Tempura, Caviar, Avocat, Concombre",
        trustmetitle: "Crois-moi (5mcx)",
        trustme: "Anguille, Crevette Tempura, Caviar, Tempura, Avocat",
        yinyangtitle: "Yin Yang (5mcx)",
        yinyang:
          "Thon, Saumon, Caviar, Sauce Avocat Special (Rouleau Légèrement Grillé)",

        cattitle5: "Rouleau de Papier de Riz",
        catdesc5: "(Servi avec Sauce Spécial)",
        indochinetitle: "Indochine (6mcx)",
        indochine: "Saumon, Imitation de Crabe, Caviar, Laitue, Concombre",
        illusiontitle: "Illusion (6mcx)",
        illusion: "Crevette, Caviar, Salade Mixte, Concombre",
        fantasiatitle: "Fantasia (6mcx)",
        fantasia: "Crevette Tempura, Patate Douce Tempura, Salade Mixte",
        exoticatitle: "Exotica (6mcx)",
        exotica:
          "Saumon Fumée, Caviar, Strawberry, Mangue, Concombre, Salade Mixte",
        voiliertitle: "Voilier (6mcx)",
        voilier:
          "Crevette Grillé, Poivron Rouge, Caviar, Vermicelle, Salade Mixte",
        passiontitle: "Passion (6mcx)",
        passion:
          "Crevette, Imitation de Crabe, Caviar, Mangue, Concombre, Vermicelle, Salade Mixte",
        amoureuxtitle: "Amoureux (6mcx)",
        amoureux:
          "Saumon & Imitation de Crabe Panées, Caviar, Concombre, Vermicelle, Salade Mixte",
        nuetitle: "Nue (5mcx)",
        nue: "Légume Tempura, Crevette, Caviar, Avocat",

        // combo
        comboroll: "Combo Rouleau",
        comboonetitle: "Combo 1 (26mcx)",
        comboonelist: "Dragon Eye, Québec, California, Rouleau du Chef, Kappa",
        combotwotitle: "Combo 2 (26mcx)",
        combotwolist: "Kamikaze, Aloha, Rouleau du Chef, Sake Maki, Yasai",
        combothreetitle: "Combo 3 (52mcx)",
        combothreelist:
          "2 Kamikaze, 2 Aloha, 2 Rouleau du Chef, 2 Québec, 2 Yasai",
        combofourtitle: "Combo 4 (96mcx)",
        combofourlist:
          "2 Kamikaze, 2 Aloha, 2 Dragon Eye, 2 Québec, 2 Rouleau du Chef, 2 New York, 2 Boston, 2 Sake Maki, 2 Yasai",

        // lunch
        appetizer: "Entrée",
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

        dinnerhotmealsdesc: "(Servi avec riz)",
        seafood: "Fruit de Mer",
        shrimp: "Crevette",
        seafoodyakiudontitle: "Yaki Udon aux Fruits de Mer",
        seafoodyakiudon:
          "Sauté de crevettes et de pétoncles aux épices shichimi, servi avec du yaki udon (épicé)",

        assortedsushititle: "Sushi Assortis (16mcx)",
        assortedsushi: "6 nigiri sushi & 10 morceaux de rouleau maki",
        sushisashimititle: "Sushi & Sashimi (17mcx)",
        sushisashimi:
          "5 nigiri, 6 morceaux de sashimi & 6 morceaux de rouleau maki",
        sashimititle: "Sashimi (16mcx)",
        sashimi: "16 morceaux de sashimi servis avec du riz",

        notincluded:
          "Soupe ou Salade n'est pas inclue pour les commandes à emporter.",
      },
    },
  },
  fallbackLng: ["fr", "en"],
  // debug: true,

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

  load: "languageOnly",
  whitelife: ["fr", "en"],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
