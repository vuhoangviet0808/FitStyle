import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PromoBanner = () => (
  <View style={{ padding: 20, backgroundColor: 'brown', borderRadius: 10, margin: 10 }}>
    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Special Promo</Text>
    <Text style={{ color: '#fff' }}>All menswear 50% Discount</Text>
    <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, marginTop: 10, borderRadius: 5 }}>
      <Text style={{ color: 'brown' }}>Buy Now</Text>
    </TouchableOpacity>
  </View>
);

export default PromoBanner;
