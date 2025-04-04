import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { openExternalLink } from "@/utils/helpers";

export default function PublicFooter() {
  return (
    <View className="w-full p-4 fixed bottom-0">
      <Text className="text-center text-sm text-white">
        Finance Tracker ©{new Date().getFullYear()} Created by{" "}
        <TouchableOpacity
          onPress={() => openExternalLink("https://klpod221.com")}
        >
          <Text className="text-blue-400">klpod221</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}
