import { NavigationProp, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useEffect } from 'react';
import { View } from 'react-native';
import { StackNavigationProps } from 'routes';

export default function OrderCreated() {
  const navigation = useNavigation<NavigationProp<StackNavigationProps>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        source={require('../assets/animations/delivery-await.json')}
        autoPlay
        loop
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}
