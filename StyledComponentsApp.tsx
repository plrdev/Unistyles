import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";

// STYLED-COMPONENTS
export default function App() {
  return (
    <ContainerView>
      <Text>Hello from styled components!</Text>
      <StatusBar style="auto" />
    </ContainerView>
  );
}
const ContainerView = styled(View)({
  flex: 1,
  backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center",
});
