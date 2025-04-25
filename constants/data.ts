import { Category, Featured, Restaurant } from './type';

const restaurantCategories: Category[] = [
  {
    id: 1,
    name: 'Pizza',
    imageUrl:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Burgers',
    imageUrl:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Sushi',
    imageUrl:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Salads',
    imageUrl:
      'https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Desserts',
    imageUrl:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Drinks',
    imageUrl:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: 'African',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: 'Chinese',
    imageUrl:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: 'Vegan',
    imageUrl:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const featured: Featured[] = [
  {
    id: 1,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
  },
  {
    id: 2,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
  },
  {
    id: 3,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
  },
  {
    id: 4,
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
  },
];

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Mama's Pizzeria",
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '123 Main Street, Kinshasa',
    reviews: 124,
    category: 'Pizza',
    number: '+243 800 111 111',
    rating: 4.5,
    deliveryTime: 30,
    isOpenNow: true,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/mamas-pizzeria',
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
  },
  {
    id: 2,
    name: 'Burger Palace',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '456 Avenue des Poètes, Kinshasa',
    reviews: 312,
    category: 'Burgers',
    number: '+243 800 222 222',
    rating: 4.2,
    deliveryTime: 25,
    isOpenNow: true,
    priceRange: '$',
    menuUrl: 'https://example.com/menu/burger-palace',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 3,
    name: 'Sakura Sushi Bar',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '88 Rue des Étoiles, Kinshasa',
    reviews: 201,
    category: 'Sushi',
    number: '+243 800 333 333',
    rating: 4.7,
    deliveryTime: 40,
    isOpenNow: false,
    priceRange: '$$$',
    menuUrl: 'https://example.com/menu/sakura-sushi',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 4,
    name: 'The Healthy Leaf',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '12 Wellness Lane, Kinshasa',
    reviews: 98,
    category: 'Salads',
    number: '+243 800 444 444',
    rating: 4.3,
    deliveryTime: 20,
    isOpenNow: true,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/healthy-leaf',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 5,
    name: 'Sweet Treats Café',
    image:
      'https://images.unsplash.com/photo-1606788075760-18b2df4b221d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '789 Dessert Blvd, Kinshasa',
    reviews: 147,
    category: 'Desserts',
    number: '+243 800 555 555',
    rating: 4.6,
    deliveryTime: 15,
    isOpenNow: true,
    priceRange: '$',
    menuUrl: 'https://example.com/menu/sweet-treats',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 6,
    name: 'Liquid Lounge',
    image:
      'https://images.unsplash.com/photo-1532635223-4789f6f918d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '21 Cocktail Street, Kinshasa',
    reviews: 89,
    category: 'Drinks',
    number: '+243 800 666 666',
    rating: 4.1,
    deliveryTime: 10,
    isOpenNow: false,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/liquid-lounge',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 7,
    name: 'Taste of Africa',
    image:
      'https://images.unsplash.com/photo-1608032077018-6dc2dc020f56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '90 Umoja Road, Kinshasa',
    reviews: 174,
    category: 'African',
    number: '+243 800 777 777',
    rating: 4.8,
    deliveryTime: 35,
    isOpenNow: true,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/taste-of-africa',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 8,
    name: 'Dragon Wok',
    image:
      'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '34 Lotus Avenue, Kinshasa',
    reviews: 260,
    category: 'Chinese',
    number: '+243 800 888 888',
    rating: 4.4,
    deliveryTime: 28,
    isOpenNow: false,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/dragon-wok',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
  {
    id: 9,
    name: 'Green Earth',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    address: '77 Nature Way, Kinshasa',
    reviews: 134,
    category: 'Vegan',
    number: '+243 800 999 999',
    rating: 4.9,
    deliveryTime: 22,
    isOpenNow: true,
    priceRange: '$$',
    menuUrl: 'https://example.com/menu/green-earth',
    location: {
      latitude: -4.325,
      longitude: 15.322,
    },
    dishes: [
      {
        id: 1,
        name: 'Margherita Pizza',
        image:
          'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 12.99,
      },
      {
        id: 2,
        name: 'Double Cheeseburger',
        image:
          'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 9.49,
      },
      {
        id: 3,
        name: 'Salmon Nigiri',
        image:
          'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 15.0,
      },
    ],
  },
];

export { restaurantCategories, featured, restaurants };
