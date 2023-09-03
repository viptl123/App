

export class Workout{

  constructor(){
    this.name = "";
    this.BodyParts = [];
  }

  addBodyPart(name){
    const index = this.BodyParts.indexOf(name);;
    if (index === -1){
      this.BodyParts.push(name);
    }else {
      this.BodyParts.splice(index, 1);
    }
  }



}