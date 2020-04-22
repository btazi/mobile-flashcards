import { initialDecks } from "../utils/data";

export const GET_INITIAL_DECKS = "GET_INITIAL_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";

export function getInitialDecks() {
  const decks = initialDecks();
  return {
    type: GET_INITIAL_DECKS,
    decks,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function deleteDeck(id) {
  return {
    type: DELETE_DECK,
    id,
  };
}

export function addCardToDeck({ deckId, question, answer }) {
  return {
    type: ADD_CARD_TO_DECK,
    deckId,
    question,
    answer,
  };
}
