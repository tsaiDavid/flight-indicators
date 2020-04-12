import FlightIndicator from "./FlightIndicator";

export default class TurnIndicator extends FlightIndicator {
  protected init(): void {
    this.setTurn(this.settings.turn as number);
  }
  protected draw(): HTMLElement {
    let wrapper: HTMLDivElement = document.createElement("div");
    wrapper.classList.add(...["instrument", "turner"]);
    wrapper.append(this.createImageBox("fi_box.svg", "background"));
    wrapper.append(this.createImageBox("turn_coordinator.svg"));

    let divTurn: HTMLDivElement = document.createElement("div");
    divTurn.classList.add(...["turn", "box"]);
    divTurn.append(this.createImageBox("fi_tc_airplane.svg"));
    wrapper.append(divTurn);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    wrapper.append(divMechanic);

    return wrapper;
  }
  public setTurn(turn: number): void {
    if (this.item === null) {
      return;
    }
    let turner: HTMLElement | null = this.item.querySelector(
      ".instrument.turner .turn"
    );
    if (turner !== null) {
      turner.style.transform = `rotate(${turn}deg)`;
    }
  }
}
