import { View, Text, Image, Pressable } from 'react-native';

export default function DeliveryTime() {
  return (
    <View className="mt-5 flex-row items-center justify-between bg-[#f4cdaf] px-4 py-5">
      <Image source={require('../../../assets/images/delivery-bike.png')} className="h-20 w-20 " />
      <Text className=" text-lg">Delivery in 50-75 min</Text>
      <Pressable className="p-2">
        <Text className="text-lg font-bold text-[#ef8230]"> Change</Text>
      </Pressable>
    </View>
  );
}
