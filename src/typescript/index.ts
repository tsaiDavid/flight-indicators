import "../styles/style.scss";
import AttitudeIndicator from "./AttitudeIndicator";
import AltimeterIndicator from "./AltimeterIndicator";
import CompassIndicator from "./CompassIndicator";
import AirSpeedIndicator from "./AirSpeedIndicator";
import VerticalSpeedIndicator from "./VerticalSpeedIndicator";
import TurnIndicator from "./TurnIndicator";

let oAttitude = new AttitudeIndicator("#attitude", {
  size: 300,
  showBox: false,
});
let oAltimeter = new AltimeterIndicator("#altimeter", {
  size: 300,
  showBox: true,
});
let oCompass = new CompassIndicator("#compass", {
  size: 300,
  showBox: false,
});
let oAirspeed = new AirSpeedIndicator("#airspeed", {
  size: 300,
  showBox: false,
});
let oVspeed = new VerticalSpeedIndicator("#vspeed", {
  size: 300,
  showBox: false,
});
let oTurner = new TurnIndicator("#turner", {
  size: 300,
  showBox: false,
});

// Update at 20Hz
var nIncrement = 0;
setInterval(() => {
  // Attitude update
  oAttitude.setRoll(30 * Math.sin(nIncrement / 10));
  oAttitude.setPitch(50 * Math.sin(nIncrement / 20));

  // Altimeter update
  oAltimeter.setAltitude(10 * nIncrement);
  oAltimeter.setPressure(1000 + 3 * Math.sin(nIncrement / 50));

  // Compass update
  oCompass.setDirection(nIncrement);

  // Air speed update
  oAirspeed.setAirSpeed(80 + 80 * Math.sin(nIncrement / 10));

  // Vertical speed update
  oVspeed.setSpeed(2 * Math.sin(nIncrement / 10));

  // Turner update
  oTurner.setTurn(30 * Math.sin(nIncrement / 10));

  nIncrement++;
}, 50);
