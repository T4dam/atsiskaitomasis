import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListCard from "./list-card";
import ActionButton from "./action-button";
import { Droppable, Draggable } from "react-beautiful-dnd";

const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#dfe3e6",
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
  height: "100%",
}));

const List = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <BoxContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {(provided) => (
              <Box {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <ListCard
                    key={card.id}
                    text={card.text}
                    listID={listID}
                    id={card.id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
                <ActionButton listID={listID} />
              </Box>
            )}
          </Droppable>
        </BoxContainer>
      )}
    </Draggable>
  );
};

export default List;
