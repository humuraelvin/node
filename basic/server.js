class Computer {
    constructor(company, version, RAM, Hardisk, IntelCore) {
        this.company = company;
        this.version = version;
        this.RAM = RAM;
        this.Hardisk = Hardisk;
        this.IntelCore = IntelCore;
    }

    powerOn = () => console.log("Lenovo Think Book \n loading OS.....");
    powerOff = () => console.log("shutting down....");
    reboot = () => console.log("Restarting....");
}

const computerOne = new Computer("Lenovo", "thinkbook", "8GB", "900GB", "i7");
const computerTwo = new Computer("MacBook", "Pro", "4GB", "90GB", "i5");
const computerThree = new Computer("DEL", "delbook", "5GB", "600GB", "i7");

console.log(computerOne.powerOff());
console.log("My computer is " + computerTwo.company + " and it has " + computerTwo.RAM + " RAM ");
console.log("" + computerThree.company + " is ");
computerThree.reboot();



