import "../styles.scss";

import { Facade } from "./modules/Facade";

document.addEventListener('DOMContentLoaded', e => {
    let facade = new Facade()
    facade.run()
})

// callWeather('Los Angeles')
// .then(processJson)
// .then(updateview)

