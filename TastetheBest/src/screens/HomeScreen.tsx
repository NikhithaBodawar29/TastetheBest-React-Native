import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import FoodCard from '../screens/components/FoodCard';
import { foodData } from '../screens/data/foodData';

const screenWidth = Dimensions.get('window').width;
const contentWidth = screenWidth > 520 ? 520 : screenWidth - 32;

const HomeScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');

  const filteredData = foodData.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      {/* ===== OPTIONAL HEADER (YOU CAN REMOVE THIS BLOCK) ===== */}
      <View
        style={{
          paddingVertical: 16,
          backgroundColor: '#ffffff',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#e0e0e0',
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: '700' }}>
          TasteTheBest 🍔
        </Text>
        <Text style={{ color: '#777', marginTop: 4 }}>
          Find your favourite food
        </Text>
      </View>
      {/* ===== HEADER END ===== */}

      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 16,
        }}
        ListHeaderComponent={
          <View style={{ width: contentWidth }}>
            <TextInput
              placeholder="Search food..."
              value={search}
              onChangeText={setSearch}
              style={{
                backgroundColor: '#fff',
                padding: 14,
                borderRadius: 14,
                marginBottom: 20,
              }}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View style={{ width: contentWidth }}>
            <FoodCard
              title={item.title}
              image={item.image}
              onPress={() =>
                navigation.navigate('Details', {
                  title: item.title,
                  image: item.image,
                })
              }
            />
          </View>
        )}
        ListFooterComponent={<View style={{ height: 80 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
