export class View {
    constructor(){
        this.location = document.getElementById('locationTitle')
        this.tempDisplay = document.getElementById('temp')
        this.toggleTemp = document.getElementById('radio-one');
        this.weatherTitle = document.getElementById('weatherTitle')
        this.pressure = document.getElementById('bp')
        this.visibility = document.getElementById('vis')
        this.deg = '\u00B0';
        this.pressureSym = "\u3371";
    }
    updateview(obj){
        console.log(obj)
        location.textContent = `${obj.name}, ${obj.country}`
       //extract into own stuff
        if(toggleTemp.checked === true){
            tempDisplay.textContent = `${Math.ceil(obj.tempsArr[1])}${deg}`
        } else {
            tempDisplay.textContent = `${MAth.ceil(obj.tempsArr[0])}${deg}`
        }
        weatherTitle.textContent = `${obj.weather.main}`
        pressure.textContent = `${obj.pressure}${pressureSym}`
        visibility.textContent = `${(obj.visibility) / 1000} Km`
    }
    renderForeCastCards(){
        
    }

}