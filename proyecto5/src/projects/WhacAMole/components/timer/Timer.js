import './Timer.css';

const TimerComponent = (time) => {
  const timerComponent = document.createElement("div");
  timerComponent.className = "timer";
  timerComponent.textContent = `Tiempo: ${time} seg`;

  return timerComponent;
}

export default TimerComponent;