import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import ItemView from "../views/ItemView";
import AddItemView from "../views/AddItemView";

const Stack = createStackNavigator();

export default function Navigator({ viewModel }: any) {
  return (
    <Stack.Navigator>

      <Stack.Screen name="Home">
        {(props) => (
          <ItemView {...props} viewModel={viewModel} />
        )}
      </Stack.Screen>

      <Stack.Screen name="AdicionarItem">
        {(props) => (
          <AddItemView {...props} viewModel={viewModel} />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}