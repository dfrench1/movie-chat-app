import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configStore from "./redux/reducers/configStore";
import { PersistGate } from 'redux-persist/integration/react'

import App from "./App";

render(
   <Provider store={configStore().store}>
   <PersistGate loading={null} persistor={configStore().persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
   </Provider>,
  document.getElementById("root")
);
