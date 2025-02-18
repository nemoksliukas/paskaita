import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface ButtonOptionProps {
  text: string;
  onPress: () => void;
  disabled: boolean;
}

const CustomBtn = ({ text, onPress, disabled = false }: ButtonOptionProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-12 items-center justify-center self-stretch
           rounded-md 
           ${disabled ? 'border-gray-400 bg-gray-300' : 'border-[#57A600] bg-[#57A600]'}`}>
      <Text className="text-x1 border-b border-[#fff] font-bold text-white">{text}</Text>
    </Pressable>
  );
};

export default CustomBtn;
