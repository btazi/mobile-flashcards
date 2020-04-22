import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import DeckCard from "./DeckCard";
import Constants from "expo-constants";
import { getInitialDecks } from "../actions/decks";

const AddButtonContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  flex-direction: row;
`;

const DeckList = ({ dispatch, navigation, decks }) => {
  const [initiated, setInitiated] = useState(false);

  useEffect(() => {
    dispatch(getInitialDecks());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AddButtonContainer>
        <Button
          onPress={() => navigation.navigate("Add Deck")}
          title="Add Deck"
        />
      </AddButtonContainer>
      <FlatList
        contentContainerStyle={styles.list}
        data={decks}
        renderItem={({ item }) => (
          <DeckCard navigation={navigation} {...item} key={item.title} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  list: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexGrow: 1,
  },
});

const mapStateToProps = ({ decks }) => {
  return {
    decks,
  };
};

export default connect(mapStateToProps)(DeckList);
