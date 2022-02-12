import "../styles.scss";

import { callWeather } from "./modules/callWeather";
import { processJson } from "./modules/processJson";
import { updateview } from "./modules/updateView"

callWeather('Los Angeles')
.then(processJson)
.then(updateview)