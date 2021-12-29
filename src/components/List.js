import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListCard from "./list-card";

const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#dfe3e6",
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const List = ({ title, cards }) => {
  return (
    <BoxContainer>
      <h4>{title}</h4>
      {cards.map((card) => (
        <ListCard text={card.text} />
      ))}
    </BoxContainer>
  );
};

export default List;
