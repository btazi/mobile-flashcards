import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const Card = styled.View`
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 280px;
  max-height: 200px;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const DeckInfo = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
`;

const DeckCard = ({ navigation, title, questions, id }) => {
  const questionsNumber = questions.length;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Deck", { id })}>
      <Card elevation={5}>
        <Title>{title}</Title>
        <DeckInfo>Numbers of cards: {questionsNumber}</DeckInfo>
      </Card>
    </TouchableOpacity>
  );
};

export default DeckCard;
