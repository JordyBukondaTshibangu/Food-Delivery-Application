import CartItem from 'components/regular/cart/item';
import { Cart, Restaurant } from 'constants/type';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'store/features/cart/slice';

type ItemsListProps = {
  restaurant: Restaurant;
};

type GroupedCartItems = {
  [dishId: number]: Cart[];
};

export default function ItemsList({ restaurant }: ItemsListProps) {
  const cartItems = useSelector(selectCartItems);
  const [groupItems, setGroupItems] = useState<GroupedCartItems>({});

  useEffect(() => {
    const items = cartItems.reduce((group: GroupedCartItems, item: Cart) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});

    setGroupItems(items);
  }, [cartItems]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 15 }}>
      {Object.entries(groupItems).map(([dishId, dishes]) => {
        return <CartItem key={dishId} dish={dishes[0]} totalDishes={dishes.length} />;
      })}
    </ScrollView>
  );
}
