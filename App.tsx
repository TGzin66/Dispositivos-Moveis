import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/Navigator";
import useItemViewModel from "./viewmodels/ItemViewModel";

export default function App() {

  const viewModel = useItemViewModel();

  return (
    <NavigationContainer>
      <Navigator viewModel={viewModel} />
    </NavigationContainer>
  );
}