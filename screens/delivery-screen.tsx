import DeliveryDetails from 'components/containers/delivery/details';
import Map from 'components/containers/delivery/map';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from 'store/features/restaurant/slice';

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);

  const initialRegion = {
    latitude: restaurant?.lat!,
    longitude: restaurant?.long!,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View className="flex-1 ">
      <Map initialRegion={initialRegion} restaurantName={restaurant?.name!} />
      <DeliveryDetails />
    </View>
  );
}
