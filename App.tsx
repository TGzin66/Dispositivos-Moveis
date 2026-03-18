import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ItemView from "./views/ItemView";

export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ItemView />
      </SafeAreaView>
    </SafeAreaProvider>
  );

}