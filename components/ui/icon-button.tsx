import Feather from '@expo/vector-icons/Feather';
import { ComponentProps } from 'react';
import { Pressable } from 'react-native';

type IconButtonProps = {
  name: ComponentProps<typeof Feather>['name'];
  size: number;
  color: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function IconButton({ name, size, color, onPress, disabled }: IconButtonProps) {
  return (
    <Pressable
      className="items-center justify-center rounded-full  bg-[rgba(251,144,60,1)] p-2"
      onPress={onPress}
      disabled={disabled}>
      <Feather name={name} size={size} color={color} />
    </Pressable>
  );
}
