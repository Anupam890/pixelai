import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const categories = [
  "All",
  "Anime",
  "Character",
  "Landscape",
  "Portrait",
  "Abstract",
  "Sci-Fi",
  "Fantasy",
  "Realistic",
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 3,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 5,
  },
  selectedCategory: {
    backgroundColor: "#5E5CE6",
  },
  categoryText: {
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default CategoryList;
