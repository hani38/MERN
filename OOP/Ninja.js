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
        this.health = this.health + 10 ;
    }
    
}
const ninja1 = new Ninja("Hyabusa" , 3);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();