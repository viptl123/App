import { Exercise } from "../../Components/Objects/Exercise";

const benchPress = new Exercise("Bench Press", "Lie on a bench with a bar above you, have the bar above your chest, hold the bar so that your palms are facing towards your feet, push teh bar up and off teh rack, then lower it so that your elbows make a 45 degree angle then lift it back up ");
const widePushUp = new Exercise("Wide Push Up", "Position your arms wider than your shoulders while lying down, lift up while keeping your back straight, then slowly bend your elbows to make a 90 degree angle then lift up");
const dumbellFly = new Exercise("Dumbell Flys", "Lie down with your back on a bench, hold dumbells in each hand, lift your arms to they are above your head, then slowly bend your arms to lower the dumbells until they are at chest levels to your side while keeping your arms mostly straight");
const cableChestPress = new Exercise("Cable Chest Press", "Have both cables at around shoulder level, grab each cable one in each hand by your sides, push the cables forward infront of you");
const inclineBenchPress = new Exercise("Incline Bench Press", "lie on an inclined bench with the bar above your shoulders, lift the bar up and off the rack, then lower it to around your chest, then lift back up");
const declineBenchPress = new Exercise("Decline Bench Press", "lie on a decline bench witht the bar above your lower chest, still have your palms facing towards your feet, then lift the bar up and off the rack and lower it to around your chest, then lift back up");
const pushUps = new Exercise("Push Ups", "Lay down face down, put your hands shoulder width apart underneath you, keep your back straight and legs straight and raise yourself up, then lower yourself until your arms make a 90 degree angle then lift back up");


export const ChestExercises = {
    benchPress: benchPress,
    widePushUp: widePushUp,
    dumbellFly: dumbellFly,
    cableChestPress: cableChestPress,
    inclineBenchPress: inclineBenchPress,
    declineBenchPress: declineBenchPress,
    pushUps: pushUps,
}

export const ChestList = [benchPress, widePushUp, dumbellFly, cableChestPress, inclineBenchPress, declineBenchPress,pushUps];