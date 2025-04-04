import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logged in with:", email, password);
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
