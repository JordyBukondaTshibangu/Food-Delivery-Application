import { useNavigation, NavigationProp } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProps } from 'routes';
import { selectCartItems, selectCartTotal } from 'store/features/cart/slice';

type CartNavigation = NavigationProp<StackNavigationProps, 'Cart'>;

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const navigation = useNavigation<CartNavigation>();

  if (cartItems.length === 0) return null;

  return (
    <Pressable
      className="absolute bottom-5 z-50 w-full"
      onPress={() => navigation.navigate('Cart')}>
      <View className="mx-5 flex-row items-center justify-between rounded-full bg-[rgba(251,144,60,1)] px-5 py-2">
        <View className="rounded-full bg-[#ffb67f] px-4 py-2">
          <Text className="text-lg font-bold text-white">{cartItems.length}</Text>
        </View>
        <Text className="text-lg font-bold text-white">View Cart</Text>
        <Text className="text-lg font-bold text-white">${total?.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}
