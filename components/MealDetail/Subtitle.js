import { View, Text, StyleSheet } from "react-native";
export function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: "#E2B497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: "#E2B497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
});
