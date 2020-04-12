import IFlightIndicator from "./IFlightIndicator";
import FlightIndicatorSettings from "./FlightIndicatorSettings";

export default class FlightIndicator {
  protected init(): void {
    throw new Error("Method not implemented.");
  }

  protected draw(): HTMLElement {
    throw new Error("Method not implemented.");
  }

  protected settings: IFlightIndicator = new FlightIndicatorSettings();
  protected item: HTMLElement | null = null;
  protected constants = {
    pitch_bound: 30,
    vario_bound: 1.95,
    airspeed_bound_l: 0,
    airspeed_bound_h: 160,
  };

  public constructor(
    private sSelector: string,
    options: IFlightIndicator = new FlightIndicatorSettings()
  ) {
    this.assing(options);
    this.item = this.getPalceholder();

    if (this.item === null) {
      return;
    }

    // case 'turn_coordinator':
    // 	$(this).html('<div class="instrument turn_coordinator"><img src="' + settings.img_directory + 'fi_box.svg" class="background box" alt="" /><img src="' + settings.img_directory + 'turn_coordinator.svg" class="box" alt="" /><div class="turn box"><img src="' + settings.img_directory + 'fi_tc_airplane.svg" class="box" alt="" /></div><div class="mechanics box"><img src="' + settings.img_directory + 'fi_circle.svg" class="box" alt="" /></div></div>');
    // 	_setTurn(settings.turn);
    // break;

    this.init();
    this.item.innerHTML = "";
    this.item.append(this.draw());
    this.setSize();
  }

  private setSize(): void {
    if (this.item === null) {
      return;
    }
    let instrument: HTMLElement | null = this.item.querySelector(".instrument");
    if (instrument !== null) {
      instrument.style.height = `${this.settings.size}px`;
      instrument.style.width = `${this.settings.size}px`;

      let background: HTMLElement | null = instrument.querySelector(
        ".box.background"
      );
      if (background !== null) {
        background.style.display = this.settings.showBox ? "block" : "none";
      }
    }
  }

  private assing(o: IFlightIndicator): void {
    let that = <any>this.settings;
    for (let key in o) {
      if (o.hasOwnProperty(key)) {
        let value = (<any>o)[key];
        if (typeof value !== "undefined" && typeof that[key] !== "undefined")
          that[key] = value;
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
    img.src = `${this.settings.img_directory}${sSrcFilename}`;
    return img;
  }
}
