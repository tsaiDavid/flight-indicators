import IFlightIndicator from "./IFlightIndicator";

export default class FlightIndicatorSettings implements IFlightIndicator {
  size = 200;
  roll = 0;
  pitch = 0;
  turn = 0;
  heading = 0;
  vario = 0;
  airspeed = 0;
  altitude = 0;
  pressure = 1000;
  showBox = false;
  img_directory = "img/";
}
