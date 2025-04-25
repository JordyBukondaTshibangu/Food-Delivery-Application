import DishRow from 'components/regular/restaurant/dish-row';
import DrawerHeader from 'components/regular/restaurant/drawer-header';
import { View } from 'react-native';

type DrawerProps = {
  restaurant: any;
};

export default function Drawer({ restaurant }: DrawerProps) {
  return (
    <View className="-mt-12 flex-1 rounded-t-[40px] bg-white pt-10">
      <DrawerHeader
        name={restaurant?.name}
        rating={restaurant?.rating}
        category={restaurant?.type.name}
        address={restaurant?.address}
      />
      <View className="mx-5 flex-1">
        {restaurant?.dishes.map((dish: any) => (
          <DishRow
            key={dish?._id}
            id={dish?._id!}
            image={dish?.image}
            name={dish?.name}
            description={dish?.description}
            price={dish?.price}
          />
        ))}
      </View>
    </View>
  );
}
