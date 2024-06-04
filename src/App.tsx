import React from "react";
import View from "./Store/View";
import { Provider } from "react-redux";
import Store from "./Store";
import Hoc from "./HOC/Hoc";
import One from "./HOC/One";
import Two from "./HOC/Two";
import Wrapper from "./HOC/Wrapper";

function App() {
  return <Wrapper />;
}

export default App;

// <Provider store={Store}>
//   <View />
// </Provider>
