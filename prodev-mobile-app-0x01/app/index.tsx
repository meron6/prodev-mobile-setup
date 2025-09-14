import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>Entry Screen - Awesome</Text>
      <Text style={styles.mediumText}>Welcome to your first app!</Text>
      <Text style={styles.smallText}>Enjoy building with Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mediumText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 5,
  },
  smallText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
  },
});
