import IFlightIndicator from "./IFlightIndicator";
import FlightIndicatorSettings from "./FlightIndicatorSettings";

export default class FlightIndicator {
  protected init(): void {
    throw new Error("Method not implemented.");
  }

  protected draw(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  protected oOptopns: IFlightIndicator = new FlightIndicatorSettings();
  protected oItem: HTMLElement | null = null;
  protected oConstants = {
    pitchBound: 30,
    varioBound: 1.95,
    airspeedBoundL: 0,
    airspeedBoundH: 160,
  };

  public constructor(
    private sSelector: string,
    oOptions: IFlightIndicator = new FlightIndicatorSettings()
  ) {
    this.assing(oOptions);
    this.oItem = this.getPalceholder();

    if (this.oItem === null) {
      return;
    }

    this.init();
    this.oItem.innerHTML = "";
    this.oItem.append(this.draw());
    this.setSize();
  }

  private setSize(): void {
    if (this.oItem === null) {
      return;
    }
    let instrument: HTMLElement | null = this.oItem.querySelector(
      ".instrument"
    );
    if (instrument !== null) {
      instrument.style.height = `${this.oOptopns.size}px`;
      instrument.style.width = `${this.oOptopns.size}px`;

      let background: HTMLElement | null = instrument.querySelector(
        ".box.background"
      );
      if (background !== null) {
        background.style.display = this.oOptopns.showBox ? "block" : "none";
      }
    }
  }

  private assing(oObj: IFlightIndicator): void {
    let that = <any>this.oOptopns;
    for (let sKey in oObj) {
      if (oObj.hasOwnProperty(sKey)) {
        let mValue = (<any>oObj)[sKey];
        if (typeof mValue !== "undefined" && typeof that[sKey] !== "undefined")
          that[sKey] = mValue;
      }
    }
  }

  private getPalceholder(): HTMLElement | null {
    return document.querySelector(this.sSelector);
  }

  protected createImageBox(
    sSrcFilename: string,
    sCssClass: string = ""
  ): HTMLImageElement {
    let img: HTMLImageElement = new Image();
    if (sCssClass) {
      img.classList.add(sCssClass);
    }
    img.classList.add("box");
    img.src = `${this.oOptopns.imgDirectory}${sSrcFilename}`;
    return img;
  }
}
