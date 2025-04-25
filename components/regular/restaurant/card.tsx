import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { StackNavigationProps } from 'routes';
import { urlFor } from 'utils/sanity';

type RestaurantCardNavigation = NavigationProp<StackNavigationProps>;

type RestaurantCardProps = {
  restaurant: any;
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { _id, name, image, address, rating, category } = restaurant;
  const navigation = useNavigation<RestaurantCardNavigation>();

  function handleViewRestaurant() {
    navigation.navigate('Restaurant', {
      restaurantId: _id,
    });
  }

  return (
    <Pressable className="w-80" onPress={handleViewRestaurant}>
      <View className="mr-6 rounded-3xl bg-white shadow-lg" style={styles.container}>
        <Image
          source={{ uri: urlFor(image).url() }}
          className="h-40 w-full max-w-80 rounded-t-3xl object-cover"
        />

        <View className="gap-2 space-y-2 px-3 pb-4">
          <Text className="pt-2 text-lg font-bold">{name}</Text>

          <View className="flex-row items-center space-x-1">
            {Array(rating).map((_, index: number) => (
              <Entypo key={index} name="star" size={16} color="orange" className="mr-1" />
            ))}

            <Text className="text-xs">
              <Text className="text-green-700">({rating} review)</Text>
              <Text className="font-semibold">{category}</Text>
            </Text>
          </View>

          <View className="mt-4 flex-row items-center gap-1 space-x-1">
            <Feather name="map-pin" size={14} color="gray" />
            <Text className="text-xs text-gray-700">Nearby {address}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(251,144,60,1)',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    shadowOffset: { width: 1, height: 2 },
  },
});
