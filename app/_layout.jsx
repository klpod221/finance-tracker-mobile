import "../global.css";

import { useEffect } from "react";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

SplashScreen.preventAutoHideAsync();

// Ant Design theme cho React Native Paper
const theme = {
  ...DefaultTheme,
  roundness: 2, // Bo góc
  colors: {
    ...DefaultTheme.colors,
    primary: "#1890ff",
    accent: "#f5a623",
    background: "#f5f5f5",
    surface: "#ffffff",
    text: "#000000",
    placeholder: "#8c8c8c",
    disabled: "#d9d9d9",
    error: "#ff4d4f",
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "Roboto-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Roboto-Medium",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Roboto-Light",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Roboto-Thin",
      fontWeight: "100",
    },
  },
  spacing: 8,
  dark: false,
};

export default function RootLayout() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider
      settings={{
        icon: (props) => <AntDesignIcon {...props} />,
      }}
      theme={theme}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
