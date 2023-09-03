import { Exercise } from "../../Components/Objects/Exercise";

const pullUp = new Exercise("Pull Up", "Grab the bar with a grip slightly bigger than shoulder width apart, with your hand facing away from you, then pull yourself up");
const bentOverRow = new Exercise("Bent Over Row", "Have feet shoulder width apart, stand behind bar, bend over while keeping your back straight, at about a 45 degree angle, keep hands on bar shoulder width apart, then lift the bar up and lower it so your arms are extended, then lift the bar while bending elbows back until bar hits abs");
const seatedRow = new Exercise("Seated Row", "Pull the handle back towards your abs, try not to move your body while moving the weight, just your arms, try to keep your back straight and chest out");
const deadLift = new Exercise("DeadLift", "Hold the bar infront of you with arms shoulder width arpart, have your chest up and back straight, bend over so your lower leg is about at the level of the bar, then lift the weight and stand up");
const reverseFly = new Exercise("Reverse Fly", "Lean forward, hold dumbells infront of you with your arms straight, raise them to your sides keeping your arms slightly bent");
const latPullDown = new Exercise("Lat Pull Down", "have a wide grip of the bar, pull down the bar until it is at your chin level, moving backward slightly is okay");
const dumbellInclineRow = new Exercise("Dumbell Incline Row", "Lean face down on an incline bench, have a dumbell in each hand with arms extended downward, move your shoulder and elbows to bring the dumbells to your side ");

export const BackExercises = {
    pullUp: pullUp,
    bentOverRow: bentOverRow,
    seatedRow: seatedRow,
    deadLift: deadLift,
    reverseFly: reverseFly,
    latPullDown: latPullDown,
    dumbellInclineRow: dumbellInclineRow,
}

export const BackList = [pullUp, bentOverRow, seatedRow, deadLift, reverseFly, latPullDown, dumbellInclineRow];
