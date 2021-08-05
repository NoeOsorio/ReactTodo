import React from "react";

export default function Button({ name: buttonName = "Button", ...rest }) {
  let styles = { backgroundColor: "red", fontSize: "2rem", padding: "1rem" };

  styles = { ...styles, border: "2px yellow solid" };

  return (
    <button {...rest} style={styles} type="button">
      {buttonName}
    </button>
  );
}

export function ButtonSimple(props) {
  const styles = {
    backgroundColor: "green",
    fontSize: "2rem",
    padding: "1rem",
  };

  if (true) {
    styles.border = "2px yellow solid";
  }

  const action = () => {
    alert(props.name);
  };

  return (
    <button onClick={action} style={styles} type="button">
      {props.name}
    </button>
  );
}
