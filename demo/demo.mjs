import { entropy } from "./dist/esm/index.js"

const inputField = document.querySelector("#input");
const strengthIndicator = document.querySelector("#strength-indicator");
const strengthText = document.querySelector("#strength-text");

const colors = [
    [255, 140, 0],  //orange
    [255, 0, 0],    //red
    [191, 64, 191], //purple
    [30, 144, 255], //blue
    [124, 252, 0]     //green
];


const interpolate = (from, to, step, steps) => {
    let color = [...from];
  
  for (let i = 0; i < 3; i++) {
  	const a = from[i];
    const b = to[i];
  	color[i] = Math.round(a +  ((b - a) / steps * step));
  }
    
  return color;
}


const color = (value, max, colors) => {
    value = Math.max(0, Math.min(max, value));

    const ranges = colors.length - 1;
    const range = max / ranges;
    const from = Math.floor(value / range)
    const to = Math.min(ranges, from + 1)

    return interpolate(colors[from], colors[to], value % range, range);
}

const strengthInfo = (value) => {
    if (value == 0) return "Start typing to calculate entropy";
    const snark = [
        [25, "extremely weak."],
        [47, "'swordfish'...?"],
        [60, "guessed 60 (nano) seconds."],
        [80, "considered strong in 1999."],
        [85, "average?"],
        [90, "better..."],
        [100, "even better..."],
        [110, "getting close..."],
        [120, "above 120 bits is likely a strong password."],
        [130, "overachiever."]
    ]

    const [, comment] = snark.find(([n]) => value < n) || snark[snark.length-1]

    return `String entropy: ${value}, ${comment}`
}

inputField.addEventListener("keyup", (evt) => {
    const bits = entropy(inputField.value);
    strengthIndicator.style.width = `${Math.min(100, bits/128*100)}%`;
    strengthIndicator.style.backgroundColor = `rgb(${color(bits, 128, colors).join(",")})`;
    strengthText.innerText = strengthInfo(bits);
});