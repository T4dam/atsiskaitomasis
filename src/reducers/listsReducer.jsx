import { CONSTANTS } from "../actions";

let listID = `list-${1}`;
let cardID = `card-${6}`;

const initialState = [
  {
    title: "Something something",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${1}`,
        text: "Testing card 1",
      },
      {
        id: `card-${2}`,
        text: "Resting with card 2 now",
      },
    ],
  },
  {
    title: "hold up.. heeeeey",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${3}`,
        text: "We gonna rockin' til the weels fall of",
      },
      {
        id: `card-${4}`,
        text: "Hope you ready for the next episode heeeeeey",
      },
      {
        id: `card-${5}`,
        text: "Smoke weed everyday",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;

      console.log("action received", action, cardID);

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      return newState;

    default:
      return state;
  }
};
export default listsReducer;
