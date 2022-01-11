import { CONSTANTS } from "../actions";

let listID = `list-${3}`;
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

    case CONSTANTS.ADD_CARD: {
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
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
      const newState = [...state];

      // draginami patys sutlpeliai
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // tame paciame liste
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // kituose listuose
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        // surasti sulpeli kur ivyko nutempimas

        //istraukiama kortele is stulpelio
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // surandama kur baigiasi tempimas
        const listEnd = state.find((list) => droppableIdEnd === list.id);

        //kortele dedama i nauja stulpeli
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};
export default listsReducer;
