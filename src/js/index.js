import "../styles.scss";

import { callWeather } from "./modules/callWeather";
import { Facade } from "./modules/Facade";

import { updateview } from "./modules/updateView"

// callWeather('Los Angeles')
// .then(processJson)
// .then(updateview)
document.addEventListener('DOMContentLoaded', e => {
    let facade = new Facade()
    facade.run()
})

