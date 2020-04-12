export default interface IFlightIndicator {
  size?: number;
  roll?: number;
  pitch?: number;
  turn?: number;
  compass?: number;
  vspeed?: number;
  airspeed?: number;
  altitude?: number;
  pressure?: number;
  showBox?: boolean;
  imgDirectory?: string;
}
