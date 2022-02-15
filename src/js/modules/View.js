export class View {
    constructor(){
        this.localStorage = window.localStorage
        this.mainIcon = document.getElementById('mainIcon')
        this.location = document.getElementById('locationTitle')
        this.tempDisplay = document.getElementById('temp')
        this.tempSwitch = document.getElementById('tempSwitch')
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
       this.giveIconPath(obj.weather.icon)
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
        
        this.localStorage.setItem("currentTemp", JSON.stringify(obj.tempsArr))
        this.changeTemp()
        
    }
    renderForeCastCards(){
        
    }
    changeTemp(){
        let cacheTemps = []
        if(window.localStorage.getItem('currentTemp') === null){
            return 
        } else {
            cacheTemps = JSON.parse(window.localStorage.getItem('currentTemp') || [] ) 
            console.log(cacheTemps)
        }
        
        this.tempSwitch.addEventListener('click', e => {
           if(e.target.id === "radio-two"){
            this.tempDisplay.textContent = `${Math.ceil(cacheTemps[0])}${this.Farendeg}`
           } else if (e.target.id === "radio-one"){
            this.tempDisplay.textContent = `${Math.ceil(cacheTemps[1])}${this.Celsiusdeg}`
           }
        })
    }

    giveIconPath(string){
        switch(string){
            case '01d': 
            this.mainIcon.src = './assets/icons/clear-day.svg'
            break;
            case '02d': 
            this.mainIcon.src = './assets/icons/partly-clody-day.svg'
            break;
            case '03d': 
            this.mainIcon.src = './assets/icons/cloudy.svg'
            break;
            case '04d': 
            this.mainIcon.src = 'assets/icons/overcast.svg'
            break;
            case '09d': 
            this.mainIcon.src = 'assetes/icons/rain.svg'
            break;
            case '10d': 
            this.mainIcon.src = 'assets/icons/overcast-rain.svg'
            break;
            case '11d': 
            this.mainIcon.src = 'assets/icons/thunderstorms.svg'
            break;
            case '13d':
            this.mainIcon.src = 'assets/icons/snow.svg'
            break;
            case '50d': 
            this.mainIcon.src = 'assets/icons/mist.svg'

        }
    }

}