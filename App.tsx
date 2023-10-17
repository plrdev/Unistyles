import React, { ComponentType } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { createUnistyles } from "react-native-unistyles";

// STYLESHEET
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// STYLED-COMPONENTS
// export default function App() {
//   return (
//     <ContainerView>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </ContainerView>
//   );
// }
// const ContainerView = styled(View)({
//   flex: 1,
//   backgroundColor: "red",
//   alignItems: "center",
//   justifyContent: "center",
// });

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

// // export default function App() {
// //   const { styles } = useStyles(stylesheet);
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>
// //         Open up App.js to start working on your app!
// //       </Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// const stylesheet = createStyleSheet((theme) => ({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "black",
//   },
// }));

export default function App() {
  return (
    <ContainerView>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ContainerView>
  );
}

// type Styles = ViewStyle | TextStyle | { [key: string]: any }; // Union of ViewStyle, TextStyle, and any other styles

// function unistyled<T extends React.ComponentType<any>>(
//   Component: T,
//   styles: Styles
// ) {
//   const StyledComponent = (props) => {
//     const { styles: componentStyles } = useStyles(
//       createStyleSheet((theme) => {
//         return {
//           style: { ...styles },
//         };
//       })
//     );
//     return <Component style={componentStyles.style} {...props} />;
//   };

//   return StyledComponent;
// }

type Styles = ViewStyle | TextStyle | { [key: string]: any }; // Union of ViewStyle, TextStyle, and any other styles

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
