import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text className="text-3xl font-bold">Welcome to the Home Page!</Text>
      <Text className="text-lg">This is a placeholder for the main content.</Text>
      <Link href="/auth/login">
        <Button title="Go to Login" />
      </Link>
    </View>
  );
}
