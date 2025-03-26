import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MoreVertical,
  Settings,
  CreditCard,
  History,
  Shield,
  LogOut,
} from "lucide-react-native";

const Manage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="bg-[#1A1A2E] flex-1">
      {/* Header */}
      <View className="p-5 mt-4 flex-row justify-between items-center">
        <Text className="text-white text-xl font-bold">Anupam Mandal</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MoreVertical color="white" size={24} />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View className="items-center mb-6">
        <Image
          source={{
            uri: "https://api-private.atlassian.com/users/8b3597e8a7d1d8f2ed7f58bcab1946b8/avatar",
          }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-white text-lg mt-2">@UserName</Text>
        <View className="flex-row items-center gap-2 gap-2">
          <Text className="text-white">14 posts</Text>
          <Text className="text-white">120 followers</Text>
          <Text className="text-white">78 following</Text>
        </View>
      </View>

      {/* Collections Section */}
      <View className="px-5 mb-6">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-lg font-semibold">Collections</Text>
          <TouchableOpacity>
            <Text className="text-[#5E5CE6]">See all</Text>
          </TouchableOpacity>
        </View>

        {/* Collection Thumbnails */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-32 h-32 rounded-lg mr-3"
          />
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-32 h-32 rounded-lg mr-3"
          />
        </ScrollView>
      </View>

      {/* Posts Section */}
      <View className="px-5">
        <View className="flex-row justify-between items-center">
          <Text className="text-white text-lg font-semibold">Posts</Text>
          <TouchableOpacity>
            <Text className="text-[#5E5CE6]">See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-3"
        >
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-32 h-32 rounded-lg mr-3"
          />
          <Image
            source={{ uri: "https://via.placeholder.com/150" }}
            className="w-32 h-32 rounded-lg mr-3"
          />
        </ScrollView>
      </View>

      {/* Bottom Sheet Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1 justify-end bg-transparent bg-opacity-50">
            <View className="bg-[#2A2A40] p-5 rounded-t-3xl ">
              {/* Account Settings */}
              <TouchableOpacity className="py-3 flex-row items-center gap-2 mb-3">
                <Settings color="white" size={20} />
                <Text className="text-white text-lg">Edit Profile</Text>
              </TouchableOpacity>

              {/* Subscription */}
              <TouchableOpacity className="py-3 flex-row items-center gap-2 mb-3">
                <CreditCard color="white" size={20} />
                <Text className="text-white text-lg">Subscription</Text>
              </TouchableOpacity>

              {/* Generation History */}
              <TouchableOpacity className="py-3 flex-row items-center gap-2 mb-3">
                <History color="white" size={20} />
                <Text className="text-white text-lg">History</Text>
              </TouchableOpacity>

              {/* Privacy Policy */}
              <TouchableOpacity className="py-3 flex-row items-center gap-2 mb-3">
                <Shield color="white" size={20} />
                <Text className="text-white text-lg">Privacy Policy</Text>
              </TouchableOpacity>

              {/* Log Out */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="py-3 flex-row items-center gap-2"
              >
                <LogOut color="red" size={20} />
                <Text className="text-red-500 text-lg">Log out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default Manage;
