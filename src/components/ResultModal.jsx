import { createPortal } from "react-dom";

export default function ResultModal({ ref, targetTime, stoppedTime }) {
  const userWin = targetTime >= stoppedTime;
  return createPortal(
    <dialog ref={ref} className="result-modal">
      <h2>you {userWin ? "Win!" : "Lost!"}</h2>
      <p>
        The target time was <strong>{targetTime / 1000} seconds</strong>
      </p>
      <p>
        <strong>
          {targetTime < stoppedTime
            ? "Time Expired"
            : ` You stopped the timer with ${((targetTime - stoppedTime) / 1000).toFixed(2)} seconds left.`}
        </strong>
      </p>
      <p>
        Your Score{" "}
        <strong>
          {targetTime < stoppedTime
            ? 0
            : ((100 / targetTime) * stoppedTime).toFixed(2)}
          .
        </strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}
