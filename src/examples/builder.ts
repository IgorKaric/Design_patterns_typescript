class House{
    base:string;
    hedge:string;
    roof:string;
    addBase(base:string):void{
        this.base=base;
        console.log("Base "+base+" added");
    };
    addHedge(hedge:string):void{
        this.hedge=hedge;
        console.log("Hedge "+hedge+" added");
    };
    addRoof(roof:string):void{
        this.roof=roof;
        console.log("Roof "+roof+" added");
    };
}

console.log("");
console.log("");
console.log("BUILDER");
console.log("");
console.log("Builder Example 1:")
const house = new House();
house.addBase("baseName");
house.addHedge("hedgeName");
house.addRoof("rootName");

class User{
    name:string;
    ID:number;
    addName(name:string):void{
        this.name=name;
        console.log("Name "+name+" added");
    }
    addId(id:number):void{
        this.ID=id;
        console.log("ID "+id+" added");
    }
}

console.log("");
console.log("Builder Example 2:");
const user = new User();
user.addName("Igor");
user.addId(1);

export{};