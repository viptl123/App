class WorkoutRegimine {

    constructor(name){
        this.name = name;
        this.WorkoutAreas = []
    }

    addWorkout(workout){
        this.WorkoutAreas.push(workout);
    }

}