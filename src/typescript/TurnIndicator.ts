import FlightIndicator from "./FlightIndicator";

export default class TurnIndicator extends FlightIndicator {
  protected init(): void {
    this.setTurn(this.oOptopns.turn as number);
  }
  protected draw(): HTMLElement {
    let divWrapper: HTMLDivElement = document.createElement("div");
    divWrapper.classList.add(...["instrument", "turner"]);
    divWrapper.append(this.createImageBox("fi_box.svg", "background"));
    divWrapper.append(this.createImageBox("turn_coordinator.svg"));

    let divTurn: HTMLDivElement = document.createElement("div");
    divTurn.classList.add(...["turn", "box"]);
    divTurn.append(this.createImageBox("fi_tc_airplane.svg"));
    divWrapper.append(divTurn);

    let divMechanic: HTMLDivElement = document.createElement("div");
    divMechanic.classList.add(...["mechanics", "box"]);
    divMechanic.append(this.createImageBox("fi_circle.svg"));

    divWrapper.append(divMechanic);

    return divWrapper;
  }
  public setTurn(nTurn: number): void {
    if (this.oItem === null) {
      return;
    }
    let turner: HTMLElement | null = this.oItem.querySelector(
      ".instrument.turner .turn"
    );
    if (turner !== null) {
      turner.style.transform = `rotate(${nTurn}deg)`;
    }
  }
}
