export class View {
    constructor(){
        this.location = document.getElementById('locationTitle')
        this.tempDisplay = document.getElementById('temp')
        this.toggleTemp = document.getElementById('radio-one');
        this.weatherTitle = document.getElementById('weatherTitle')
        this.pressure = document.getElementById('bp')
        this.visibility = document.getElementById('vis')
        this.speed = document.getElementById('windSpeed')
        this.humidity = document.getElementById('humidity')
        this.Celsiusdeg = '\u2103';
        this.Farendeg = '\u2109';
        this.pressureSym = "\u3371";
    }
    updateview(obj){
        console.log(obj)
      
        this.location.textContent = `${obj.name}, ${obj.country}`
       //extract into own stuff
       
        if(this.toggleTemp.checked === true){
            this.tempDisplay.textContent = `${Math.ceil(obj.tempsArr[1])}${this.Celsiusdeg}`
        } else {
            this.tempDisplay.textContent = `${Math.ceil(obj.tempsArr[0])}${this.Farendeg}`
        }
        this.weatherTitle.textContent = `${obj.weather.main}`
        this.pressure.textContent = `${obj.pressure}${this.pressureSym}`
        this.visibility.textContent = `${(obj.visibility) / 1000} Km`
        this.speed.textContent = `${obj.speed} k/h`
        this.humidity.textContent = `${obj.humidity}%`
    }
    renderForeCastCards(){
        
    }

}