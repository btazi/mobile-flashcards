import produce from "immer";

import {
  GET_INITIAL_DECKS,
  ADD_DECK,
  DELETE_DECK,
  ADD_CARD_TO_DECK,
} from "../actions/decks";

export default function Decks(state = [], action) {
  switch (action.type) {
    case GET_INITIAL_DECKS:
      return action.decks;
    case ADD_DECK: {
      const deck = {
        id: action.id,
        title: action.title,
        questions: [],
      };
      return [...state, deck];
    }
    case DELETE_DECK: {
      return state.filter((deck) => deck.id !== action.id);
    }
    case ADD_CARD_TO_DECK: {
      const { deckId, question, answer } = action;
      return produce(state, (draft) => {
        const deck = draft.find((d) => d.id == deckId);
        deck.questions.push({ question, answer });
      });
    }
    default:
      return state;
  }
}
