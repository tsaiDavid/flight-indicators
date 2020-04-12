import "../styles/style.scss";
import AttitudeIndicator from "./AttitudeIndicator";
import AltimeterIndicator from "./AltimeterIndicator";
import CompassIndicator from "./CompassIndicator";
import AirSpeedIndicator from "./AirSpeedIndicator";
import VerticalSpeedIndicator from "./VerticalSpeedIndicator";
import TurnIndicator from "./TurnIndicator";

let attitude = new AttitudeIndicator("#attitude", {
  size: 300,
  showBox: false,
});

let altimeter = new AltimeterIndicator("#altimeter", {
  size: 300,
  showBox: true,
});

let compass = new CompassIndicator("#compass", {
  size: 300,
  showBox: false,
});
let airspeed = new AirSpeedIndicator("#airspeed", {
  size: 300,
  showBox: false,
});
let vspeed = new VerticalSpeedIndicator("#vspeed", {
  size: 300,
  showBox: false,
});
let turner = new TurnIndicator("#turner", {
  size: 300,
  showBox: false,
});

// Update at 40Hz
var increment = 0;
setInterval(function () {
  // Attitude update
  attitude.setRoll(30 * Math.sin(increment / 10));
  attitude.setPitch(50 * Math.sin(increment / 20));

  // Altimeter update
  altimeter.setAltitude(10 * increment);
  altimeter.setPressure(1000 + 3 * Math.sin(increment / 50));

  // Compass update
  compass.setDirection(increment);

  // Air speed update
  airspeed.setAirSpeed(80 + 80 * Math.sin(increment / 10));

  // Vertical speed update
  vspeed.setSpeed(2 * Math.sin(increment / 10));

  // Turner update
  turner.setTurn(30 * Math.sin(increment / 10));

  increment++;
}, 100);
