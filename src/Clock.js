import React from "react";

function Clock() {
  const currentHour = new Date().getHours();
  switch (true) {
    case currentHour < 12:
      return <h1>Good Morning!</h1>;
    case currentHour > 18:
      return <h1>Good Evening!</h1>;
    default:
      return <h1>Good Afternoon!</h1>;
  }
}

export default Clock;
