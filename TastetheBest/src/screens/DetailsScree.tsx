import React from 'react';
import { View, Text, Image } from 'react-native';
import { Dimensions } from 'react-native';

const DetailsScreen = ({ route }: any) => {
  const { title, image } = route.params;
  const screenWidth = Dimensions.get('window').width;
const contentWidth = screenWidth > 500 ? 500 : screenWidth - 32;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
  <View style={{ width: contentWidth }}>
    <Image
      source={image}
      style={{ width: '100%', height: 280 }}
    />

    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>
        {title}
      </Text>
      <Text style={{ color: '#ff7a00', marginVertical: 8 }}>
        ⭐ 4.6 • 20 mins • ₹₹
      </Text>
      <Text style={{ color: '#555', lineHeight: 22 }}>
        Freshly prepared and loved by foodies.
      </Text>
    </View>
  </View>
</View>

  );
};

export default DetailsScreen;
