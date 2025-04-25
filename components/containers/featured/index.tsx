import FeaturedItem from 'components/regular/featured/item';
import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { fetchFeaturedRestaurants } from 'utils/api';

import Restaurants from '../restaurant';

export default function Featured() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  useEffect(() => {
    async function fetchFeaturedRestaurantsRequest() {
      try {
        const res = await fetchFeaturedRestaurants();

        setFeaturedRestaurants(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFeaturedRestaurantsRequest();
  }, []);

  return (
    <ScrollView className="mb-10 mt-5">
      {featuredRestaurants.map((featured: any) => (
        <View key={featured._id}>
          <FeaturedItem featuredItem={featured} />
          <Restaurants restaurants={featured.restaurants} />
        </View>
      ))}
    </ScrollView>
  );
}
