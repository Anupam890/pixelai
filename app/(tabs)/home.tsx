import { View, TextInput, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Search, Filter } from "lucide-react-native";
import CategoryList from "../../components/CategoryList";

const users = [
  { name: "Juliana Simmons", image: "https://via.placeholder.com/50" },
  { name: "Morgan Higgins", image: "https://via.placeholder.com/50" },
  { name: "Garey Bryant", image: "https://via.placeholder.com/50" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <View className="flex-1 bg-[#1A1A2E] p-4">
      {/* Search Bar */}
      <View className="flex-row items-center bg-gray-700 rounded-full px-4 py-2">
        <Search color="#A1A1AA" size={20} />
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#A1A1AA"
          className="flex-1 text-white ml-2"
        />
        <Filter color="#A1A1AA" size={20} />
      </View>

      {/* Tabs (Posts / Users) */}
      <View className="flex-row justify-between mt-6 bg-gray-800 p-2 rounded-lg">
        {["posts", "users"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            className={`flex-1 items-center py-2 rounded-lg ${
              activeTab === tab ? "bg-[#5E5CE6]" : "bg-transparent"
            }`}
          >
            <Text className={`text-lg ${activeTab === tab ? "text-white" : "text-gray-400"}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <CategoryList/>
      
    </View>
  );
};

export default Index;
