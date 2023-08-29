import Score from "../score/Score";

function Students(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Bio: {props.bio}</h2>
      {props.scores.map((score, index) => (
        <Score key={index} scores={score.score} dates={score.date} />
      ))}
    </div>
  );
}

export default Students;
