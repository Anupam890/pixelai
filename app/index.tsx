import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { Link } from "expo-router";
import { wp, hp } from "@/config/resolution";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#1A1A2E"} />
      <Image
        source={require("../assets/images/screen.jpeg")}
        resizeMode="cover"
        style={styles.bgImage}
      />

      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.3)", "transparent"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradient}
      />

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Pixels AI</Text>
        <Text style={styles.subtitle}>
          Create stunning AI-generated images instantly!
        </Text>

        <View style={styles.authContainer}>
          <TouchableOpacity style={styles.authButton}>
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
              }}
              style={styles.authIcon}
            />
            <Text style={styles.authText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.authButton}>
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png",
              }}
              style={styles.authIcon}
            />
            <Text style={styles.authText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>
            <Link href={"/(tabs)/home"}>Get Started</Link>
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text style={styles.signupLink}>
            <Link href={"/(auth)/register"}>Sign Up</Link>
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C081F",
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    width: wp(100),
    height: hp(100),
  },
  contentContainer: {
    position: "absolute",
    bottom: hp(10),
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#D1D5DB",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  authContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  authButton: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    marginBottom: 10,
  },
  authIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  authText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 10,
  },
  orText: {
    color: "#D1D5DB",
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: "#7D5FFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  signUpText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    color: "#D1D5DB",
    fontSize: 14,
    marginTop: 20,
  },
  signupLink: {
    color: "#7D5FFF",
    fontWeight: "bold",
  },
});
