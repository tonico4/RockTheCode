import './BallView.css';

const BallView = (selectedBall) => {
  const ballView = document.createElement("div");
  ballView.className = "ballView";

  ballView.append(selectedBall);

  return ballView;
}

export default BallView;