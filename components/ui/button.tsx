import { View, Text } from 'react-native';

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export default function Button() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}
