import ContactDriver from 'components/regular/delivery/contact-driver';
import EstimatedTime from 'components/regular/delivery/estimated-time';
import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

export default function DeliveryDetails() {
  return (
    <View className="relative  flex-[0.5] rounded-t-[48px] bg-white">
      <View className="flex  px-5 py-2">
        <EstimatedTime />
        <View className="absolute right-5 top-10 flex-row items-center gap-2 ">
          <LottieView
            loop
            autoPlay
            style={styles.animation}
            source={require('../../../assets/animations/delivery-animated-2.json')}
          />
        </View>
        <ContactDriver />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
    transform: [{ scaleX: 1 }],
  },
});
