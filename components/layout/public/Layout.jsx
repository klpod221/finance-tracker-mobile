import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import PublicFooter from "@/components/layout/public/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <ScrollView className="flex flex-col items-center justify-center h-screen p-4">
        {children}
      </ScrollView>

      <PublicFooter />
    </>
  );
}
