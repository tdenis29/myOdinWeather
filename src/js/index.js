import "../styles.scss";

import { callWeather } from "./modules/callWeather";
import { processJson } from "./modules/processJson";

callWeather('calgary')
.then(processJson)