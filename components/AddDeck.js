import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { find } from "lodash/find";
import { addDeck } from "../actions/decks";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const Card = styled.View`
  margin-top: 40px;
  background-color: #fff;
  min-width: 250px;
  padding: 20px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;

const TitleInput = styled.TextInput`
  margin-vertical: 10px;
`;

const AddDeck = ({ navigation, dispatch }) => {
  const [title, setTitle] = useState("");
  const submit = () => {
    dispatch(addDeck(title));
    setTitle("");
    navigation.navigate("Deck List");
  };
  const disabled = title.length < 3;
  return (
    <Container>
      <Card elevation={5}>
        <Title>Add Deck</Title>
        <TitleInput
          onChangeText={(text) => setTitle(text)}
          value={title}
        ></TitleInput>
        <Button onPress={submit} title="Add Deck" disabled={disabled} />
      </Card>
    </Container>
  );
};

export default connect()(AddDeck);
