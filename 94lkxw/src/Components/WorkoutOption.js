export default function WorkoutOption({ text }, { className }) {
  return (
    <div className={className} id="WorkoutOption">
      <h3> {text} </h3>
    </div>
  );
}
