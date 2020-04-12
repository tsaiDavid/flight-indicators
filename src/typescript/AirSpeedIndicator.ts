import FlightIndicator from "./FlightIndicator";

export default class AirSpeedIndicator extends FlightIndicator {
  protected init(): void {
    this.setAirSpeed(this.oOptopns.airspeed as number);
  }
  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "airspeed"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));
    divWrapper.append(this.createImageBox("speed_mechanics.svg"));

    let divSpeed: HTMLDivElement = document.createElement("div");
    divSpeed.classList.add(...["speed", "box"]);
    divSpeed.append(this.createImageBox("fi_needle.svg"));
    divWrapper.append(divSpeed);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    divWrapper.append(divMechanic);

    return divWrapper;
  }

  public setAirSpeed(nSpeed: number) {
    if (this.oItem === null) {
      return;
    }
    if (nSpeed > this.oConstants.airspeedBoundH) {
      nSpeed = this.oConstants.airspeedBoundH;
    } else if (nSpeed < this.oConstants.airspeedBoundL) {
      nSpeed = this.oConstants.airspeedBoundL;
    }
    nSpeed = 90 + nSpeed * 2;

    let divSpeed: HTMLElement | null = this.oItem.querySelector(
      ".instrument.airspeed .speed"
    );
    if (divSpeed !== null) {
      divSpeed.style.transform = `rotate(${nSpeed}deg)`;
    }
  }
}
