import FeaturedItemList from 'components/regular/featured/list-item';
import { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { fetchFeatured } from 'utils/api';

export default function FeaturedScreen() {
  const [featuredList, setFeaturedList] = useState([]);

  useEffect(() => {
    async function fetchFeaturedRestaurantsRequest() {
      try {
        const res = await fetchFeatured();

        setFeaturedList(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFeaturedRestaurantsRequest();
  });
  return (
    <SafeAreaView className="flex-1 gap-4 bg-[#f4cdaf] py-5">
      <Text className="mt-10 text-center text-3xl font-bold text-white underline">
        List of all featured
      </Text>
      <View className="flex-1 gap-4 p-5">
        {featuredList.length > 0 ? (
          featuredList.map((item, index) => <FeaturedItemList key={index} featured={item} />)
        ) : (
          <Text className="text-center text-lg font-bold text-gray-700">No featured found</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
