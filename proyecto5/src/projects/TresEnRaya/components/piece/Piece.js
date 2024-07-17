const Piece = (type) => {
  const piece = document.createElement("img");
  piece.src = type;
  piece.className = "piece";

  return piece;
}

export default Piece;