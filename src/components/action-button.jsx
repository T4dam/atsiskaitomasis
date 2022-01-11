import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

const StyledButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: theme.spacing(1),
  height: theme.spacing(4),
  width: theme.spacing(34),
  paddingLeft: 10,
}));

const SubmitButton = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginTop: theme.spacing(1),
}));

class ActionButton extends React.Component {
  state = {
    formOpen: false,
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  closeForm = () => {
    this.setState({
      formOpen: false,
    });
  };
  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({
        text: "",
      });
      dispatch(addList(text));
    }
    return;
  };
  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    console.log(this.props);
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listID, text));
    }
    return;
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Pridėti lentelę" : "Pridėti užrašą";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <StyledButtonBox
        onClick={this.openForm}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <AddIcon />
        <p style={{ flexShrink: 0 }}>{buttonText}</p>
      </StyledButtonBox>
    );
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Naujas lentelės pavadinimas..."
      : "Naujas kortėlės užrašas...";

    const buttonTitle = list ? "Pridėti pavadinimą" : "Pridėti tekstą";
    return (
      <Box>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextareaAutosize
            autoFocus
            onBlur={this.closeForm}
            placeholder={placeholder}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Card>
        <SubmitButton>
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}{" "}
          </Button>
          <CloseIcon
            style={{ marginLeft: "8px", cursor: "pointer" }}
          ></CloseIcon>
        </SubmitButton>
      </Box>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
export default connect()(ActionButton);
