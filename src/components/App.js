import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FlexedBoxes = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

class App extends Component {
  render() {
    const { lists } = this.props;

    return (
      <Box>
        <h2>Hello there</h2>
        <FlexedBoxes>
          {lists.map((list) => (
            <List title={list.title} cards={list.cards} />
          ))}
        </FlexedBoxes>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
