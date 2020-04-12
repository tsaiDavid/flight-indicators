export default interface IFlightIndicator {
  size?: number;
  roll?: number;
  pitch?: number;
  turn?: number;
  heading?: number;
  vario?: number;
  airspeed?: number;
  altitude?: number;
  pressure?: number;
  showBox?: boolean;
  img_directory?: string;
}
