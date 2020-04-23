import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import AddDeck from "./components/AddDeck";
import AddDeckCard from "./components/AddDeckCard";
import Quizz from "./components/Quizz";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { TouchableHighlight } from "react-native-gesture-handler";
import { devToolsEnhancer } from "redux-devtools-extension";
import { setLocalNotification } from "./utils/notification";

const store = createStore(reducer, devToolsEnhancer());

const HeaderButtonContainer = styled.View`
  padding-right: 10px;
`;

const Stack = createStackNavigator();

const AddDeckLink = ({ navigation }) => {
  return (
    <TouchableHighlight>
      <HeaderButtonContainer>
        <Button
          title="ADD DECK"
          onPress={() => navigation.navigate("Add Deck")}
        />
      </HeaderButtonContainer>
    </TouchableHighlight>
  );
};

const App = () => {
  useEffect(() => {
    setLocalNotification();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Deck List"
            component={DeckList}
            options={({ navigation }) => ({
              headerRight: () => <AddDeckLink navigation={navigation} />,
            })}
          />
          <Stack.Screen name="Deck" component={Deck} />
          <Stack.Screen name="Add Deck" component={AddDeck} />
          <Stack.Screen name="Add Deck Card" component={AddDeckCard} />
          <Stack.Screen name="Quizz" component={Quizz} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
