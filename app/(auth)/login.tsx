import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import {  Mail, Lock, Facebook, Github } from "lucide-react-native";
  import { Link } from "expo-router";
  
  const Login = () => {
    const [details, setDetails] = useState({
      email: "",
      password: "",
    });
  
    const handleLogin = () => {
     const res = fetch("http://localhost:6000/api/auth/login", {})
    };
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-[#1A1A2E] flex-1 p-5 justify-center">
          <View className="mb-8">
            <Text className="text-white text-3xl font-bold text-center">
              Welcome Back
            </Text>
            <Text className="text-gray-400 text-sm text-center mt-2">
              Sign in to continue
            </Text>
          </View>
  
          <View className="mb-4">
            <Text className="text-white text-sm mb-1">Email</Text>
            <View className="flex-row items-center bg-[#2A2A40] rounded-lg border border-[#5E5CE6]">
              <View className="p-4">
                <Mail size={20} color="#888" />
              </View>
              <TextInput
                placeholder="Enter your E-mail"
                placeholderTextColor="#888"
                value={details.email}
                onChangeText={(text) => setDetails({ ...details, email: text })}
                className="flex-1 text-white p-4"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>
  
          <View className="mb-6">
            <Text className="text-white text-sm mb-1">Password</Text>
            <View className="flex-row items-center bg-[#2A2A40] rounded-lg border border-[#5E5CE6]">
              <View className="p-4">
                <Lock size={20} color="#888" />
              </View>
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="#888"
                value={details.password}
                onChangeText={(text) =>
                  setDetails({ ...details, password: text })
                }
                className="flex-1 text-white p-4"
                secureTextEntry
              />
            </View>
          </View>
  
          <TouchableOpacity
            onPress={handleLogin}
            className={`bg-[#5E5CE6] py-4 rounded-full mb-4 ${
              (!details.email || !details.password) && "opacity-50"
            }`}
            disabled={!details.email || !details.password}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Sign In
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center mb-4">
            <View className="flex-1 h-[1px] bg-gray-700" />
            <Text className="mx-4 text-gray-400 text-xs">Or continue with</Text>
            <View className="flex-1 h-[1px] bg-gray-700" />
          </View>
  
          <View className="flex-row gap-4 mb-6">
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center bg-[#2A2A40] py-4 rounded-lg border border-gray-700"
              onPress={() => {}}
            >
              <Facebook size={20} color="#4267B2" />
              <Text className="text-white ml-2">Facebook</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              className="flex-1 flex-row items-center justify-center bg-[#2A2A40] py-4 rounded-lg border border-gray-700"
              onPress={() => {}}
            >
              <Github size={20} color="#fff" />
              <Text className="text-white ml-2">Github</Text>
            </TouchableOpacity>
          </View>
  
          <View className="flex-row items-center justify-center">
            <Text className="text-gray-400 text-center text-sm">
            Don't have an account?{" "} 
            </Text>
            <Link href={"/(auth)/register"}>
              <Text className="text-[#5E5CE6]">Sign up</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default Login;
  