export function updateview(obj){
    console.log(obj)
    const location = document.getElementById('locationTitle')
    const tempDisplay = document.getElementById('temp')
    const toggleTemp = document.getElementById('radio-one');
    const weatherTitle = document.getElementById('weatherTitle')
    const pressure = document.getElementById('bp')
    const visibility = document.getElementById('vis')
    const deg = '\u00B0';
    const pressureSym = "\u3371";


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