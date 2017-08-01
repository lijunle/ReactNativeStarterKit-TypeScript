import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles: { container: object } = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

/**
 * App component.
 */
export function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
}
