import { useRoute, RouteProp } from '@react-navigation/native';
import Drawer from 'components/containers/restaurant/drawer';
import Cart from 'components/ui/cart';
import Hero from 'components/ui/hero';
// import { Restaurant } from 'constants/type';
import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProps } from 'routes';
import { setRestaurant as setNewRestaurant } from 'store/features/restaurant/slice';
import { fetchRestaurants } from 'utils/api';

type RestaurantRouteProp = RouteProp<StackNavigationProps>;
export default function RestaurantScreen() {
  const [restaurant, setRestaurant] = useState<any | null>(null);

  const dispatch = useDispatch();

  const route = useRoute<RestaurantRouteProp>();
  const restaurantId = route.params?.restaurantId;

  useEffect(() => {
    async function fetchAllRestaurantsRequest() {
      try {
        const res = await fetchRestaurants();

        if (restaurantId) {
          const fetchedRestaurant = res.find((restaurant: any) => restaurant._id === restaurantId)!;

          dispatch(setNewRestaurant(fetchedRestaurant));
          setRestaurant(fetchedRestaurant);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllRestaurantsRequest();
  }, [restaurantId, dispatch]);

  return (
    <View className="relative flex-1">
      <ScrollView>
        <Hero image={restaurant?.image!} />
        <Drawer restaurant={restaurant!} />
      </ScrollView>
      <Cart />
    </View>
  );
}
