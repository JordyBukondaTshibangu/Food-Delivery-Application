import IconButton from 'components/ui/icon-button';
import { Dish } from 'constants/type';
import { View, Text, Image, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeFromCart } from 'store/features/cart/slice';

type CartItemProps = {
  dish: Dish;
  totalDishes: number;
};

export default function CartItem({ dish, totalDishes }: CartItemProps) {
  const dispatch = useDispatch();

  return (
    <View className="mt-5 flex-row items-center justify-between gap-2 rounded-3xl bg-white p-4">
      <Text className="text-lg font-bold text-[#ef8230]">{totalDishes} x</Text>
      <View className="w-20">
        <Image source={{ uri: dish.image }} className="h-14 w-14 rounded-full" />
      </View>
      <Text className="text-md flex-1 font-bold">{dish.name}</Text>
      <Text className="text-lg font-bold">${dish.price}</Text>

      <Pressable className="ml-2">
        <IconButton
          name="minus"
          size={14}
          color="white"
          onPress={() => dispatch(removeFromCart({ id: dish.id }))}
        />
      </Pressable>
    </View>
  );
}
