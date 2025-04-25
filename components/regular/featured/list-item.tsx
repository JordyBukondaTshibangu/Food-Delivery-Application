import { View, Text } from 'react-native';

type FeaturedItemProps = {
  featured: any;
};
export default function FeaturedItemList({ featured }: FeaturedItemProps) {
  return (
    <View className="w-full gap-3 rounded-3xl bg-white px-5 py-4">
      <Text className="text-md font-bold italic">{featured.name}</Text>
      <View className="flex-row gap-1">
        <Text className="font-bold underline">Description:</Text>
        <Text>{featured.description}</Text>
      </View>
    </View>
  );
}
