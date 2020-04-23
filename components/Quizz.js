import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const Card = styled.View`
  margin-top: 40px;
  background-color: #fff;
  max-width: 80%;
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
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 10px;
`;

const Question = ({
  questionObject,
  onHandleAnswer,
  displayedQuestionNum,
  totalQuestions,
}) => {
  const { question, answer } = questionObject;
  const [answerVisible, setAnswerVisible] = useState(false);
  const answerQuestion = (correct) => {
    setAnswerVisible(false);
    onHandleAnswer(correct);
  };

  return (
    <Card elevation={4}>
      <Details>
        Question N°{displayedQuestionNum}/{totalQuestions}
      </Details>
      <Details>{question}</Details>
      {!answerVisible && (
        <>
          <ButtonsContainer>
            <Button
              title="Show Answer"
              onPress={() => setAnswerVisible(true)}
            />
          </ButtonsContainer>
        </>
      )}
      {answerVisible && (
        <>
          <Details>{answer}</Details>
          <Details>Was your guess correct or incorrect?</Details>
          <ButtonsContainer>
            <Button
              title="Correct"
              onPress={() => answerQuestion(true)}
            ></Button>
            <Button
              title="Incorrect"
              onPress={() => answerQuestion(false)}
            ></Button>
          </ButtonsContainer>
        </>
      )}
    </Card>
  );
};

const Score = ({ score, totalQuestions, onRestartQuizz, onReturnToDeck }) => {
  return (
    <Card elevation={4}>
      <Details>Score: {score} correct answers</Details>
      <ButtonsContainer>
        <Button title="Restart Quizz" onPress={onRestartQuizz} />
        <Button title="Back to Deck" onPress={onReturnToDeck} />
      </ButtonsContainer>
    </Card>
  );
};

const Quizz = ({ navigation, route }) => {
  const { questions, title, id } = route.params;
  const [questionNum, setQuestionNum] = useState(0);
  const displayedQuestionNum = questionNum + 1;
  const totalQuestions = questions.length;
  const question = questions[questionNum];

  const [score, setScore] = useState(0);

  const handleAnswer = (correct) => {
    correct ? setScore(score + 1) : null;
    setQuestionNum(questionNum + 1);
  };

  const handleRestartQuizz = () => {
    setScore(0);
    setQuestionNum(0);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {question && (
        <Question
          questionObject={question}
          displayedQuestionNum={displayedQuestionNum}
          totalQuestions={totalQuestions}
          onHandleAnswer={handleAnswer}
        />
      )}
      {typeof question == "undefined" && (
        <Score
          score={score}
          totalQuestions={totalQuestions}
          onRestartQuizz={handleRestartQuizz}
          onReturnToDeck={() => navigation.navigate("Deck", { id })}
        />
      )}
    </Container>
  );
};

export default Quizz;
