import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CategoryTabs = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
    {['All', 'Woman', 'Man', 'Kids'].map((category, index) => (
      <TouchableOpacity key={index} style={{ marginHorizontal: 10, padding: 10, backgroundColor: category === 'Woman' ? '#b76e79' : '#e0e0e0', borderRadius: 5 }}>
        <Text>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default CategoryTabs;
