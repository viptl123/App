class appUser {
    constructor(firstName, lastName, email){
        this.email = email;
        this.firstName =firstName;
        this.lastName = lastName;
        this.daysWorkedOut = [];
        this.Workouts = []
    }
    addWorkout(WorkoutRegimine){
        this.Workouts.push(WorkoutRegimine);
    }

}