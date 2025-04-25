import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { View, Text } from 'react-native';

type DrawerProps = {
  name: string;
  rating: number;
  category: string;
  address: string;
};

export default function DrawerHeader({ name, rating, category, address }: DrawerProps) {
  return (
    <View className="-mt-12 rounded-t-[40px] bg-white pt-10 ">
      <View className="gap-2 px-5 pb-2">
        <Text className="text-3xl font-bold">{name}</Text>

        <View className="flex-row items-center gap-3">
          <View className="flex-row gap-1">
            {Array(rating?.toFixed(0)).map((_, index: number) => (
              <Entypo key={index} name="star" size={16} color="#FFFF15" />
            ))}

            <Text className="text-xs">
              <Text className="text-green-700">({rating} review )</Text>
              <Text className="font-semibold">{' ' + category}</Text>
            </Text>
          </View>

          <View className="flex-row gap-1">
            <Feather name="map-pin" size={12} color="gray" />
            <Text className="text-xs text-gray-700">Nearby {address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
