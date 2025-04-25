import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProps } from 'routes';
import { emptyCart } from 'store/features/cart/slice';

export default function ContactDriver() {
  const navigation = useNavigation<NavigationProp<StackNavigationProps>>();
  const dispatch = useDispatch();

  function handleCancelOrder() {
    Alert.alert('Cancel Order', 'Are you sure you want to cancel this order?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(emptyCart({}));
          navigation.navigate('Home');
        },
      },
    ]);
  }
  return (
    <View className="mx-2 my-5 flex-row justify-between gap-4 rounded-full bg-[#f58d3e] p-2">
      <View className="rounded-full bg-[#f4cdaf] p-1">
        <Image
          source={require('../../../assets/images/driver.jpg')}
          className="h-16 w-16 rounded-full"
        />
      </View>
      <View className="flex-1 gap-2">
        <Text className="text-lg font-bold text-white">Jordan Henderson</Text>
        <Text className="text-md  text-white">Your rider</Text>
      </View>
      <View className="flex-row items-center">
        <Pressable className="mr-4 h-10 w-10 flex-row items-center justify-center self-center rounded-full bg-white p-2">
          <FontAwesome6 name="phone-flip" size={14} color="#ef8230" />
        </Pressable>
        <Pressable
          className="mr-4 h-10 w-10 flex-row items-center justify-center self-center rounded-full bg-white p-2"
          onPress={handleCancelOrder}>
          <FontAwesome name="times" size={14} color="#ef8230" />
        </Pressable>
      </View>
    </View>
  );
}
