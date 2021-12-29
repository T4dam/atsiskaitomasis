import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const ListCard = ({ text }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ListCard;
