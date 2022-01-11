import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import ActionButton from "./action-button";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Sort } from "../actions";

const FlexedBoxes = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

class App extends Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      Sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Box>
          <h2>Hello there</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <FlexedBoxes {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => {
                  console.log(list);
                  return (
                    <List
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={list.cards}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
                <ActionButton list />
              </FlexedBoxes>
            )}
          </Droppable>
        </Box>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
