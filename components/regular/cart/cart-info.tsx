import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProps } from 'routes';
import { selectCartTotal } from 'store/features/cart/slice';
export default function CartDetailsInfo() {
  const navigation = useNavigation<NavigationProp<StackNavigationProps>>();

  const cartTotal = useSelector(selectCartTotal);
  const deliveryFee = 3;

  return (
    <View className="min-h-[200px] flex-1 rounded-t-[32px] bg-[#f4cdaf] px-10 py-5">
      <View className="flex-1 flex-row justify-between">
        <Text className="text-md text-gray-700">Subtotal</Text>
        <Text className="text-md ">${cartTotal.toFixed(2)}</Text>
      </View>
      <View className="flex-1 flex-row justify-between">
        <Text className="text-md text-gray-700">Delivery Fee</Text>
        <Text className="text-md ">${deliveryFee}</Text>
      </View>
      <View className="flex-1 flex-row justify-between">
        <Text className="text-md font-extrabold text-gray-700">Order Total</Text>
        <Text className="text-md font-extrabold">${(cartTotal + deliveryFee).toFixed(2)}</Text>
      </View>

      <Pressable
        className="my-4 flex-row items-center justify-center rounded-full bg-[rgba(251,144,60,1)] p-2"
        onPress={() => navigation.navigate('OrderCreated')}>
        <Text className="text-lg font-bold text-white">Place Order</Text>
      </Pressable>
    </View>
  );
}
