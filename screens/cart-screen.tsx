import ItemsList from 'components/containers/cart/items-list';
import CartDetailsInfo from 'components/regular/cart/cart-info';
import DeliveryTime from 'components/regular/cart/delivery-time';
import CartHeader from 'components/regular/cart/header';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from 'store/features/restaurant/slice';

export default function CartScreen() {
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="relative flex-1">
      <CartHeader name={restaurant?.name!} />
      <DeliveryTime />
      <ItemsList restaurant={restaurant!} />
      <CartDetailsInfo />
    </View>
  );
}
