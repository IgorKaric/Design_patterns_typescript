interface Mediator{
    send(msg:string,colleague:Colleague):void;
}
abstract class Colleague{
    mediator:Mediator;

    constructor(mediator:Mediator){
        this.mediator=mediator;
    }

    abstract send(msg:string):void;
    abstract receive(msg:string):void;
}
class ConcreteColleagueA extends Colleague{
    constructor(mediator:Mediator){
        super(mediator);
    }
    send(msg: string): void {
        this.mediator.send(msg,this);
    }
    receive(msg: string): void {
        console.log(msg+" 'receive' of ConcreteColleagueA is being called!");
    }
}
class ConcreteColleagueB extends Colleague{
    constructor(mediator:Mediator){
        super(mediator);
    }
    send(msg: string): void {
        this.mediator.send(msg,this);
    }
    receive(msg: string): void {
        console.log(msg+" 'receive' of ConcreteColleagueB is being called!");
    }
}
class ConcreteMediator implements Mediator{
    concreteColleagueA:ConcreteColleagueA;
    concreteColleagueB:ConcreteColleagueB;

    send(msg:string,colleague:Colleague):void{
        if(this.concreteColleagueA == colleague){
            this.concreteColleagueB.receive(msg);
        }else{
            this.concreteColleagueA.receive(msg);
        }
    }
}
console.log("");
console.log("");
console.log("MEDIATOR");
console.log("Mediator Example 1:");
console.log("Structure");
const cm:ConcreteMediator = new ConcreteMediator();
const c1:ConcreteColleagueA = new ConcreteColleagueA(cm);
const c2:ConcreteColleagueB = new ConcreteColleagueB(cm);
cm.concreteColleagueA=c1;
cm.concreteColleagueB=c2;

c1.send("'send' of ConcreteColleagueA is being called");
c2.send("'send' of ConcreteColleagueB is being called");

export{};