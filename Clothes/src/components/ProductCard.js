import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const ProductCard = ({ product }) => (
  <View style={{ flex: 1, margin: 10, backgroundColor: '#f5f5f5', padding: 10, borderRadius: 10 }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {product.image.map((img, index) => (
        <Image key={index} source={img} style={{ width: 150, height: 150, borderRadius: 10, marginRight: 10 }} />
      ))}
    </ScrollView>
    <Text>{product.name}</Text>
    <Text>${product.price}</Text>
  </View>
);

export default ProductCard;