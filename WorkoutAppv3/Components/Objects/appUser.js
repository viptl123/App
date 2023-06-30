class appUser {
    constructor(name, email, username){
        this.username = username;
        this.email = email;
        this.name =name;
        this.daysWorkedOut = [];
        this.Workouts = []
    }
    addWorkout(WorkoutRegimine){
        this.Workouts.push(WorkoutRegimine);
    }

}