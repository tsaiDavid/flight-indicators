import FlightIndicator from "./FlightIndicator";

export default class VerticalSpeedIndicator extends FlightIndicator {
  protected init(): void {
    this.setSpeed(this.settings.vario as number);
  }
  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "vspeed"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));
    wrapper.append(this.createImageBox("vertical_mechanics.svg"));

    let divVspeed: HTMLDivElement = document.createElement("div");
    divVspeed.classList.add(...["vspeed", "box"]);
    divVspeed.append(this.createImageBox("fi_needle.svg"));
    wrapper.append(divVspeed);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    wrapper.append(divMechanic);

    return wrapper;
  }
  setSpeed(nSpeed: number) {
    if (this.item === null) {
      return;
    }
    if (nSpeed > this.constants.vario_bound) {
      nSpeed = this.constants.vario_bound;
    } else if (nSpeed < -this.constants.vario_bound) {
      nSpeed = -this.constants.vario_bound;
    }
    nSpeed = nSpeed * 90;
    let vspeed: HTMLElement | null = this.item.querySelector(
      ".instrument.vspeed .vspeed"
    );
    if (vspeed !== null) {
      vspeed.style.transform = `rotate(${nSpeed}deg)`;
    }
  }
}
