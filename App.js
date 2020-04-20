import React, { useState } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import styled from "styled-components/native";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Stack = createStackNavigator();

const App = () => {
  const [val, setVal] = useState(20);

  return (
    <NavigationContainer>
      <MainView>
        <Stack.Navigator>
          <Stack.Screen name="Deck List" component={DeckList} />
          <Stack.Screen name="Deck" component={Deck} />
        </Stack.Navigator>
      </MainView>
    </NavigationContainer>
  );
};

export default App;
