import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { urlFor } from 'utils/sanity';

type CategoryProps = {
  _id: string;
  image: any;
  name: string;
};

export default function Category({ _id, image, name }: CategoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('');

  const isActiveClass = _id === activeCategory;
  const btnClass = isActiveClass ? 'bg-gray-400' : 'bg-gray-100';
  const textClass = isActiveClass ? 'text-gray-600' : 'text-gray-400';

  return (
    <View className="mr-4 flex items-center justify-center gap-2">
      <Pressable
        className={`rounded-full bg-gray-200 p-1 shadow ${btnClass}`}
        onPress={() => setActiveCategory(_id)}>
        <View className="h-12 w-12 rounded-full">
          <Image source={{ uri: urlFor(image).url() }} className="h-12 w-12 rounded-full" />
        </View>
      </Pressable>

      <Text className={`text-sm text-gray-600 ${textClass}`}>{name}</Text>
    </View>
  );
}
