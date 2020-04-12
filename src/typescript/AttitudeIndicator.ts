import FlightIndicator from "./FlightIndicator";
import IFlightIndicator from "./IFlightIndicator";
import FlightIndicatorSettings from "./FlightIndicatorSettings";

export default class AttitudeIndicator extends FlightIndicator {
  protected init(): void {
    this.setRoll(this.settings.roll as number);
    this.setPitch(this.settings.pitch as number);
  }

  public setRoll(roll: number): void {
    if (this.item === null) {
      return;
    }

    let attitude: HTMLElement | null = this.item.querySelector(
      ".instrument.attitude .roll"
    );
    if (attitude !== null) {
      attitude.style.transform = `rotate(${roll}deg)`;
    }
  }

  public setPitch(pitch: number): void {
    if (this.item === null) {
      return;
    }
    if (pitch > this.constants.pitch_bound) {
      pitch = this.constants.pitch_bound;
    } else if (pitch < -this.constants.pitch_bound) {
      pitch = -this.constants.pitch_bound;
    }

    let attitude: HTMLElement | null = this.item.querySelector(
      ".instrument.attitude .roll .pitch"
    );
    if (attitude !== null) {
      attitude.style.top = pitch * 0.7 + "%";
    }
  }

  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "attitude"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));

    let divRoll: HTMLDivElement = document.createElement("div");
    divRoll.classList.add(...["roll", "box"]);
    divRoll.append(this.createImageBox("horizon_back.svg"));

    let divPitch: HTMLDivElement = document.createElement("div");
    divPitch.classList.add(...["pitch", "box"]);
    divPitch.append(this.createImageBox("horizon_ball.svg"));
    divRoll.append(divPitch);
    divRoll.append(this.createImageBox("horizon_circle.svg"));
    wrapper.append(divRoll);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("horizon_mechanics.svg"));
    divMechanic.append(this.createImageBox("fi_circle.svg"));
    wrapper.append(divMechanic);

    return wrapper;
  }
}
