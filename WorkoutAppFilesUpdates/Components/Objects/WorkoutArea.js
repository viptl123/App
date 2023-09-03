

export class WorkoutArea {

    constructor(name){
        this.name = name;
        this.exercises = [];
    }
    addExerciseList(list){
        this.exercises = list;
    }
    addExercise(exercise){
        const index = this.exercises.indexOf(exercise.name);
        if (index === -1){
        this.exercises.push(exercise.name);
        }else {
        this.exercises.splice(index, 1);
        }
  }

}