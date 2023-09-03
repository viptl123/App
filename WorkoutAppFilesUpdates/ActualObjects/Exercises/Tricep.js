import { Exercise } from "../../Components/Objects/Exercise";

const tricepDips = new Exercise("Tricep Dips", "sit down infront of a bench, put your arms behind you on the bench about shoulder width apart, lay your feet down infront of you, now push up with your arms and allow yourself to dropn to almsot touch the floor and repeat");
const pushDowns = new Exercise("Push Downs", "have a cable infront of you that is raised above your head, hold a rope attached to it at about chest level, push down on the rope keeping it infront of you and repeat")
const pushUps = new Exercise("Push Ups", "Lay down face down, put your hands shoulder width apart underneath you, keep your back straight and legs straight and raise yourself up, then lower yourself until your arms make a 90 degree angle then lift back up");
const tricepExtensions = new Exercise("Tricep Extension", "Have a dumbell in your hand, hold your hand over your head straight up, then slowly lower the dumbell behind your head to make a 90 degree angle then raise");
const tricepKickback = new Exercise("Tricep Kickback", "Lean over on a bench with one leg on a bench and the other on the ground, hold the dymbell in one arm by your side, then push the dumbell back to have your arm striaght back");
const diamondPushUp = new Exercise("Diamond Push Ups", "Have your hands underneath you straight down but put them together in the shape of a diamond, then raise yourself, and while keeping your back and legs straight lower yourself to have your arms make a 90 degree angle");
const lyingDumbellTricepExtension = new Exercise("Lying dumbell Tricep Extension", "lie down on a bench face up, hold a dumbell in each arm leaning towards you to where your arms make a 90 degree angle, push the dumbell forward to make a 90 degree angle");

export const tricepExercises={
    tricepDips: tricepDips,
    pushDowns: pushDowns,
    pushUps: pushUps,
    tricepExtensions: tricepExtensions,
    tricepKickback: tricepKickback,
    diamondPushUp: diamondPushUp,
    lyingDumbellTricepExtension: lyingDumbellTricepExtension,
}

export const tricepList = [tricepDips, pushDowns, pushUps, tricepExtensions, tricepKickback, diamondPushUp, lyingDumbellTricepExtension];

