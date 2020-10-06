class VendingMachine {
    constructor(name) {
    this.name = name;
    this.firstCandy = 50;
    this.secondCandy = 60;
    this.firstChips = 20;
    }
    

    render() {
        return `      
            <div>${this.name}</div>      
            <div>First Candy: ${this.firstCandy}</div>      
            <div>Second Candy: ${this.secondCandy}</div> 
            <div>First Chips: ${this.firstChips}</div>
        ` ; 
    }
    
    vendCandy(){
        this.firstCandy --;
        this.secondCandy --;
    }

    vendChips(){
        this.firstChips --;
    }

}

 
 
let vendMachine = new VendingMachine("Snax");
let vend = document.getElementById("vend");
vend.innerHTML = vendMachine.render();

function firstCandy() {
     vendMachine.vendCandy();
     vend.innerHTML = vendMachine.render();
}

function secondCandy() {
    vendMachine.vendCandy();
    vend.innerHTML = vendMachine.render();
}

function firstChips() {
    vendMachine.vendChips();
    vend.innerHTML = vendMachine.render();
}