import { subscribe } from "graphql";

abstract class Observer{
    protected name:string;
    getName():string{
        return this.name;
    }
    abstract notify():void;
}
class ConcreteObserver extends Observer{
    state:number;
    subject:ConcreteSubject;
    constructor(subject:ConcreteSubject, name:string){
        super();
        console.log("ConcreteObserver: "+name+" is created");
        this.subject=subject;
        this.name=name;
    }
    notify(): void {
        console.log("ConcreteObserver's notify method");
        this.state=this.subject.getSubjectState();
        console.log(this.name, this.state);
    }

    getSubject():ConcreteSubject{
        return this.subject;
    }

    setSubject(subject:ConcreteSubject):void{
        this.subject=subject;
    }
}
abstract class Subject{
    observers: Observer[]=[];

    register(observer:Observer):void{
        console.log("Observer: "+observer.getName()+" is subscribed");
        this.observers.push(observer);
    }

    unregister(observer:Observer):void{
        console.log("Observer: "+observer.getName()+" is unsubscribed");
        let index = this.observers.indexOf(observer);
        this.observers.splice(index,1);
    }

    notify():void{
        console.log("Notify all observers from Subject");
        for(let i=0;i<this.observers.length;i++){
            this.observers[i].notify();
        }
    }
}
class ConcreteSubject extends Subject{
    subjectState:number;

    getSubjectState():number{
        return this.subjectState;
    }
    setSubjectState(subjState:number){
        this.subjectState=subjState;
    }
}

console.log("");
console.log("");
console.log("OBSERVER");
console.log("Observer Example 1:");
console.log("Structure");
const concreteSubj = new ConcreteSubject();
concreteSubj.register(new ConcreteObserver(concreteSubj,"Igor"));
concreteSubj.register(new ConcreteObserver(concreteSubj,"Matija"));
concreteSubj.register(new ConcreteObserver(concreteSubj,"Nikola"));
concreteSubj.setSubjectState(123);
concreteSubj.notify();
export{};