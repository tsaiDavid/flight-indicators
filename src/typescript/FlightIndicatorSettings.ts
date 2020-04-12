import IFlightIndicator from "./IFlightIndicator";

export default class FlightIndicatorSettings implements IFlightIndicator {
  size = 200;
  roll = 0;
  pitch = 0;
  turn = 0;
  compass = 0;
  vspeed = 0;
  airspeed = 0;
  altitude = 0;
  pressure = 1000;
  showBox = false;
  imgDirectory = "img/";
}
