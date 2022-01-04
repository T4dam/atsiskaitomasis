import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { Draggable } from "react-beautiful-dnd";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ListCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledCard>
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
};

export default ListCard;
