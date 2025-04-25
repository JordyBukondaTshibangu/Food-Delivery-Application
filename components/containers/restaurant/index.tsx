import RestaurantCard from 'components/regular/restaurant/card';
import { FlatList } from 'react-native';

export default function Restaurants({ restaurants }: any) {
  return (
    <FlatList
      horizontal
      data={restaurants}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <RestaurantCard restaurant={item} />}
      className="mt-5 p-5"
    />
  );
}
