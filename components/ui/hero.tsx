import { useNavigation } from '@react-navigation/native';
import IconButton from 'components/ui/icon-button';
import { View, Image } from 'react-native';
import { urlFor } from 'utils/sanity';

type HeroProps = {
  image: any;
};

export default function Hero({ image }: HeroProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View className="relative w-full">
      {image ? (
        <Image
          source={{ uri: urlFor(image).url() }}
          className="h-72 w-full  rounded-t-3xl object-cover"
        />
      ) : (
        <Image
          source={require('../../assets/images/place-holder-restaurant.png')}
          className="h-72 w-full  rounded-t-3xl object-cover"
        />
      )}

      <View className="absolute left-4 top-14">
        <IconButton name="arrow-left" size={24} color="white" onPress={handleGoBack} />
      </View>
    </View>
  );
}
