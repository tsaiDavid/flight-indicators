import FlightIndicator from "./FlightIndicator";
import IFlightIndicator from "./IFlightIndicator";
import FlightIndicatorSettings from "./FlightIndicatorSettings";

export default class CompassIndicator extends FlightIndicator {
  public setDirection(heading: number): void {
    if (this.item === null) {
      return;
    }

    let direction: HTMLElement | null = this.item.querySelector(
      ".instrument.compass .direction"
    );
    if (direction !== null) {
      direction.style.transform = `rotate(${-heading}deg)`;
    }
  }

  protected init(): void {
    this.setDirection(this.settings.heading as number);
  }

  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "compass"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divCompass: HTMLDivElement = document.createElement("div");
    divCompass.classList.add(...["direction", "box"]);
    divCompass.append(this.createImageBox("heading_yaw.svg"));
    wrapper.append(divCompass);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("heading_mechanics.svg"));
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    wrapper.append(divMechanic);

    return wrapper;
  }
}
