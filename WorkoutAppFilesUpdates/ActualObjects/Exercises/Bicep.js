import { Exercise } from "../../Components/Objects/Exercise";

const bicepCurl = new Exercise("Bicep Curl", "Hold a dumbell in each hand by your side, hold your elbow at your hip, and curl your arms infront of you raising the dumbell");
const hammerCurl = new Exercise("Hammer Curl", "Hold the dumbell at your side, hold it straight up, curl the dumbell straight up");
const preacherCurl = new Exercise("Preacher Curl", "Sit at a preacher bench and make it so your upper arms and chest are touching the pad, hold the bar and curl it upwards until at shoulder height");
const pullUp = new Exercise("Pull Up", "Grab the bar with a grip slightly bigger than shoulder width apart, with your hand facing away from you, then pull yourself up");
const barbellCurl = new Exercise("Barbell Curl", "Hold a barbell infront of you with your hands underneath it, with your hands slightly bigger than shoulder width apart, then curl the barbell towards you");
const reverseCurl = new Exercise("Reverse Curl", "Hold a bar infront of you with your hands on top of the bar holding it down, then curl the bar towards your chest, with your hands slightly bigger than shoulder width apart");
const concentrationCurl = new Exercise("Concentration Curl", "Sit on a bench with space your feet, then hold your elbow on your thight/ have it resting there, then curl the dumbell up flexing at the top as hard as possible")


export const BicepExercises = {
    bicepCurl: bicepCurl,
    hammerCurl: hammerCurl,
    preacherCurl: preacherCurl,
    pullUp: pullUp,
    barbellCurl: barbellCurl,
    reverseCurl: reverseCurl,
    concentrationCurl: concentrationCurl,

}
export const bicepList = [bicepCurl, hammerCurl, preacherCurl, pullUp, barbellCurl, reverseCurl,concentrationCurl ]