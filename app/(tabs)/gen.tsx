import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { Sparkles, Crown, ImageIcon, Dices } from "lucide-react-native";
  
  const Gen = () => {
    const [prompt, setPrompt] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("Photo");
    const [selectedRatio, setSelectedRatio] = useState("1:1");
  
    const styles = ["Photo", "Anime", "Abstract", "Cyberpunk"];
    const ratios = ["1:1", "3:2", "16:9", "9:16"];
  
    const handleGenerate = () => {
      console.log("Generating image with:", {
        prompt,
        style: selectedStyle,
        ratio: selectedRatio,
      });
    };
  
    return (
      <ScrollView className="bg-[#1A1A2E] flex-1 p-5">
        {/* Header Section */}
        <View className="mb-4 flex-row items-center justify-between">
          <Text className="text-white text-xl font-bold">Pixels AI</Text>
          <TouchableOpacity className="bg-[#5E5CE6] px-4 py-2 rounded-full">
            <View className="flex-row items-center justify-center gap-2">
              <Crown size={20} color="gold" />
              <Text className="text-white font-semibold">Get PRO</Text>
            </View>
          </TouchableOpacity>
        </View>
  
        {/* Prompt Input */}
        <View className="mb-6">
          <Text className="text-white text-lg font-semibold">Enter prompt</Text>
          <View className="relative mt-2">
            <TextInput
              placeholder="Describe your image..."
              placeholderTextColor="#888"
              multiline
              numberOfLines={7}
              value={prompt}
              onChangeText={setPrompt}
              className="bg-[#2A2A40] text-white p-4 rounded-lg h-32 border border-[#5E5CE6]"
              style={{ textAlignVertical: "top" }}
            />
            {/* text count to be added  */}
            <TouchableOpacity className="absolute left-3 bottom-3">
              <View className="flex-row items-center gap-1 p-2 border border-[#5E5CE6] rounded-full">
                <Sparkles size={15} color="gold" />
                <Text className="text-white text-sm ">Inspire Me</Text>
              </View>
            </TouchableOpacity>
          </View>
  
          <View className="flex-row mt-3">
            <TouchableOpacity className="bg-[#5E5CE6] px-4 py-2 rounded-lg mr-2">
              <View className="flex-row items-center gap-2">
                <ImageIcon size={20} color="white" />
                <Text className="text-white font-semibold">Upload photo</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="border border-[#5E5CE6] px-4 py-2 rounded-lg">
              <View className="flex-row items-center gap-2">
                <Dices size={20} color="#5E5CE6" />
                <Text className="text-[#5E5CE6] font-semibold">
                  Random prompt
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* Image Ratio Selection */}
        <View className="mb-6">
          <Text className="text-white text-lg font-semibold">Image ratio</Text>
          <View className="flex-row mt-2">
            {ratios.map((ratio) => (
              <TouchableOpacity
                key={ratio}
                onPress={() => setSelectedRatio(ratio)}
                className={`px-4 py-2 rounded-lg mr-2 border ${
                  selectedRatio === ratio ? "border-[#5E5CE6]" : "border-gray-600"
                }`}
              >
                <Text
                  className={`text-white ${
                    selectedRatio === ratio ? "font-bold" : ""
                  }`}
                >
                  {ratio}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
  
        {/* Image Style Selection */}
        <View className="mb-6">
          <Text className="text-white text-lg font-semibold">
            Image style (Optional)
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row mt-2"
          >
            {styles.map((style) => (
              <TouchableOpacity
                key={style}
                onPress={() => setSelectedStyle(style)}
                className={`mr-3 p-2 rounded-lg items-center border ${
                  selectedStyle === style ? "border-[#5E5CE6]" : "border-gray-600"
                }`}
              >
                <Image
                  source={{
                    uri: `https://via.placeholder.com/80x80.png?text=${style}`,
                  }}
                  className="w-20 h-20 rounded-lg"
                />
                <Text
                  className={`text-white text-sm mt-1 ${
                    selectedStyle === style ? "font-bold" : ""
                  }`}
                >
                  {style}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
  
        {/* Generate Button */}
        <TouchableOpacity
          onPress={handleGenerate}
          className={`py-4 rounded-full mb-4 items-center ${
            prompt ? "bg-[#B3E567]" : "bg-gray-500"
          }`}
          disabled={!prompt}
        >
          <Text className="text-black font-semibold text-lg">Generate image</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  export default Gen;
  