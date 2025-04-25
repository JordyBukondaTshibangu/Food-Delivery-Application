import { NavigationProp, useNavigation } from '@react-navigation/native';
import IconButton from 'components/ui/icon-button';
import { View, Text } from 'react-native';
import { StackNavigationProps } from 'routes';

type CartHeaderProps = {
  name: string;
};

export default function CartHeader({ name }: CartHeaderProps) {
  const navigation = useNavigation<NavigationProp<StackNavigationProps>>();

  return (
    <View className="flex-row items-center justify-between px-5 py-2">
      <View className="absolute left-5 top-5 flex-row items-center gap-2">
        <IconButton name="arrow-left" size={24} color="white" onPress={() => navigation.goBack()} />
      </View>
      <View className="w-full items-center gap-2">
        <Text className="text-center text-xl font-bold">Your Cart</Text>
        <Text className="text-md font-bold text-gray-500">{name}</Text>
      </View>
    </View>
  );
}
