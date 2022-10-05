interface AbstractProductA{
    methodA():void;
}
interface AbstractProductB{
    methodB():void;
}

interface AbstractFactory{
    createProductA():AbstractProductA;
    createProductB():AbstractProductB;
}

class ProductA1 implements AbstractProductA{
    methodA(): void {
        console.log("This is methodA in ProductA1");
    }
}
class ProductA2 implements AbstractProductA{
    methodA(): void {
        console.log("This is methodA in ProductA2");
    }
}
class ProductB1 implements AbstractProductB{
    methodB(): void {
        console.log("This is methodB in ProductB1");
    }
}
class ProductB2 implements AbstractProductB{
    methodB(): void {
        console.log("This is methodB in ProductB2");
    }
}
class ConcreteFactory1 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ProductA1();
    }
    createProductB(): AbstractProductB {
        return new ProductB1();
    }
}
class ConcreteFactory2 implements AbstractFactory{
    createProductA(): AbstractProductA {
        return new ProductA2();
    }
    createProductB(): AbstractProductB {
        return new ProductB2();
    }
}

console.log("");
console.log("");
console.log("ABSTRACT FACTORY");
console.log("");
console.log("Abstract factory Example 1:");

const cf1 = new ConcreteFactory1();
const pa1 = cf1.createProductA();
const pb1 = cf1.createProductB();

const cf2 = new ConcreteFactory2();
const pa2 = cf2.createProductA();
const pb2 = cf2.createProductB();
pa1.methodA();
pb1.methodB();
pa2.methodA();
pb2.methodB();

interface GUIFactory{
    createButton():void;
    createCheckBox():void;
}



export{};