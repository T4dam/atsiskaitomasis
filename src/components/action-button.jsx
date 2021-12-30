import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import CloseIcon from "@mui/icons-material/Close";

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
  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Pridėti užrašą" : "Pridėti stulpelį";
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
        <p>{buttonText}</p>
      </StyledButtonBox>
    );
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Naujas kortelės užrašas..."
      : "Naujas lentelės pavadinimas";

    const buttonTitle = list ? "Pridėti užrašą" : "Pridėti lentelę";
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
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}{" "}
          </Button>
          <CloseIcon style={{ marginLeft: "8px", cursor: "pointer" }}>
            Close
          </CloseIcon>
        </SubmitButton>
      </Box>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
export default ActionButton;
