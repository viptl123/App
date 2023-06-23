class Workout{
    constructor(name, videoLink="No video"){
        this.workoutName = name;
        this.link = videoLink;
        this.isSelected = false;
    }
    
    isSelected(){
        if (this.isSelected){
            this.isSelected = false;
        }
        else {
            this.isSelected = true;
        }
    }
}
export default Workout;