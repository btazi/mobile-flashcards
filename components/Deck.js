import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { deleteDeck, addCardToDeck } from "../actions/decks";
import AddDeckCard from "./AddDeckCard";

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

const Details = styled.Text`
  text-align: center;
  font-size: 18px;
`;

const ButtonsContainer = styled.View`
  flex-direction: column;
  justify-content: space-around;
  margin-vertical: 10px;
  min-height: 150px;
`;

const Deck = ({ dispatch, deck, navigation }) => {
  const numberOfCards = typeof deck == "object" ? deck.questions.length : null;
  const [modalVisible, setModalVisible] = useState(false);
  const handleDeleteDeck = () => {
    navigation.navigate("Deck List");
    dispatch(deleteDeck(deck.id));
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAddCardToDeck = ({ question, answer }) => {
    dispatch(addCardToDeck({ deckId: deck.id, question, answer }));
    toggleModal();
  };

  return (
    <Container>
      {deck && (
        <>
          <Card elevation={5}>
            <Title>{deck.title}</Title>
            <Details>Number of cards: {numberOfCards}</Details>
            <ButtonsContainer>
              <Button
                title="Start Quizz"
                onPress={() =>
                  navigation.navigate("Quizz", {
                    questions: deck.questions,
                    title: deck.title,
                    id: deck.id,
                  })
                }
              />
              <Button title="Add Card" onPress={toggleModal} />
              <Button
                title="Delete Quizz"
                color="red"
                onPress={handleDeleteDeck}
              />
            </ButtonsContainer>
          </Card>
          <AddDeckCard
            modalVisible={modalVisible}
            onHideModal={toggleModal}
            onDeckCardSubmit={handleAddCardToDeck}
          />
        </>
      )}
    </Container>
  );
};

const mapStateToProps = ({ decks }, { route }) => {
  return {
    deck: decks.find((d) => d.id === route.params.id),
  };
};
export default connect(mapStateToProps)(Deck);
