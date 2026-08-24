import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  let dialog = useRef();
  let countdown = useRef();
  let countDownTimer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);

  function onTimerStarted() {
    let startingTime = Date.now();
    countDownTimer.current = setInterval(() => {
      countdown.current = Date.now() - startingTime;
      if (countdown.current > targetTime * 1000) {
        onTimerStop();
      }
    }, 10);
    setTimerStarted(true);
  }
  function onTimerStop() {
    clearInterval(countDownTimer.current);
    setTimerStarted(false);
    dialog.current.showModal();
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime * 1000}
        stoppedTime={countdown.current}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? onTimerStop : onTimerStarted}>
            Start Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
