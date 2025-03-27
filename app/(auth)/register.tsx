import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
  } from "react-native";
  import React, { useState } from "react";
  import { User, Mail, Lock, Facebook, Github } from "lucide-react-native";
  import { Link } from "expo-router";
  import Toast from "react-native-toast-message";
  import { useRouter } from "expo-router";
  
  const Register = () => {
    const [details, setDetails] = useState({
      name: "",
      email: "",
      password: "",
    })
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const API_URL = "http://192.168.29.59:8090";
  
    const handleRegister = async () => {
      if (!details.name || !details.email || !details.password) {
        Toast.show({ type: "error", text1: "All fields are required!" });
        return;
      }
      if (!details.email.includes("@")) {
        Toast.show({ type: "error", text1: "Invalid E-mail!" });
        return;
      }
  
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        });
  
        if (res.status === 201) {
          Toast.show({ type: "success", text1: "Registration Successful!" });
          router.push("/(auth)/login");
        } else {
          Toast.show({ type: "error", text1: "Registration Failed!" });
          console.log("Register Error:", res);
        }
      } catch (error) {
        console.error("Register Error:", error);
        Toast.show({ type: "error", text1: "Server Error!" });
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="bg-[#1A1A2E] flex-1 p-5 justify-center">
          <View className="mb-8">
            <Text className="text-white text-2xl font-bold text-center">
              Create an Account
            </Text>
            <Text className="text-gray-400 text-sm text-center mt-2">
              Sign up to get started
            </Text>
          </View>
  
          <View className="mb-4">
            <Text className="text-white text-sm mb-1">Full Name</Text>
            <View className="relative flex-row items-center bg-[#2A2A40] rounded-lg border border-[#5E5CE6]">
              <View className="p-4">
                <User size={20} color="#888" />
              </View>
              <TextInput
                placeholder="Enter your Full Name"
                placeholderTextColor="#888"
                value={details.name}
                onChangeText={(text) =>
                  setDetails({ ...details, name: text })
                }
                className="flex-1 text-white p-4"
              />
            </View>
          </View>
  
          <View className="mb-4">
            <Text className="text-white text-sm mb-1">Email</Text>
            <View className="relative flex-row items-center bg-[#2A2A40] rounded-lg border border-[#5E5CE6]">
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
            <View className="relative flex-row items-center bg-[#2A2A40] rounded-lg border border-[#5E5CE6]">
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
            onPress={handleRegister}
            className="bg-[#5E5CE6] py-4 rounded-full mb-4 flex-row justify-center"
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text className="text-white text-center font-semibold text-lg">
                Register
              </Text>
            )}
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
              Already have an account?{" "}
            </Text>
            <Link href={"/(auth)/login"}>
              <Text className="text-[#5E5CE6]">Sign in</Text>
            </Link>
          </View>
  
          <Toast />
        </View>
      </ScrollView>
    );
  };
  
  export default Register;
  