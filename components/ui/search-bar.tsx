import Feather from '@expo/vector-icons/Feather';
import { Text, View, TextInput } from 'react-native';

export default function SearchBar() {
  return (
    <View className="flex-row items-center gap-3 space-x-2 px-4 pb-2">
      <View className="flex-1 flex-row items-center rounded-full border border-gray-300 bg-white p-3 py-4">
        <Feather name="search" size={20} color="gray" />

        <TextInput placeholder="Restaurants and cuisines" className="ml-2 flex-1" />

        <View className="flex-row items-center gap-2 space-x-2 border-l border-gray-300 pl-1">
          <Feather name="map-pin" size={16} color="gray" />

          <Text className="text-gray-400">Kinshasa, DRC</Text>
        </View>
      </View>

      <View className="flex-row items-center rounded-full  border-gray-300 bg-[rgba(251,144,60,1)]  p-3">
        <Feather name="sliders" size={20} color="white" />
      </View>
    </View>
  );
}
