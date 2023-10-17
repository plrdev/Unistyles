import React, { ComponentType } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createUnistyles } from "react-native-unistyles";

// UNISTYLES
const theme = {};
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  superLarge: 2000,
  tvLike: 4000,
};

export const { createStyleSheet, useStyles } = createUnistyles<
  typeof breakpoints,
  typeof theme
>(breakpoints);

export default function App() {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Unistyles!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
}));
