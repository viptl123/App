import { BackList } from "../Exercises/Back";
import { bicepList } from "../Exercises/Bicep";
import { CardioList } from "../Exercises/Cardio";
import { ChestList } from "../Exercises/Chest";
import { LegList } from "../Exercises/Legs";
import { ShouldersList } from "../Exercises/Shoulders";
import { tricepList } from "../Exercises/Tricep";

const exerciseMap = new Map();

for (let i =0; i < BackList.length; i++){
    exerciseMap.set(BackList[i].name, BackList[i])
}
for (let i =0; i < bicepList.length; i++){
    exerciseMap.set(bicepList[i].name, bicepList[i])
}
for (let i =0; i < CardioList.length; i++){
    exerciseMap.set(CardioList[i].name, CardioList[i])
}
for (let i =0; i < ChestList.length; i++){
    exerciseMap.set(ChestList[i].name, ChestList[i])
}
for (let i =0; i < LegList.length; i++){
    exerciseMap.set(LegList[i].name, LegList[i])
}
for (let i =0; i < ShouldersList.length; i++){
    exerciseMap.set(ShouldersList[i].name, ShouldersList[i])
}
for (let i =0; i < tricepList.length; i++){
    exerciseMap.set(tricepList[i].name, tricepList[i])
}
export default exerciseMap;




