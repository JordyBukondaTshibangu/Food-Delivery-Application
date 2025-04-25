import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from 'screens/cart-screen';
import DeliveryScreen from 'screens/delivery-screen';
import FeaturedScreen from 'screens/featured-screen';
import HomeScreen from 'screens/home-screen';
import OrderCreated from 'screens/order-created-screen';
import RestaurantScreen from 'screens/restaurant-screen';

export type StackNavigationProps = {
  Home: undefined;
  Restaurant: {
    restaurantId: number;
  };
  Cart: undefined;
  OrderCreated: undefined;
  Delivery: undefined;
  Featured: undefined;
};
const Stack = createNativeStackNavigator<StackNavigationProps>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Featured"
          component={FeaturedScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen
          name="OrderCreated"
          component={OrderCreated}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
