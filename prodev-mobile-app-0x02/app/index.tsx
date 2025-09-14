import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Images
import companyLogo from "@/assets/images/Logo.png";
import backgroundImage from "@/assets/images/background-image.png";

export default function App({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={backgroundImage}
          style={styles.background}
        >
          <Image source={companyLogo} style={styles.companyLogo} />

          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>Find your favorite place here</Text>
            <Text style={styles.textSmall}>The best prices for over 2 </Text>
            <Text style={styles.textSmall}>million properties worldwide</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continue to home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.transparentButton}>
            <Text style={styles.transparentButtonText}>Sign in</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  companyLogo: { width: 120, height: 120, marginBottom: 30 },
  textGroup: { alignItems: "center", marginBottom: 40 },
  textLarge: { fontSize: 26, fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: 10 },
  textSmall: { fontSize: 16, color: "#fff", textAlign: "center" },
  button: { backgroundColor: "#2f95dc", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10, marginBottom: 15 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  transparentButton: { borderWidth: 2, borderColor: "#fff", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10 },
  transparentButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
