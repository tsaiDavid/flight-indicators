import FlightIndicator from "./FlightIndicator";

export default class CompassIndicator extends FlightIndicator {
  public setDirection(nDirection: number): void {
    if (this.oItem === null) {
      return;
    }

    let direction: HTMLElement | null = this.oItem.querySelector(
      ".instrument.compass .direction"
    );
    if (direction !== null) {
      direction.style.transform = `rotate(${-nDirection}deg)`;
    }
  }

  protected init(): void {
    this.setDirection(this.oOptopns.compass as number);
  }

  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "compass"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divCompass: HTMLDivElement = document.createElement("div");
    divCompass.classList.add(...["direction", "box"]);
    divCompass.append(this.createImageBox("heading_yaw.svg"));
    divWrapper.append(divCompass);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("heading_mechanics.svg"));
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    divWrapper.append(divMechanic);

    return divWrapper;
  }
}
