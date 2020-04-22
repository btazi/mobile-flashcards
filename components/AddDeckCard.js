import React, { useState } from "react";
import { Modal, Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

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

const TextInput = styled.TextInput`
  margin-vertical: 10px;
`;

const AddDeckCard = ({ modalVisible, onHideModal, onDeckCardSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const submit = () => {
    onDeckCardSubmit({ question, answer });
  };
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
        <Card elevation={5}>
          <Title>Add Deck</Title>
          <TextInput
            onChangeText={(text) => setQuestion(text)}
            value={question}
          />
          <TextInput onChangeText={(text) => setAnswer(text)} value={answer} />
          <Button onPress={submit} title="Add Card To Deck" />
        </Card>
      </Modal>
    </Container>
  );
};

export default AddDeckCard;
