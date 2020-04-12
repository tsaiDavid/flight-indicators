import FlightIndicator from "./FlightIndicator";

export default class AttitudeIndicator extends FlightIndicator {
  protected init(): void {
    this.setRoll(this.oOptopns.roll as number);
    this.setPitch(this.oOptopns.pitch as number);
  }

  public setRoll(nRoll: number): void {
    if (this.oItem === null) {
      return;
    }

    let attitude: HTMLElement | null = this.oItem.querySelector(
      ".instrument.attitude .roll"
    );
    if (attitude !== null) {
      attitude.style.transform = `rotate(${nRoll}deg)`;
    }
  }

  public setPitch(nPitch: number): void {
    if (this.oItem === null) {
      return;
    }
    if (nPitch > this.oConstants.pitchBound) {
      nPitch = this.oConstants.pitchBound;
    } else if (nPitch < -this.oConstants.pitchBound) {
      nPitch = -this.oConstants.pitchBound;
    }

    let attitude: HTMLElement | null = this.oItem.querySelector(
      ".instrument.attitude .roll .pitch"
    );
    if (attitude !== null) {
      attitude.style.top = nPitch * 0.7 + "%";
    }
  }

  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "attitude"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divRoll: HTMLDivElement = document.createElement("div");
    divRoll.classList.add(...["roll", "box"]);
    divRoll.append(this.createImageBox("horizon_back.svg"));

    let divPitch: HTMLDivElement = document.createElement("div");
    divPitch.classList.add(...["pitch", "box"]);
    divPitch.append(this.createImageBox("horizon_ball.svg"));
    divRoll.append(divPitch);
    divRoll.append(this.createImageBox("horizon_circle.svg"));
    divWrapper.append(divRoll);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("horizon_mechanics.svg"));
    divMechanic.append(this.createImageBox("fi_circle.svg"));
    divWrapper.append(divMechanic);

    return divWrapper;
  }
}
