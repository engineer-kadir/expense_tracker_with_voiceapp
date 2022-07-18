import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="4f020661-a485-4f87-a66e-242c174d4e3a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
