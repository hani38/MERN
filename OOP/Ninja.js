class Ninja {
    constructor(name , health){
        this.name = name ;
        this.health = health ; 
        this.speed = 3 ; 
        this.stringth = 3;
    }

    sayName(){
        console.log(` name is : ${this.name}`)
    }
    showStats(){
        console.log(` name is : ${this.name} ,  haelth is : ${this.health} , stringth is : ${this.stringth} , speed is : ${this.speed}`  )
    }
    drinkSake(){
       return this.health = this.health + 10 ;

    }
    
}
const ninja1 = new Ninja("Hyabusa" , 3);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name , 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){

    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
}
    

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.drinkSake();
