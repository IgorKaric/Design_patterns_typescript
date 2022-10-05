class Adaptee{
    method():void{
        console.log("'method' of Adaptee is being called" );
    }
}
interface Target{
    call():void;
}
class Adapter implements Target{
    call(): void {
        console.log("Adapter's 'call' method is being called");
        var adaptee = new Adaptee();
        adaptee.method();
    }
}

console.log("");
console.log("");
console.log("ADAPTER");
console.log("");
console.log("Adapter Example 1");
console.log("Structure");
const adapter = new Adapter();
adapter.call();

interface Vehicle{
    horn():void;
}
class Truck implements Vehicle{
    horn(): void {
        console.log("BIIIIIIIP");
    }
}
interface Toy{
    play():void;
}
class VehicleAdapter implements Toy{
    vehicle:Vehicle;
    constructor(veh:Vehicle){this.vehicle=veh};
    play(){
        console.log("Calling from VehicleAdapter");
        this.vehicle.horn();
    }
}

console.log("");
console.log("Adapter Example 2:")
const truck = new Truck();
const vehicleAdapter = new VehicleAdapter(truck);
vehicleAdapter.play();

interface Connector{
    name:string;
    voltage:number;
}
class ConnectorUsa implements Connector{
    public voltage: number=120;
    public name: string="US-POWER-PLUG";
}
class ConnectorGermany implements Connector{
    public voltage: number=230;
    public name: string="GERMAN-POWER-PLUG";
}
abstract class SocketClient<T extends Connector>{
    constructor(connector:T){ this.connector=connector}
    connector:T;
    plugin(connector:T){
        if(connector.voltage != this.connector.voltage){
            console.log("Failed to connect "+connector.name+" with "+this.connector.name);
            return;
        }else{
            console.log("Successfully connected "+connector.name+" with "+this.connector.name);
        }
    }
}
class UsSocketClient extends SocketClient<ConnectorUsa>{
    constructor(){
        super({voltage:120,name:'US-POWER-PLUG'});
    }
}
class GermanSocketClient extends SocketClient<ConnectorGermany>{
    constructor(){
        super({voltage:230,name:'-POWER-PLUG'});
    }
}
class GermanToUsConnectorAdapter implements ConnectorUsa{
    public voltage: number=120;
    public name:string;
    constructor({name}:ConnectorGermany){
        this.name=name;
        this.voltage=120;
        console.log("Adapt "+name+" connector to a US-connector.");
    }
}

console.log("");
console.log("Adapter Example 3:");
const germanSocket = new GermanSocketClient();
const usSocket = new UsSocketClient();
const germanPowerPlusAdaptee = new ConnectorGermany();
const usPowerPlugAdaptee = new ConnectorUsa();
console.log("Compatible:")
germanSocket.plugin(germanPowerPlusAdaptee);
console.log("Compatible:")
usSocket.plugin(usPowerPlugAdaptee);
console.log("Not compatible:");
usSocket.plugin(germanPowerPlusAdaptee);

export{};