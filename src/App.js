import React from "react";
import Clock from "./Clock";

function App({ loggedIn }) {
  return loggedIn ?  <Clock /> : null;
  // return loggedIn && <Clock />;
  /* 
  if (loggedIn) {
    return <Clock />;
  }
   */
}
export default App;
