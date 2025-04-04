import React from "react";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

import { openExternalLink } from "@/utils/helpers";

import PublicLayout from "@/components/layout/public/Layout";

export default function Home() {
  return (
    <PublicLayout>
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("@/assets/images/logo.png")}
          className="!w-32 !h-32 mb-4"
        />

        <Text className="text-2xl font-bold mb-2">
          Welcome to Finance Tracker
        </Text>

        <Text className="text-sm text-gray-500 mb-4">
          A simple and easy to use finance tracking application.
        </Text>

        <View className="flex flex-row gap-2">
          <Link href="/auth/login" asChild>
            <Button
              mode="contained"
              icon={"login"}
              onPress={() => console.log("Login")}
            >
              Login
            </Button>
          </Link>

          <Button
            mode="outlined"
            buttonColor="#fff"
            textColor="#000"
            icon={"github"}
            onPress={() =>
              openExternalLink(
                "https://github.com/klpod221/finance-tracker-mobile"
              )
            }
          >
            Source
          </Button>
        </View>
      </View>
    </PublicLayout>
  );
}
