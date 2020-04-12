import FlightIndicator from "./FlightIndicator";

export default class AltimeterIndicator extends FlightIndicator {
  protected init(): void {
    this.setAltitude(this.oOptopns.altitude as number);
    this.setPressure(this.oOptopns.pressure as number);
  }

  public setPressure(nPressure: number): void {
    if (this.oItem === null) {
      return;
    }

    nPressure = 2 * nPressure - 1980;
    let divPressure: HTMLElement | null = this.oItem.querySelector(
      ".instrument.altimeter .pressure"
    );
    if (divPressure !== null) {
      divPressure.style.transform = `rotate(${nPressure}deg)`;
    }
  }

  public setAltitude(nAltitude: number): void {
    if (this.oItem === null) {
      return;
    }

    let needle = 90 + ((nAltitude % 1000) * 360) / 1000;
    let needleSmall = (nAltitude / 10000) * 360;
    let divNeedle: HTMLElement | null = this.oItem.querySelector(
      ".instrument.altimeter .needle"
    );
    if (divNeedle !== null) {
      divNeedle.style.transform = `rotate(${needle}deg)`;
    }
    let divNeedleSmall: HTMLElement | null = this.oItem.querySelector(
      ".instrument.altimeter .needleSmall"
    );
    if (divNeedleSmall !== null) {
      divNeedleSmall.style.transform = `rotate(${needleSmall}deg)`;
    }
  }

  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "altimeter"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divPressure: HTMLElement = document.createElement("div");
    divPressure.classList.add(...["pressure", "box"]);
    divPressure.append(this.createImageBox("altitude_pressure.svg"));
    divWrapper.append(divPressure);

    divWrapper.append(this.createImageBox("altitude_ticks.svg"));

    let divNeedleSmall: HTMLElement = document.createElement("div");
    divNeedleSmall.classList.add(...["needleSmall", "box"]);
    divNeedleSmall.append(this.createImageBox("fi_needle_small.svg"));
    divWrapper.append(divNeedleSmall);

    let divNeedle: HTMLElement = document.createElement("div");
    divNeedle.classList.add(...["needle", "box"]);
    divNeedle.append(this.createImageBox("fi_needle.svg"));
    divWrapper.append(divNeedle);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));
    divWrapper.append(divMechanic);

    return divWrapper;
  }
}
