import Category from 'components/regular/category';
import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { fetchCategories } from 'utils/api';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategoriesRequest() {
      try {
        const res = await fetchCategories();

        setCategories(res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCategoriesRequest();
  }, []);

  return (
    <View className="mt-4">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible">
        {categories.map(({ _id, image, name }) => (
          <Category key={_id} _id={_id} image={image} name={name} />
        ))}
      </ScrollView>
    </View>
  );
}
