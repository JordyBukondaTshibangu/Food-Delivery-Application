import IconButton from 'components/ui/icon-button';
import { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addToCart, removeFromCart, makeSelectCartItemsById } from 'store/features/cart/slice';
import { urlFor } from 'utils/sanity';

type DishRowProps = {
  id: string;
  image: any;
  name: string;
  description: string;
  price: number;
};
export default function DishRow({ id, image, name, description, price }: DishRowProps) {
  const dispatch = useDispatch();

  const selectItems = useMemo(() => makeSelectCartItemsById(id), [id]);
  const totalItems = useSelector((state: RootState) => selectItems(state));

  function handleIncrement() {
    dispatch(addToCart({ id, name, image, price, quantity: 1 }));
  }
  function handleDecrement() {
    dispatch(removeFromCart({ id }));
  }

  return (
    <View className=" mt-4 flex-row items-center rounded-3xl bg-gray-100 p-3 shadow-2xl">
      {image && (
        <Image
          source={{ uri: urlFor(image).url() }}
          style={{ height: 100, width: 100, borderRadius: 14 }}
        />
      )}

      <View className="flex flex-1 space-y-3">
        <View className="gap-2 pl-3">
          <Text className="text-xl">{name}</Text>
          <Text className="overflow-hidden truncate whitespace-nowrap text-xs text-gray-700">
            {description}
          </Text>
        </View>

        <View className="mt-3 flex-row items-center justify-between px-3">
          <Text className="text-lg font-bold">${price}</Text>

          <View className="flex-row items-center gap-2">
            <View className="flex-row items-center rounded-full bg-[rgba(251,144,60,1)]">
              <IconButton
                size={10}
                name="minus"
                color="white"
                onPress={handleDecrement}
                disabled={!totalItems?.length}
              />
            </View>
            <Text className="text-lg font-bold">{totalItems?.length}</Text>
            <View className="flex-row items-center rounded-full bg-[rgba(251,144,60,1)]">
              <IconButton name="plus" size={10} color="white" onPress={handleIncrement} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
