import FlightIndicator from "./FlightIndicator";

export default class AirSpeedIndicator extends FlightIndicator {
  protected init(): void {
    this.setAirSpeed(this.settings.airspeed as number);
  }
  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "airspeed"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));
    wrapper.append(this.createImageBox("speed_mechanics.svg"));

    let divSpeed: HTMLDivElement = document.createElement("div");
    divSpeed.classList.add(...["speed", "box"]);
    divSpeed.append(this.createImageBox("fi_needle.svg"));
    wrapper.append(divSpeed);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    wrapper.append(divMechanic);

    return wrapper;
  }

  public setAirSpeed(speed: number) {
    if (this.item === null) {
      return;
    }
    if (speed > this.constants.airspeed_bound_h) {
      speed = this.constants.airspeed_bound_h;
    } else if (speed < this.constants.airspeed_bound_l) {
      speed = this.constants.airspeed_bound_l;
    }
    speed = 90 + speed * 2;

    let divSpeed: HTMLElement | null = this.item.querySelector(
      ".instrument.airspeed .speed"
    );
    if (divSpeed !== null) {
      divSpeed.style.transform = `rotate(${speed}deg)`;
    }
  }
}
