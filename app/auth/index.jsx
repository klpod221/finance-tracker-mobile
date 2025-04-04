import { Text, View } from "react-native";

export default function Auth() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to the Auth page!</Text>
      <Text>This is a placeholder for the authentication flow.</Text>
    </View>
  );
}
