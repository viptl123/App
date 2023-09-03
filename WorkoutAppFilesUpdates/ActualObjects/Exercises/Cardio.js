import { Exercise} from "../../Components/Objects/Exercise";

const running = new Exercise("Running", "Run");
const boxing = new Exercise("Boxing", "Box");
const basketball = new Exercise("Basketball", "basketball");
const jumpRope = new Exercise("Jump Rope", "Jump rope");
const dance = new Exercise("Dance", "dance");
const stairClimbing = new Exercise("Stair Climbing", "Climb Stairs");
const biking = new Exercise("Biking", "Ride a bike");

export const CardioExercises = {
    running: running,
    boxing: boxing,
    basketball: basketball,
    jumpRope: jumpRope,
    dance: dance,
    stairClimbing: stairClimbing,
    biking: biking,
}
export const CardioList = [running, boxing, basketball, jumpRope, dance, stairClimbing, biking];