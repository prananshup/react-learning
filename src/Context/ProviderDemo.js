import React from "react";
import { UserProvider } from "./userContext";
import ConsumerDemo from "./ConsumerDemo";

class ProviderDemo extends React.Component {
  render() {
    return (
      <UserProvider value="pranu">
        <ConsumerDemo>hi</ConsumerDemo>
      </UserProvider>
    );
  }
}

export default ProviderDemo;
