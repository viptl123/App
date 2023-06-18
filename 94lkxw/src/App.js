import "./styles.css";
import WorkoutOption from "./Components/WorkoutOption.js";
import image from "./images/Cardio.jpg";

export default function App() {
  return (
    <div className="App">
      <h1 className="hello">Welcome User</h1>
      <h2>What would you like to workout today?</h2>
      <div>
        <div
          style={{
            backgroundImage: `url(${require("./images/Cardio.jpg")})`
          }}
        >
          <WorkoutOption id="Cardio" text="Cardio" />
        </div>
        <br></br>
        <WorkoutOption id="Pull" text="Back and Bicep" />
        <br></br>
        <WorkoutOption id="Push" text="Shoulders, Tricep and Chest" />
        <br></br>
        <WorkoutOption id="Legs" text="Legs" />
      </div>
    </div>
  );
}
