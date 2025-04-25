import { client } from './sanity';

const sanityQuery = (query: string, params?: any) => {
  return client.fetch(query, params);
};

export const fetchFeaturedRestaurants = () => {
  return sanityQuery(`*[_type == 'featured']{ 
      _id, 
        name, 
        description,
        "restaurants" : restaurant[]->{
          _id, 
          long,
          lat,
          ratings,
          number,
          name,
          address,
          image,
          description,
          reviews,
          deliveryTime,
          isOpenNow,
          dishes[]->{
            ...
          },
          type->{
            name
          }
        }
    }`);
};

export const fetchFeatured = () => {
  return sanityQuery(`*[_type == 'featured']{ 
  _id, 
    name, 
    description,
}`);
};

export const fetchFeaturedRestaurantById = (id: string) => {
  return sanityQuery(
    `*[_type == 'featured' && _id == $id]{
        "restaurants": restaurant[]->{
          _id, 
          long,
          lat,
          ratings,
          number,
          name,
          address,
          image,
          description,
          reviews,
          deliveryTime,
          isOpenNow,
          dishes[]->{
            ...
          },
          type->{
            name
          } 
        }
    `,
    {
      id,
    }
  );
};

export const fetchCategories = () => {
  return sanityQuery(`*[_type == 'category']{ 
  _id, 
    name, 
    image
}`);
};

export const fetchRestaurants = () => {
  return sanityQuery(`*[_type == 'restaurant']{ 
  _id, 
    name, 
    image,
    description,
    lat,
    long,
    rating,
    type->{name},
    address,
    dishes[]->{
      _id,
      image,
      name,
      price,
      description
    }
}`);
};
