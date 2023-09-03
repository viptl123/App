import { WorkoutArea } from "../../Components/Objects/WorkoutArea";
import { BackList } from "../Exercises/Back";
import { CardioList } from "../Exercises/Cardio";
import { LegList } from "../Exercises/Legs";
import { bicepList } from "../Exercises/Bicep";
import { tricepList } from "../Exercises/Tricep";
import { ChestList } from "../Exercises/Chest";
import { ShouldersList } from "../Exercises/Shoulders";

const Cardio = new WorkoutArea("Cardio");
Cardio.addExerciseList(CardioList);

const Back = new WorkoutArea("Back")
Back.addExerciseList(BackList);

const Bicep = new WorkoutArea("Bicep");
Bicep.addExerciseList(bicepList);

const Legs = new WorkoutArea("Legs");
Legs.addExerciseList(LegList);

const Tricep = new WorkoutArea("Tricep");
Tricep.addExerciseList(tricepList);

const Chest = new WorkoutArea("Chest");
Chest.addExerciseList(ChestList);

const Shoulders = new WorkoutArea("Shoulders");
Shoulders.addExerciseList(ShouldersList);


export const WorkoutAreaList = {
    Cardio: Cardio,
    Back: Back,
    Bicep: Bicep,
    Legs: Legs,
    Tricep: Tricep,
    Chest: Chest,
    Shoulders: Shoulders
}
export const WorkoutAreaArray = [Cardio, Back, Bicep, Legs, Tricep, Chest, Shoulders];