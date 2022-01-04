import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ActionButton from "./action-button";
import { DragDropContext } from "react-beautiful-dnd";

const FlexedBoxes = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

class App extends Component {
  onDragEnd = () => {};
  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Box>
          <h2>Hello there</h2>
          <FlexedBoxes>
            {lists.map((list) => {
              console.log(list);
              return (
                <List
                  listID={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              );
            })}
            <ActionButton list />
          </FlexedBoxes>
        </Box>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
