import React, { useState } from "react";
import { Modal, Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
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

const TextInput = styled.TextInput`
  margin-vertical: 10px;
`;

const ButtonsContainer = styled.View`
  justify-content: space-around;
  height: 100px;
`;

const AddDeckCard = ({ modalVisible, onHideModal, onDeckCardSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const submit = () => {
    onDeckCardSubmit({ question, answer });
    setQuestion("");
    setAnswer("");
  };
  const disabled = answer.length < 3 || question.length < 3;
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          onHideModal();
        }}
        style={{ flex: 1 }}
      >
        <Card>
          <Title>Add Deck</Title>
          <TextInput
            onChangeText={(text) => setQuestion(text)}
            value={question}
            placeholder="Question"
          />
          <TextInput
            onChangeText={(text) => setAnswer(text)}
            value={answer}
            placeholder="Answer"
          />
          <ButtonsContainer>
            <Button
              onPress={submit}
              title="Add Card To Deck"
              disabled={disabled}
            />
            <Button onPress={onHideModal} title="Cancel" color="red" />
          </ButtonsContainer>
        </Card>
      </Modal>
    </Container>
  );
};

export default AddDeckCard;
