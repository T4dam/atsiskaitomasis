import { CONSTANTS } from "../actions";

let listID = 2;

const initialState = [
  {
    title: "Something something",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Testing card 1",
      },
      {
        id: 1,
        text: "Resting with card 2 now",
      },
    ],
  },
  {
    title: "hold up.. heeeeey",
    id: 1,
    cards: [
      {
        id: 0,
        text: "We gonna rockin' til the weels fall of",
      },
      {
        id: 1,
        text: "Hope you ready for the next episode heeeeeey",
      },
      {
        id: 2,
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
    default:
      return state;
  }
};
export default listsReducer;
