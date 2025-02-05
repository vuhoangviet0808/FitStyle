import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";
import { products } from "../storeAssets/assets";

const HomeScreen = () => {
  
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <View style={styles.centeredView}>
        <Text>No products available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar style={styles.searchBar} />
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        <CategoryTabs tabs={["Woman", "Man", "Kids"]} />
      </View>

      {/* Promo Banner */}
      <View style={styles.promoContainer}>
        <PromoBanner
          title="Special Promo"
          subtitle="All menswear 50% Discount"
          buttonText="Buy Now"
          imageSource={require("../storeAssets/logo.png")}
        />
      </View>

      {/* Popular Products Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Product Grid using FlatList */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <ProductCard product={item} />
          </View>
        )}
        columnWrapperStyle={styles.productGrid}
      />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  searchContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  promoContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  viewAllText: {
    fontSize: 14,
    color: "#007BFF",
  },
  productGrid: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  productWrapper: {
    flex: 1,
    marginBottom: 15,
    alignItems: "center",
  },
});

export default HomeScreen;
