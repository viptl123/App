import { Exercise } from "../../Components/Objects/Exercise";


const sideLateralRaise = new Exercise("Side Lateral Raise", "hold the dumbells to your side and raise them laterally");
const frontRaise = new Exercise("Front Raise", "Hold the dumbells infront of you and raise them up to chest level while keeping your arms straight or close to straight");
const overheadPress = new Exercise("Overhead Press", "Hold a bar at about shoulder level and raise it above your head, try to get your arms straight")
const facePull = new Exercise("Face Pull", "Have a cable above your head and infront of you, attached to a rope. Then Pull it towards your chest, with your elbow going to either side of your face ");
const cableLateralRaise = new Exercise("Cable Lateral Raise", "have the cable infront of you and below you at about your feet level, bring the cable with one arm from about knee level to chest level while keeping your arms straight");
const dumbellShoulderPress = new Exercise("Dumbell Shoulder Press", "Hold one dumbell in each hand on top of each shoulder, raise the dumbell to where your arm is straight");
const reverseFly = new Exercise("Reverse Fly", "Lean forward, hold dumbells infront of you with your arms straight, raise them to your sides keeping your arms slightly bent");

export const ShoulderExercises = {
    sideLateralRaise: sideLateralRaise,
    frontRaise: frontRaise,
    overheadPress: overheadPress,
    facePull: facePull,
    cableLateralRaise: cableLateralRaise,
    dumbellShoulderPress: dumbellShoulderPress,
    reverseFly: reverseFly,
}
export const ShouldersList = [sideLateralRaise, frontRaise, overheadPress, facePull, cableLateralRaise, dumbellShoulderPress, reverseFly];
