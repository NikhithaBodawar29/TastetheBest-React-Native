import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  image: any;
  onPress: () => void;
};

const FoodCard = ({ title, image, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <View
  style={{
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 18,
    overflow: 'hidden',
    elevation: 4,
    width: '100%',       // full width inside parent
  }}
>
        <Image source={image} style={{ width: '100%', height: 180 }} />

        <View style={{ padding: 14 }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            {title}
          </Text>

          <Text style={{ color: '#ff7a00', marginTop: 6 }}>
            ⭐ 4.5 • Popular
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
