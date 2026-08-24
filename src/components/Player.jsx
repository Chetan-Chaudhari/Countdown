import { useRef, useState } from "react";

export default function Player() {
  const [player, setPlayer] = useState("");
  let enteredPlayerName = useRef("");
  function onClickHandler() {
    setPlayer(enteredPlayerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {player}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={onClickHandler}>Set Name</button>
      </p>
    </section>
  );
}
