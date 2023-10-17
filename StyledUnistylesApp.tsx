import React, { ComponentType } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { createUnistyles } from "react-native-unistyles";

// STYLED UNISTYLES
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
  return (
    <ContainerView>
      <Text>This is styled with unistyled!</Text>
      <StatusBar style="auto" />
    </ContainerView>
  );
}

type Styles = ViewStyle | TextStyle | { [key: string]: any }; // Union of ViewStyle, TextStyle, and any other styles

/**
 * Create Styled Component -like component for unistyles that takes a
 * component and styles and returns a function that can be called with the styles,
 * which then returns the component with styles applied.
 **/
function unistyled<T extends ComponentType<any>>(Component: T) {
  return (styles: any) => {
    const StyledComponent: React.FC<React.ComponentProps<T>> = (props) => {
      const { styles: componentStyles } = useStyles(
        createStyleSheet((theme) => ({ style: styles }))
      );

      return <Component style={componentStyles.style} {...props} />;
    };

    return StyledComponent;
  };
}

const ContainerView = unistyled(View)({
  flex: 1,
  backgroundColor: "gray",
  alignItems: "center",
  justifyContent: "center",
});
