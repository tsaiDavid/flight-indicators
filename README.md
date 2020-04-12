# Flight Indicators

> Image source is [here](https://github.com/sebmatton/jQuery-Flight-Indicators/tree/master/img) from [Matton Sébastien](https://github.com/sebmatton)

Code created by Aleksey Komov using TypeScript and SCSS.

## Usage

1. Import CSS styles into `<head>` tag

```html
<link href="flight-indicators.css" rel="stylesheet" />
```

1. Import JS file before `</body>` tag

```html
<script type="text/javascript" src="flight-indicators.js"></script>
```

1. Use next tags to insert indicators

```html
<span id="attitude"></span>
<span id="altimeter"></span>
<span id="compass"></span>
<span id="airspeed"></span>
<span id="vspeed"></span>
<span id="turner"></span>
```

1. Create widgets via JavaScript

```js
let oAttitude = new AttitudeIndicator("#attitude", {
  size: 300,
  showBox: false,
});
let oAltimeter = new AltimeterIndicator("#altimeter", {
  size: 300,
  showBox: true,
});
let oCompass = new CompassIndicator("#compass", {
  size: 300,
  showBox: false,
});
let oAirspeed = new AirSpeedIndicator("#airspeed", {
  size: 300,
  showBox: false,
});
let oVspeed = new VerticalSpeedIndicator("#vspeed", {
  size: 300,
  showBox: false,
});
let oTurner = new TurnIndicator("#turner", {
  size: 300,
  showBox: false,
});
```

## Options && Methods

### Options

| Parameter    | Type    | Description            |
| ------------ | ------- | ---------------------- |
| size         | Number  | Widget size            |
| showBox      | Boolean | Show box around widget |
| imgDirectory | String  | Path to widget images  |

### Methods

> #### AttitudeIndicator

| Method   | Parameter types | Description       |
| -------- | --------------- | ----------------- |
| setRoll  | Number          | Set `Roll` angle  |
| setPitch | Number          | Set `Pitch` angle |

> #### AltimeterIndicator

| Method      | Parameter types | Description    |
| ----------- | --------------- | -------------- |
| setPressure | Number          | Set `Pressure` |
| setAltitude | Number          | Set `Altitude` |

> #### AirSpeedIndicator

| Method      | Parameter types | Description     |
| ----------- | --------------- | --------------- |
| setAirSpeed | Number          | Set `Air speed` |

> #### CompassIndicator

| Method       | Parameter types | Description     |
| ------------ | --------------- | --------------- |
| setDirection | Number          | Set `Direction` |

> #### TurnIndicator

| Method  | Parameter types | Description         |
| ------- | --------------- | ------------------- |
| setTurn | Number          | Set `Turn` position |

> #### VerticalSpeedIndicator

| Method   | Parameter types | Description          |
| -------- | --------------- | -------------------- |
| setSpeed | Number          | Set `Vertical speed` |

## Demo function

```js
// Update at 20Hz
var nIncrement = 0;
setInterval(() => {
  // Attitude update
  oAttitude.setRoll(30 * Math.sin(nIncrement / 10));
  oAttitude.setPitch(50 * Math.sin(nIncrement / 20));

  // Altimeter update
  oAltimeter.setAltitude(10 * nIncrement);
  oAltimeter.setPressure(1000 + 3 * Math.sin(nIncrement / 50));

  // Compass update
  oCompass.setDirection(nIncrement);

  // Air speed update
  oAirspeed.setAirSpeed(80 + 80 * Math.sin(nIncrement / 10));

  // Vertical speed update
  oVspeed.setSpeed(2 * Math.sin(nIncrement / 10));

  // Turner update
  oTurner.setTurn(30 * Math.sin(nIncrement / 10));

  nIncrement++;
}, 50);
```
