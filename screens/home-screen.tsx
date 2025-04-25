import Categories from 'components/containers/category';
import Featured from 'components/containers/featured';
import SearchBar from 'components/ui/search-bar';
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <SearchBar />
      <Categories />
      <Featured />
    </SafeAreaView>
  );
}
