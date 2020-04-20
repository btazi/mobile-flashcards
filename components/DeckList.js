import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DeckList = ({ navigation }) => {
  return (
    <StyledView>
      <Text>Deck List</Text>
      <Button title="see deck" onPress={() => navigation.navigate("Deck")} />
    </StyledView>
  );
};

export default DeckList;
