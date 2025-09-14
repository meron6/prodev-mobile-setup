import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        First App Created
      </Text>
    </View>
  );
}
