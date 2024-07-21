import './Record.css';

const RecordComponent = (record) => {
  const recordComponent = document.createElement("p");
  recordComponent.className = "record";
  recordComponent.textContent = `Record: ${record}`;

  return recordComponent;
}

export default RecordComponent;