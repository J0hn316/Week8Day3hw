function Score(props) {
  return (
    <div>
      <h3>Score</h3>
      <h3>{props.scores}</h3>
      <h3>{props.dates}</h3>
    </div>
  );
}

export default Score;
