export class Temps {
    constructor(temp){
        this.temp = temp
        this.temps = []
    }
    tempsConvert(temp){
        let farenheit = parseInt(temp) * 9/5 - 459.67;
        this.temps.push(farenheit)
        let celsius = parseInt(temp) - 273.15;
        this.temps.push(celsius)
    }
    getTemps(){
        return this.temps
    }
}

//used an IIFE and returning an Object named myTempsModule with methods for conversion from Kelvin instead of class to 
//reduce coupling 
// export const myTemps = ((){

//     function celsiusConvert(temp){
//         let celsius = parsInt(temp) - 273.15;
//         return celsius; 
//     }

//     function farenheitConvert(temp){
//         let farenheit = parseInt(temp) * 9/5 - 459.67;
//         return farenheit;
//     }
//     return {
//         celsiusConvert,
//         farenheitConvert
//     }
// })();
//or class and instantiate on data processor object and keep out of global scope