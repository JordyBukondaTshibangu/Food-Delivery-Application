import Feather from '@expo/vector-icons/Feather';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { StackNavigationProps } from 'routes';

type FeaturedItemProps = {
  featuredItem: any;
};

export default function FeaturedItem({ featuredItem }: FeaturedItemProps) {
  const { name, description } = featuredItem;
  const navigation = useNavigation<NavigationProp<StackNavigationProps>>();

  return (
    <View>
      <View className="flex-row items-center justify-between px-4">
        <View>
          <Text className="text-lg font-bold">{name} </Text>

          <Text className="text-xs text-gray-500">{description}</Text>
        </View>
        <Pressable
          className="flex-row items-center"
          onPress={() => navigation.navigate('Featured')}>
          <Text className="border-b-[0.5px] border-[#ee9654] text-[#ee9654]">See All</Text>
          <Feather
            size={16}
            color="#ee9654"
            name="chevrons-right"
            className=" border-b-[0.5px] border-[#ee9654]"
          />
        </Pressable>
      </View>
    </View>
  );
}
