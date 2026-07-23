export interface MenuItem {
  name: string;
  price: number | string;
  badge?: string;
  description?: string;
  subcategory?: string;
}

export interface MenuColumn {
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  tag: string;
}

export interface Metric {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const MENU_COLUMNS: MenuColumn[] = [
  {
    title: "Fine Dine Special",
    subtitle: "Pillar 01: Masterfully curated signature kebabs, rich chaaps and entrees",
    items: [
      // STARTERS
      { 
        name: "Fine Dine Special Kabab (03 Pcs)", 
        price: 300, 
        badge: "Chef's Masterpiece", 
        description: "Chunks of boneless chicken marinated in tandoori spices stuffed with cheese & grilled in charcoal",
        subcategory: "STARTERS"
      },
      { 
        name: "Fine Dine Nizami Tikka (06 Pcs)", 
        price: 300, 
        badge: "Best Seller", 
        description: "Boneless chicken marinated in juicy mixture of poppy seeds, cheese, cashewnuts & garnished with chilli flakes",
        subcategory: "STARTERS"
      },
      { 
        name: "Fine Dine Reshmi Kabab (06 Pcs)", 
        price: 320, 
        description: "Boneless chicken marinated in juicy mixture of curd, cream, cashewnuts & garnished with egg white foam",
        subcategory: "STARTERS"
      },
      { 
        name: "Fine Dine Special Bali Prawns (05 Pcs)", 
        price: 350, 
        badge: "Exotic", 
        description: "Indonesian style crispy fried prawns",
        subcategory: "STARTERS"
      },
      { 
        name: "Fine Dine Special Mutton Chaap (03 Pcs)", 
        price: 500, 
        badge: "Royal Delicacy", 
        description: "Mutton chops marinated in Fine Dine special masala & grilled in tandoor",
        subcategory: "STARTERS"
      },
      { 
        name: "Kathi Kabab", 
        price: 280, 
        subcategory: "STARTERS"
      },
      { 
        name: "Chicken Szechuan Strips", 
        price: 280, 
        subcategory: "STARTERS"
      },
      { 
        name: "Boti Kabab", 
        price: 300, 
        subcategory: "STARTERS"
      },
      // MAIN COURSE
      { 
        name: "Fine Dine Special Murg Patiala", 
        price: 400, 
        badge: "Highly Recommended",
        description: "Chunks of boneless chicken wrapped in egg sheet & cooked in Punjabi style cashew & creamy curry base",
        subcategory: "MAIN COURSE"
      },
      { 
        name: "Fine Dine Special Punjabi Chicken (06 Pcs)", 
        price: 375, 
        description: "Chicken prepared in Punjabi style red curry base",
        subcategory: "MAIN COURSE"
      },
      { 
        name: "Pilaf Rice with Murg Malai", 
        price: 350, 
        badge: "Signature Combo", 
        description: "Fine Dine special rice served with makhanwala gravy & murg malai",
        subcategory: "MAIN COURSE"
      },
      { 
        name: "Fine Dine Special Mutton Chaap Masala (03 Pcs)", 
        price: 550, 
        badge: "Ultimate Treat", 
        description: "Mutton chop gravy cooked in cardamom, mace & cinnamon",
        subcategory: "MAIN COURSE"
      },
      { 
        name: "Chelow Kabab", 
        price: 400, 
        description: "Authentic saffron rice served with premier kebabs & dynamic butter layout",
        subcategory: "MAIN COURSE"
      }
    ]
  },
  {
    title: "Indian from Tandoor",
    subtitle: "Pillar 02: Clay oven roasts, traditional skewers and cottage cheese classics",
    items: [
      { name: "Paneer Tikka", price: 230, subcategory: "VEG TANDOOR" },
      { name: "Paneer Pahadi", price: 230, subcategory: "VEG TANDOOR" },
      { name: "Tandoori Mushroom", price: 230, subcategory: "VEG TANDOOR" },
      { name: "Paneer Malai", price: 240, subcategory: "VEG TANDOOR" },
      { name: "Murg Tikka", price: 230, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Haryali", price: 240, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Lasooni", price: 240, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Malai Kabab", price: 260, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Kali Mirch", price: 250, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Seekh", price: 250, subcategory: "NON-VEG TANDOOR" },
      { name: "Achari Murg", price: 270, subcategory: "NON-VEG TANDOOR" },
      { name: "Murg Banjara", price: 280, subcategory: "NON-VEG TANDOOR" },
      { name: "Tangdi Kabab (4 Pcs)", price: 400, badge: "Signature", subcategory: "NON-VEG TANDOOR" },
      { name: "Tandoori Murg (Half)", price: 250, subcategory: "NON-VEG TANDOOR" },
      { name: "Tandoori Murg (Full)", price: 450, subcategory: "NON-VEG TANDOOR" },
      { name: "Mutton Seekh", price: 300, subcategory: "NON-VEG TANDOOR" },
      { name: "Mutton Nawabi", price: 320, subcategory: "NON-VEG TANDOOR" },
      { 
        name: "Mixed Tandoor Platter", 
        price: 750, 
        badge: "Royal Sharing",
        description: "Murg Tangdi + Murg Malai + Murg Seekh + Murg Haryali",
        subcategory: "PLATTERS"
      }
    ]
  },
  {
    title: "Oriental",
    subtitle: "Pillar 03: Street-style Asian glazes, steamed dimsums, and wok-tossed bowls",
    items: [
      // APPETISER VEG
      { 
        name: "Veg Spring Roll", 
        price: 230, 
        description: "Crispy Fried Vegetables Spring Roll with Sweet Chilli Sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Corn' Salt n Pepper", 
        price: 230, 
        description: "Crispy Fried corn with Oriental seasoning",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Veg Dimsum", 
        price: 240, 
        description: "Steamed Dumplings with Oriental Sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Veg Bao", 
        price: 260, 
        description: "Steamed Chinese bread rolls with stuffed Vegetables",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Paneer Chilli Dry", 
        price: 250, 
        description: "Battered Fried Cottage Cheese tossed in chilli sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Veg Balls Manchurian Dry", 
        price: 260, 
        description: "Deep fried vegetable dumpling tossed in soya garlic sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Crispy Vegetable", 
        price: 260, 
        description: "Fried Vegetables tossed with Sweet n sour Sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Crispy Baby Corn", 
        price: 260, 
        description: "Fried Vegetables tossed with Sweet n sour Sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Stylish Shrooms", 
        price: 280, 
        description: "Battered Fried Mushroom tossed in peanut butter sauce",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Paneer Satay", 
        price: 300, 
        description: "Strips of Char grilled marinated Cottage Cheese served with peanut sauce",
        subcategory: "APPETISER VEG"
      },
      // APPETISER NON-VEG
      { 
        name: "TOD MUN PLA (Fish Cake)", 
        price: 300, 
        badge: "Thai Classic",
        description: "Deep Fried minced Fish marinated with curry paste served with cucumber and peanut sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Chicken Spring Roll", 
        price: 260, 
        description: "Crisp Fried Chicken Spring Roll with Sweet Chilli Sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Chicken Dimsum", 
        price: 280, 
        description: "Steamed Dumplings stuffed with minced Chicken",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Chicken Bao", 
        price: 280, 
        description: "Steamed Chinese bread rolls with stuffed Chicken and Oriental Sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Chicken Satay", 
        price: 300, 
        description: "Strips of Char grilled herb marinated Chicken served with peanut sauce",
        subcategory: "APPETISER NON-VEG"
      },
      // MAIN COURSE VEG
      { 
        name: "Asian Exotic Vegetables", 
        price: 290, 
        description: "Vegetables tossed in Soya Sauce",
        subcategory: "MAIN COURSE VEG"
      },
      { 
        name: "HED THOD", 
        price: 300, 
        description: "Crispy Fried Mushroom with chilli black bean Sauce",
        subcategory: "MAIN COURSE VEG"
      },
      { 
        name: "Paneer Chilli / Szechuan / Chilli Garlic", 
        price: 300, 
        subcategory: "MAIN COURSE VEG"
      },
      // MAIN COURSE NON-VEG
      { 
        name: "Thai Curry (Red/Green)", 
        price: "Veg: ₹270 | Chicken: ₹300 | Prawn: ₹350", 
        badge: "Authentic",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "PLA RAD PRICK", 
        price: 300, 
        description: "Crisp Fried Fish fillet with sweet Chilli Sauce",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "GAI PHAD SZECHUAN", 
        price: 340, 
        description: "Stir fried Chicken in Szechuan Sauce",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "GAI PHAD MED MA-MUANG", 
        price: 350, 
        description: "Wok Fried Chicken with cashew nuts",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "Fine Dine Spiced Chicken", 
        price: 360, 
        description: "Choice of Sauce: Kung Pao / Black Bean / Chilli Garlic / Hunan",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "Garlic Butter Prawn", 
        price: 400, 
        description: "Prawn wok tossed in garlic butter sauce",
        subcategory: "MAIN COURSE NON-VEG"
      },
      { 
        name: "GOONG PHAD SZECHUAN", 
        price: 400, 
        description: "Wok Fried Prawns with Szechuan Chilli Sauce",
        subcategory: "MAIN COURSE NON-VEG"
      }
    ]
  },
  {
    title: "Continental",
    subtitle: "Pillar 04: Western classics, golden fries, burgers and signature cheese toasts",
    items: [
      // APPETISER VEG
      { name: "French Fries", price: 180, subcategory: "APPETISER VEG" },
      { 
        name: "Bruschetta's", 
        price: 240, 
        description: "Mexican style oven roasted bread with olive basil & tomato toppings",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Cheese Chilli Toast", 
        price: 240, 
        description: "Oven roasted slice bread topped up with cheese, topper and chilli flakes",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Garlic Bread", 
        price: 240, 
        description: "Oven roasted bread topped with flavours of garlic",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Vegetable Burger", 
        price: 260, 
        description: "Burger Buns with continental style veg patty and sauce",
        subcategory: "APPETISER VEG"
      },
      { name: "Cheese Garlic Bread", price: 260, subcategory: "APPETISER VEG" },
      { 
        name: "Chilli Crusted Mozzarella Sticks", 
        price: 280, 
        description: "Deep Fried mozzarella cheese strips with continental seasoning",
        subcategory: "APPETISER VEG"
      },
      { 
        name: "Fine Dine Special Sandwich", 
        price: 280, 
        description: "White Bread, cucumber, tomato, lettuce, slice cheese, creamy corn, served grilled or toasted",
        subcategory: "APPETISER VEG"
      },
      // APPETISER NON-VEG
      { 
        name: "Drums of Heaven", 
        price: 300, 
        badge: "Chef's Delight",
        description: "Chicken lollipop tossed in Oriental Sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Korean Fried Wings", 
        price: 300, 
        description: "Chicken Wings tossed in Korean Style Barbeque sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "GOONG HOM PHA", 
        price: 350, 
        description: "Prawns Marinated with thai herbs, Wrapped & Deep Fried",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Crispy Lamb", 
        price: 380, 
        description: "Shredded Crispy Lamb tossed with red chilli & scallions",
        subcategory: "APPETISER NON-VEG"
      },
      { name: "Chicken Nuggets", price: 250, subcategory: "APPETISER NON-VEG" },
      { 
        name: "Chicken Burger", 
        price: 280, 
        description: "Burger bun with Continental style chicken Patty",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Cajun Spiced Chicken Strips", 
        price: 280, 
        description: "Strips of Chicken with continental Spice",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Barbeque Wings", 
        price: 280, 
        description: "Chicken wings tossed in barbeque sauce",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Fish and Chips", 
        price: 280, 
        description: "Continental style Fried Fish served with French Fries",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Fine Dine Special Club Sandwich", 
        price: 300, 
        description: "Slice Bread with barbeque minced chicken, Fried Egg, cheese & Vegetables",
        subcategory: "APPETISER NON-VEG"
      },
      { 
        name: "Chicken Jalapeno Poppers", 
        price: 300, 
        description: "Deep Fried Shredded Chicken with Cheddar Cheese stuffed with Jalapenos",
        subcategory: "APPETISER NON-VEG"
      }
    ]
  },
  {
    title: "Soups & Salads",
    subtitle: "Pillar 05: Light herbed vegetable broths, protein salads, and zesty dressings",
    items: [
      // SOUPS
      { 
        name: "Sweet Corn Soup", 
        price: "Veg: ₹180 | Chicken: ₹210", 
        subcategory: "SOUPS" 
      },
      { 
        name: "Tom Cheed Wun Sen", 
        price: "Veg: ₹180 | Chicken: ₹210 | Prawn: ₹240", // Added prawn option gracefully for complete coverage
        description: "Clear Soup, vegetables and glass noodles",
        subcategory: "SOUPS" 
      },
      { 
        name: "Chicken Veloute Soup", 
        price: 220, 
        description: "Soup made of Chicken stock and cream and thickened with butter and flour",
        subcategory: "SOUPS" 
      },
      { 
        name: "Chicken Pastina Soup", 
        price: 240, 
        description: "Italian Chicken Soup with little pasta and shredded chicken",
        subcategory: "SOUPS" 
      },
      // SALADS
      { 
        name: "Green Salad", 
        price: 150, 
        description: "Variety of garden green veggies",
        subcategory: "SALADS" 
      },
      { 
        name: "SOM TAM JE", 
        price: "Veg: ₹240 | Prawn: ₹350", 
        description: "Green Papaya topped with roasted peanuts and spicy lemon dressing",
        subcategory: "SALADS" 
      },
      { 
        name: "YUM WUN SEN", 
        price: "Veg: ₹240 | Chicken: ₹260 | Prawn: ₹350", 
        description: "Glass noodle salad with tomato, celery and spicy lemon dressing",
        subcategory: "SALADS" 
      },
      { 
        name: "Nostrana", 
        price: 260, 
        description: "Mixed leaf salad, Chicken, Potato, Green Beans, Fried peppers, hard boiled Egg, and vinaigrette dressing",
        subcategory: "SALADS" 
      },
      { 
        name: "Chicken Caesar", 
        price: 280, 
        description: "Anchovies, Parmesan, croutons, Roman Lettuce, Chicken breast strips and caesar dressing",
        subcategory: "SALADS" 
      }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    author: "Ananya Patnaik",
    text: "Mughlai cuisine specialty with amazing cozy decor, fast polite service, and multi-cuisine varieties. Pilaf Rice with Murgh Malai and Punjabi Chicken are absolute highlights!",
    rating: 5,
    tag: "Authentic Mughlai"
  },
  {
    id: "review-2",
    author: "Debasish Mohanty",
    text: "Top-notch ambiance near ABC Square. Impeccable service, comfortable seating options, and superb Drums of Heaven.",
    rating: 5,
    tag: "ABC Square Elite"
  },
  {
    id: "review-3",
    author: "Rohan Das",
    text: "Fine Dine Special Kabab has that perfect melt-in-mouth cheese center and smoky charcoal glaze. Truly the XYZ standard!",
    rating: 5,
    tag: "Signature Kebabs"
  }
];

export const METRICS: Metric[] = [
  {
    id: "metric-1",
    title: "Mughlai Tandoor Specialists",
    description: "Signature slow-cooked meats, authentic spice marinades, and charcoal-baked clay ovens.",
    icon: "UtensilsCrossed"
  },
  {
    id: "metric-2",
    title: "Cozy Lounge Sanctuary",
    description: "Premium ambient light setup, elegant plush seating, and rich low-decibel music lounge.",
    icon: "Compass"
  },
  {
    id: "metric-3",
    title: "Convenient ABC Square Hub",
    description: "Strategically located right beside HP Petrol Pump, XYZ with ample dedicated space.",
    icon: "ParkingCircle"
  },
  {
    id: "metric-4",
    title: "Premier Hospitality & Service",
    description: "High-speed contactless dining bills, highly trained tableside crew, and custom event hosting.",
    icon: "Zap"
  }
];
