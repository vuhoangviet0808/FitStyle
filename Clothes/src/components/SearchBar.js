import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = () => (
  <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#f5f5f5', borderRadius: 10, margin: 10 }}>
    <TextInput placeholder="Search" style={{ flex: 1, padding: 5 }} />
  </View>
);

export default SearchBar;
