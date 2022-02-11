import React from "react";
import PortalChildModal from "./PortalChildModal";

class PortalDemo extends React.Component {
  state = { openModal: false };

  openModalWindow = () => {
    this.setState((prevState) => ({
      openModal: !prevState.openModal,
    }));
  };

  render() {
    return (
      <>
        <div id="modal-root"></div>
        <button type="button" onClick={this.openModalWindow}>
          Open Modal
        </button>
        {this.state.openModal && (
          <PortalChildModal onClose={this.openModalWindow}>
            This is modal
          </PortalChildModal>
        )}
      </>
    );
  }
}

export default PortalDemo;
