export type Category = {
  id: string;
  name: string;
  imageUrl: string;
};

export type Featured = {
  id: string;
  title: string;
  description: string;
};

export type Dish = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  address: string;
  reviews: number;
  category: string;
  number: string;
  rating: number;
  deliveryTime: number;
  isOpenNow: boolean;
  priceRange: '$' | '$$' | '$$$';
  menuUrl: string;
  dishes: Dish[];
  lat: number;
  long: number;
};

export type Cart = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};
