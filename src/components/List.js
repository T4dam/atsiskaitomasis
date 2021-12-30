import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListCard from "./list-card";
import ActionButton from "./action-button";

const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#dfe3e6",
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
  height: "100%",
}));

const List = ({ title, cards }) => {
  return (
    <BoxContainer>
      <h4>{title}</h4>
      {cards.map((card) => (
        <ListCard key={card.id} text={card.text} />
      ))}
      <ActionButton />
    </BoxContainer>
  );
};

export default List;
