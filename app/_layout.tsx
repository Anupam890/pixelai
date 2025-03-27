import { Stack } from "expo-router";
import "./global.css";
import { AuthProvider, useAuth } from "@/hooks/useAuth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="image/[id]" />
      </Stack>
    </AuthProvider>
  );
}
