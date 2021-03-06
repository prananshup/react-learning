import React from "react";
import reactDom from "react-dom";

class PortalChildModal extends React.Component {
  gridStyle = {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  };
  modalStyle = {
    padding: 20,
    background: "#fff",
    borderRadius: "2px",
    display: "inline-block",
    minHeight: "300px",
    margin: "1rem",
    position: "relative",
    minWidth: "300px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    justifySelf: "center",
  };

  render() {
    return reactDom.createPortal(
      <div style={this.gridStyle}>
        <div style={this.modalStyle}>
          {this.props.children}
          <hr />
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }
}

export default PortalChildModal;
