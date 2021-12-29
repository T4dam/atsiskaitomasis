import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListCard from "./list-card";

const BoxContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#ccc",
  borderRadius: theme.spacing(1),
  width: 300,
  padding: theme.spacing(1)
}));

const List = () => {
  return (
    <BoxContainer>
      <ListCard />
    </BoxContainer>
  );
};

export default List;
