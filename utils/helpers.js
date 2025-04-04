import { Linking } from "react-native";

export function openExternalLink(url) {
  // Check if the URL is valid
  if (url && typeof url === "string") {
    // Open the URL in the default browser
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  } else {
    console.error("Invalid URL:", url);
  }
}