export class Profile {
    name;
    agg;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        return "Hello my name is " + this.name + " I'm " + this.age + " years old";
    }
}