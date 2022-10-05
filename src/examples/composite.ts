abstract class Element {
    name:string;
    constructor() {
        
    }
    abstract operation():void;

    add(element: Element){}
    remove(element: Element){}

    setName(name:string):void{
        this.name=name;
    }
    getName():string{
        return this.name;
    }
}
class Leaf extends Element{
    operation(): void {
        console.log("This is "+this.name);
    } 
}

class Composite extends Element{
    protected children: Element[]=[];

    add(element:Element){
        this.children.push(element);
    }
    remove(element:Element){
        let index=this.children.indexOf(element);
        this.children.splice(index,1);
    }

    operation(): void {
        console.log("This is Composite: "+this.getName()+" and here are his elements:");
        for(let i=0;i<this.children.length;i++){
            this.children[i].operation();
        }
        console.log("End of elements for Composite "+this.getName());
    }
}
console.log("COMPOSITE");
console.log("Composite Example 1:");
console.log("Structure");
const firstLayerComposite = new Composite();
firstLayerComposite.setName("First layer composite");
const secondLayerComposite = new Composite();
secondLayerComposite.setName("Second layer composite");
const leaf1=new Leaf();
leaf1.setName("Leaf layer 1 - name1");
const leaf2=new Leaf();
leaf2.setName("Leaf layer 1 - name2");
const leaf3=new Leaf();
leaf3.setName("Leaf layer 1 - name3");
firstLayerComposite.add(leaf1);
firstLayerComposite.add(leaf2);
firstLayerComposite.add(leaf3);
firstLayerComposite.add(secondLayerComposite);
const leaf4=new Leaf();
leaf4.setName("Leaf layer 2 - name4");
const leaf5=new Leaf();
leaf5.setName("Leaf layer 2 - name5");
const leaf6=new Leaf();
leaf6.setName("Leaf layer 2 - name6");
secondLayerComposite.add(leaf4);
secondLayerComposite.add(leaf5);
secondLayerComposite.add(leaf6);
firstLayerComposite.operation();

abstract class Component{
    name:string;
    abstract draw():void;
    add(element: Component){}
    remove(element: Component){}
    setName(name:string):void{
        this.name=name;
    }
    getName():string{
        return this.name;
    }
}

class Line extends Component{
    draw(): void {
        console.log("This is "+this.name);
    } 
}

class Rectangle extends Component{
    draw(): void {
        console.log("This is "+this.name);
    } 
}

class Drawing extends Component{
    protected children: Component[]=[];

    add(element:Component){
        this.children.push(element);
    }
    remove(element:Component){
        let index=this.children.indexOf(element);
        this.children.splice(index,1);
    }

    draw(): void {
        console.log("This is Drawing: "+this.getName()+" and here are his elements:");
        for(let i=0;i<this.children.length;i++){
            this.children[i].draw();
        }
        console.log("End of elements for Drawing "+this.getName());
    }
}
console.log("");
console.log("Composite Example 2:");
const drawing1 = new Drawing();
drawing1.setName("First layer drawing");
const drawing2 = new Drawing();
drawing2.setName("Second layer drawing");
const line1=new Line();
line1.setName("Line 1");
const line2=new Line();
line2.setName("Line 2");
const rectangle1=new Rectangle();
rectangle1.setName("Rectangle 1");
drawing1.add(line1);
drawing1.add(line2);
drawing1.add(rectangle1);
drawing1.add(drawing2);
const rectangle2=new Rectangle();
rectangle2.setName("Rectangle 2");
const rectangle3=new Rectangle();
rectangle3.setName("Rectangle 3");
drawing2.add(rectangle2);
drawing2.add(rectangle3);
drawing1.draw();
export {};