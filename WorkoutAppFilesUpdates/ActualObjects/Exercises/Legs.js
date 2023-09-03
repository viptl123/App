import { Exercise } from "../../Components/Objects/Exercise";

const squat = new Exercise("Squat", "If your holding a dumbell hold it infront of you with both hand, at about chest level, then keeping your back straight bend your knees to where your legs make a 90 degree angle then come back up");
const calfRaise = new Exercise("Calf Raises", "If holding a dumbell hold then to your sides, then raise your feet keeping the front of your foot on the ground, raising the back of your feet and your heels");
const lunges = new Exercise("Lunge", "Stand straight, then put one foot infront of you and slowly bend your knee to have your front foot make a 90 degree angle, then lift up");
const bulgarianSplitSquat = new Exercise("Bulgarian Split Squat", "Place one foot on a bench behind you with your foot face down, squat down until your front foot makes a 90 degree angle then lift up");
const romanianDeadLift = new Exercise("Romanian DeadLifts", "have your feet shoulder width apart, if holding dumbells hold them infront of you, have your chest up and back striahgt, then push your hips back and down so that your dumbells lower until they are about halfway between your feet and knees");
const deadLift = new Exercise("DeadLift", "Hold the bar infront of you with arms shoulder width arpart, have your chest up and back straight, bend over so your lower leg is about at the level of the bar, then lift the weight and stand up");
const backSquat = new Exercise("Back Squat", "Step under the bar with it on your shoulders before lifting it, hold it where it feels most comfortable about shoulder width apart, bring your elbows in, then sit straight down to where your legs make a 90 degree angle, then lift back up")

export const LegExercises ={
    squat: squat,
    calfRaise: calfRaise,
    lunges: lunges,
    bulgarianSplitSquat: bulgarianSplitSquat,
    romanianDeadLift: romanianDeadLift,
    deadLift: deadLift,
    backSquat: backSquat,
}
export const LegList =[squat, calfRaise, lunges, bulgarianSplitSquat, romanianDeadLift, deadLift, backSquat]