import { View, Text } from 'react-native';

export default function EstimatedTime() {
  return (
    <View className="w-full  gap-2">
      <Text className="text-center text-xl font-bold">Your Delivery</Text>
      <Text className="text-lg font-bold text-gray-700">Estimated Arrival</Text>
      <Text className="text-3xl font-bold text-gray-700">20-30 Minutes</Text>
      <Text className="text-xs font-semibold  text-gray-700">Your order is on its way</Text>
    </View>
  );
}
