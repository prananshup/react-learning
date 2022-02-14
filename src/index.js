import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComponentLifeCycle from "./ComponentLifeCycle";
import reportWebVitals from "./reportWebVitals";
import FetchData from "./FetchData";
import FetchDataHook from "./FetchDataHook";
import HooksInReact from "./HooksInReact";
import FetchDataClick from "./FetchDataClick";
import UseStateWithObj from "./UseStateWithObj";
import ChildrenProps from "./ChildrenProps";
import ButtonCounter from "./RenderProps/ButtonCounter";
import HoverCounter from "./RenderProps/HoverCounter";
import Counter from "./RenderProps/Counter";
import CounterToChildren from "./RenderProps/CounterToChildren";
import ComponentUsingRef from "./ComponentUsingRef";
import PortalChildModal from "./PortalChildModal";
import PortalDemo from "./PortalDemo";
import ProviderDemo from "./Context/ProviderDemo";

ReactDOM.render(
  <React.StrictMode>
    <ProviderDemo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
