import FlightIndicator from "./FlightIndicator";
import FlightIndicatorSettings from "./FlightIndicatorSettings";
import IFlightIndicator from "./IFlightIndicator";

export default class AltimeterIndicator extends FlightIndicator {
  protected init(): void {
    this.setAltitude(this.settings.altitude as number);
    this.setPressure(this.settings.pressure as number);
  }

  public setPressure(pressure: number): void {
    if (this.item === null) {
      return;
    }

    pressure = 2 * pressure - 1980;
    let divPressure: HTMLElement | null = this.item.querySelector(
      ".instrument.altimeter .pressure"
    );
    if (divPressure !== null) {
      divPressure.style.transform = `rotate(${pressure}deg)`;
    }
  }

  public setAltitude(altitude: number): void {
    if (this.item === null) {
      return;
    }

    let needle = 90 + ((altitude % 1000) * 360) / 1000;
    let needleSmall = (altitude / 10000) * 360;
    let divNeedle: HTMLElement | null = this.item.querySelector(
      ".instrument.altimeter .needle"
    );
    if (divNeedle !== null) {
      divNeedle.style.transform = `rotate(${needle}deg)`;
    }
    let divNeedleSmall: HTMLElement | null = this.item.querySelector(
      ".instrument.altimeter .needleSmall"
    );
    if (divNeedleSmall !== null) {
      divNeedleSmall.style.transform = `rotate(${needleSmall}deg)`;
    }
  }

  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "altimeter"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divPressure: HTMLElement = document.createElement("div");
    divPressure.classList.add(...["pressure", "box"]);
    divPressure.append(this.createImageBox("altitude_pressure.svg"));
    wrapper.append(divPressure);

    wrapper.append(this.createImageBox("altitude_ticks.svg"));

    let divNeedleSmall: HTMLElement = document.createElement("div");
    divNeedleSmall.classList.add(...["needleSmall", "box"]);
    divNeedleSmall.append(this.createImageBox("fi_needle_small.svg"));
    wrapper.append(divNeedleSmall);

    let divNeedle: HTMLElement = document.createElement("div");
    divNeedle.classList.add(...["needle", "box"]);
    divNeedle.append(this.createImageBox("fi_needle.svg"));
    wrapper.append(divNeedle);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));
    wrapper.append(divMechanic);

    return wrapper;
  }
}
