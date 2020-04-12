import FlightIndicator from "./FlightIndicator";

export default class VerticalSpeedIndicator extends FlightIndicator {
  protected init(): void {
    this.setSpeed(this.oOptopns.vspeed as number);
  }
  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "vspeed"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));
    divWrapper.append(this.createImageBox("vertical_mechanics.svg"));

    let divVspeed: HTMLDivElement = document.createElement("div");
    divVspeed.classList.add(...["vspeed", "box"]);
    divVspeed.append(this.createImageBox("fi_needle.svg"));
    divWrapper.append(divVspeed);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    divWrapper.append(divMechanic);

    return divWrapper;
  }
  setSpeed(nSpeed: number) {
    if (this.oItem === null) {
      return;
    }
    if (nSpeed > this.oConstants.varioBound) {
      nSpeed = this.oConstants.varioBound;
    } else if (nSpeed < -this.oConstants.varioBound) {
      nSpeed = -this.oConstants.varioBound;
    }
    nSpeed = nSpeed * 90;
    let vspeed: HTMLElement | null = this.oItem.querySelector(
      ".instrument.vspeed .vspeed"
    );
    if (vspeed !== null) {
      vspeed.style.transform = `rotate(${nSpeed}deg)`;
    }
  }
}
