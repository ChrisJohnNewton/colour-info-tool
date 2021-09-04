/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    Declare the htmlColours array. Each element is an array
    containing a HTML colour name and its RGB values.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
const htmlColours = [
	["IndianRed", "205", "92", "92"],
	["LightCoral", "240", "128", "128"],
	["Salmon", "250", "128", "114"],
	["DarkSalmon", "233", "150", "122"],
	["LightSalmon", "255", "160", "122"],
	["Crimson", "220", "20", "60"],
	["Red", "255", "0", "0"],
	["FireBrick", "178", "34", "34"],
	["DarkRed", "139", "0", "0"],
	["Pink", "255", "192", "203"],
	["LightPink", "255", "182", "193"],
	["HotPink", "255", "105", "180"],
	["DeepPink", "255", "20", "147"],
	["MediumVioletRed", "199", "21", "133"],
	["PaleVioletRed", "219", "112", "147"],
	["LightSalmon", "255", "160", "122"],
	["Coral", "255", "127", "80"],
	["Tomato", "255", "99", "71"],
	["OrangeRed", "255", "69", "0"],
	["DarkOrange", "255", "140", "0"],
	["Orange", "255", "165", "0"],
	["Gold", "255", "215", "0"],
	["Yellow", "255", "255", "0"],
	["LightYellow", "255", "255", "224"],
	["LemonChiffon", "255", "250", "205"],
	["LightGoldenrodYellow", "250", "250", "210"],
	["PapayaWhip", "255", "239", "213"],
	["Moccasin", "255", "228", "181"],
	["PeachPuff", "255", "218", "185"],
	["PaleGoldenrod", "238", "232", "170"],
	["Khaki", "240", "230", "140"],
	["DarkKhaki", "189", "183", "107"],
	["Lavender", "230", "230", "250"],
	["Thistle", "216", "191", "216"],
	["Plum", "221", "160", "221"],
	["Violet", "238", "130", "238"],
	["Orchid", "218", "112", "214"],
	["Fuchsia", "255", "0", "255"],
	["Magenta", "255", "0", "255"],
	["MediumOrchid", "186", "85", "211"],
	["MediumPurple", "147", "112", "219"],
	["RebeccaPurple", "102", "51", "153"],
	["BlueViolet", "138", "43", "226"],
	["DarkViolet", "148", "0", "211"],
	["DarkOrchid", "153", "50", "204"],
	["DarkMagenta", "139", "0", "139"],
	["Purple", "128", "0", "128"],
	["Indigo", "75", "0", "130"],
	["SlateBlue", "106", "90", "205"],
	["DarkSlateBlue", "72", "61", "139"],
	["MediumSlateBlue", "123", "104", "238"],
	["GreenYellow", "173", "255", "47"],
	["Chartreuse", "127", "255", "0"],
	["LawnGreen", "124", "252", "0"],
	["Lime", "0", "255", "0"],
	["LimeGreen", "50", "205", "50"],
	["PaleGreen", "152", "251", "152"],
	["LightGreen", "144", "238", "144"],
	["MediumSpringGreen", "0", "250", "154"],
	["SpringGreen", "0", "255", "127"],
	["MediumSeaGreen", "60", "179", "113"],
	["SeaGreen", "46", "139", "87"],
	["ForestGreen", "34", "139", "34"],
	["Green", "0", "128", "0"],
	["DarkGreen", "0", "100", "0"],
	["YellowGreen", "154", "205", "50"],
	["OliveDrab", "107", "142", "35"],
	["Olive", "128", "128", "0"],
	["DarkOliveGreen", "85", "107", "47"],
	["MediumAquamarine", "102", "205", "170"],
	["DarkSeaGreen", "143", "188", "139"],
	["LightSeaGreen", "32", "178", "170"],
	["DarkCyan", "0", "139", "139"],
	["Teal", "0", "128", "128"],
	["Aqua", "0", "255", "255"],
	["Cyan", "0", "255", "255"],
	["LightCyan", "224", "255", "255"],
	["PaleTurquoise", "175", "238", "238"],
	["Aquamarine", "127", "255", "212"],
	["Turquoise", "64", "224", "208"],
	["MediumTurquoise", "72", "209", "204"],
	["DarkTurquoise", "0", "206", "209"],
	["CadetBlue", "95", "158", "160"],
	["SteelBlue", "70", "130", "180"],
	["LightSteelBlue", "176", "196", "222"],
	["PowderBlue", "176", "224", "230"],
	["LightBlue", "173", "216", "230"],
	["SkyBlue", "135", "206", "235"],
	["LightSkyBlue", "135", "206", "250"],
	["DeepSkyBlue", "0", "191", "255"],
	["DodgerBlue", "30", "144", "255"],
	["CornflowerBlue", "100", "149", "237"],
	["MediumSlateBlue", "123", "104", "238"],
	["RoyalBlue", "65", "105", "225"],
	["Blue", "0", "0", "255"],
	["MediumBlue", "0", "0", "205"],
	["DarkBlue", "0", "0", "139"],
	["Navy", "0", "0", "128"],
	["MidnightBlue", "25", "25", "112"],
	["Cornsilk", "255", "248", "220"],
	["BlanchedAlmond", "255", "235", "205"],
	["Bisque", "255", "228", "196"],
	["NavajoWhite", "255", "222", "173"],
	["Wheat", "245", "222", "179"],
	["BurlyWood", "222", "184", "135"],
	["Tan", "210", "180", "140"],
	["RosyBrown", "188", "143", "143"],
	["SandyBrown", "244", "164", "96"],
	["Goldenrod", "218", "165", "32"],
	["DarkGoldenrod", "184", "134", "11"],
	["Peru", "205", "133", "63"],
	["Chocolate", "210", "105", "30"],
	["SaddleBrown", "139", "69", "19"],
	["Sienna", "160", "82", "45"],
	["Brown", "165", "42", "42"],
	["Maroon", "128", "0", "0"],
	["White", "255", "255", "255"],
	["Snow", "255", "250", "250"],
	["HoneyDew", "240", "255", "240"],
	["MintCream", "245", "255", "250"],
	["Azure", "240", "255", "255"],
	["AliceBlue", "240", "248", "255"],
	["GhostWhite", "248", "248", "255"],
	["WhiteSmoke", "245", "245", "245"],
	["SeaShell", "255", "245", "238"],
	["Beige", "245", "245", "220"],
	["OldLace", "253", "245", "230"],
	["FloralWhite", "255", "250", "240"],
	["Ivory", "255", "255", "240"],
	["AntiqueWhite", "250", "235", "215"],
	["Linen", "250", "240", "230"],
	["LavenderBlush", "255", "240", "245"],
	["MistyRose", "255", "228", "225"],
	["Gainsboro", "220", "220", "220"],
	["LightGray", "211", "211", "211"],
	["Silver", "192", "192", "192"],
	["DarkGray", "169", "169", "169"],
	["Gray", "128", "128", "128"],
	["DimGray", "105", "105", "105"],
	["LightSlateGray", "119", "136", "153"],
	["SlateGray", "112", "128", "144"],
	["DarkSlateGray", "47", "79", "79"],
	["Black", "0", "0", "0"]
];



/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    GET REFERENCES TO ALL THE NECESSARY ELEMENTS.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/
const colourInfo = document.getElementById('colour-info-tool'),
colourCodeLink = document.getElementById('colour-code-link'),
colourCodeLinkSVG = document.querySelector('a[id="colour-code-link"] > svg > path'),
colourHeader = document.getElementById('colour-header'),
colourLegend = document.getElementById('colour-legend'),
colourInput = document.getElementById('colour-input'),
colourChooser = document.getElementById('colour-chooser'),
colourOutput = document.getElementById('colour-output');


/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    ADD EVENT LISTENERS TO THE NECESSARY ELEMENTS.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

/*
  The colourChooser is an input with the “type” attribute set to "color".
  It enables the user to select a colour as a hexadecimal.
*/
colourChooser.addEventListener('input', ()=>{

  hex = colourChooser.value.replace(/^#/, "");

  outputColourInfo(hex, false, false);

});

/*
  The colourInput is an input where the user can type a colourname, hex
  or RGB value.
*/
colourInput.addEventListener('input', ()=>{

  // If the input matches a hexadecimal.
  if (colourInput.value.match(/^#?([A-Fa-f0-9]{3}){1,2}$/) !== null) {

      // Parse the input as if it was a hex code, removing the initial hashtag if it's there to improve flexibility.
      hex = colourInput.value
                        .replace(/^#/, "");

      // If a shorthand hex code was inputted. If so, convert to long form.
      if (hex.length === 3)
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`

      outputColourInfo(hex, false, false);

  // If the input matches RGB.
  } else if (colourInput.value.match(/^(rgb)?a?\(?(\s*([\d.]+\s*%?)\s*,?){4}\)?$/) !== null) {

    rgb = separateRGB(colourInput.value);

    if (rgb.length == 3) outputColourInfo(false, rgb, false);

  // If the input matches a colour name.
  } else if (colourInput.value.match(/\d/g) === null) {

      colourName = colourInput.value.toLowerCase().replace(/ /g, "")

      htmlColours.forEach(colour => {
        if (colour[0].toLowerCase() === colourName) {
          colourName = colour[0],
          rgb = [colour[1], colour[2], colour[3]],
          hex = rgbToHex(...rgb);

          outputColourInfo(hex, rgb, colourName)
        }
      });
  }
});



/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    THE MAIN FUNCTION.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

/*
    Outputs all the colour info based on the user's input.
*/
function outputColourInfo(hex, rgb, name) {

  // Convert the hex, RGB, or colour name into a variety of colour spaces.
  if (!rgb) rgb = hexToRGB(hex);
  if (!hex) hex = rgbToHex(...rgb);
  if (!name) name = closestColour(...rgb);
  hsl = rgbToHSL(...rgb),
  hsv = hslToHSV(...hsl),
  cmyk = rgbToCMYK(...rgb),
  decimal = rgbToDecimal(...rgb);

  // Find colours that might complement the original colour.
  complementaryColoursArray = complementaryColours(...rgb),
  // Use a Set to remove duplicates.
  complementaryColoursArray = [...new Set([...complementaryColoursArray])];

  // Style and prepare the HTML output.
  colourOutput.style.height = null,
  colourGrid = "";
  complementaryColoursArray.forEach(complementaryColour => {
    // Check the complementary colour is not the original colour.
    if (complementaryColour !== hex ) colourGrid += `<div style="background-color:#${complementaryColour};color:${setFontColour(...hexToRGB(complementaryColour))}">#${complementaryColour}</div>`
  });
  colourOutput.innerHTML = `<div class="bb wfc g" style="width:280px;grid-template-columns:auto 1fr;grid-template-rows:repeat(6,22px)27px auto;grid-column-gap:20px;grid-row-gap:3px">
                              <span class="l1">HTML Name*:</span> ${name}
                              <span class="l1">HEX:</span> #${hex}
                              <span class="l1">RGB:</span> ${rgb[0]}, ${rgb[1]}, ${rgb[2]}
                              <span class="l1">HSL:</span> ${hsl[0]}°, ${hsl[1]}%, ${hsl[2]}%
                              <span class="l1">HSV:</span> ${hsv[0]}°, ${hsv[1]}%, ${hsv[2]}%
                              <span class="l1">CMYK:</span> ${cmyk[0]}%, ${cmyk[1]}%, ${cmyk[2]}%, ${cmyk[3]}%
                              <span class="l1">Decimal:</span> ${decimal}
                              <span class="l1" style="grid-column-end:span 2">Complementary Colours:</span>
                              <div class="g tac" style="grid-template-columns:repeat(auto-fit,minmax(85px,1fr));grid-column-end:span 2;grid-gap:1px">
                              ${colourGrid}
                              </div>
                              <span style="grid-column-end:span 2;margin-top:15px" class="f13">* The closest HTML colour name based on its RGB values.</span>
                            </div>`;

  // Style surrounding HTML elements to improve readability.
  improveReadability(...rgb);
}



/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    GENERAL HELPER FUNCTIONS.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

/*
    Styles the surrounding HTML elements to improve readability.
*/
function improveReadability(r, g, b) {

  // Sets the background to the selected colour.
  colourInfo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // Finds the best contrast colour to improve readability (white or black).
  bestContrastColour = contrastColour(r, g, b);

  // If the background is white. If so, set to default style.
  if (window.getComputedStyle(colourInfo).backgroundColor === "rgb(255, 255, 255)") {
    colourCodeLink.style.color = "var(--secondaryColour)",
    colourCodeLink.style.boxShadow = "inset 0.2em 0.2em 0.2em 0 #fff, inset 2px -2px 2px 0 var(--secondaryColour)",
    colourCodeLinkSVG.setAttribute("fill", "var(--secondaryColour)"),
    colourHeader.style.textDecorationColor = "var(--mainColour)";
  // Otherwise, set to the best contrast colour.
  } else {
    colourCodeLink.style.color = bestContrastColour,
    colourCodeLink.style.boxShadow = `inset 0.2em 0.2em 0.2em 0 #fff, inset 2px -2px 2px 0 ${bestContrastColour}`,
    colourCodeLinkSVG.setAttribute("fill", bestContrastColour),
    colourHeader.style.textDecorationColor = bestContrastColour;
  }
    colourHeader.style.color = bestContrastColour,
    colourLegend.style.color = bestContrastColour;
}

/*
    Returns the name of the closest HTML colour inside htmlColours
    based on the provided RGB values.
*/
function closestColour(r, g, b) {
  
  // Initialize lowestDiff to the highest possible difference.
  lowestDiff = 765;

  // Iterate over htmlColours in search of the closest colour.
  htmlColours.some(colour => {
    rDiff = Math.abs(r - colour[1]),
    gDiff = Math.abs(g - colour[2]),
    bDiff = Math.abs(b - colour[3]),
    totalDiff = rDiff + gDiff + bDiff;

    // If the colour is a perfect match.
    if (totalDiff == 0) {
      closestColourName = colour[0];
      return closestColourName;
    }
    // If the colour is the closest match yet.
    else if (totalDiff < lowestDiff) {
      lowestDiff = totalDiff,
      closestColourName = colour[0];
    }

  });

  return closestColourName;
}

/*
    Find the colour that'll contrast best with the background colour
    to improve readability.
*/
function contrastColour(r1, g1, b1) {

  // Convert RGB values to YIQ values to obtain the perceived brightness of the colour.
  testColour = (r1*299 + g1*587 + b1*114) / 1000,
  white = (255*299 + 255*587 + 255*114) / 1000,
  black = (0*299 + 0*587 + 0*114) / 1000;

  // Calculate the difference between the testColour vs. white and black.
  whiteBrightness = Math.round(Math.abs(testColour - white)),
  blackBrightness = Math.round(Math.abs(testColour - black));

  // Check which colour has the greater difference and return that one.
  if (whiteBrightness < blackBrightness) return "rgb(0, 0, 0)"
  else return "rgb(255, 255, 255)";
}

/*
    Find colours that complement the user's selected colour.
*/
function complementaryColours(r, g, b) {

  // Reduce lightness by 30%.
  rgbl30m = shiftLightness(r, g, b, -30),
  // Increase lightness by 15%, 30%, and 45%.
  rgbl15 = shiftLightness(r, g, b, 15),
  rgbl30 = shiftLightness(r, g, b, 30),
  rgbl45 = shiftLightness(r, g, b, 45);

  // Shift hue by 90°, 120°, 180°, and 270°.
  rgbh90 = shiftHue(r, g, b, 90),
  rgbh120 = shiftHue(r, g, b, 120),
  rgbh180 = shiftHue(r, g, b, 180),
  rgbh270 = shiftHue(r, g, b, 270);

  // Find the opposite colour.
  rgbopp = [255 - r, 255 - g, 255 - b];

  return [ rgbToHex(...rgbl30m),
           rgbToHex(...rgbl15),
           rgbToHex(...rgbl30),
           rgbToHex(...rgbl45),
           rgbToHex(...rgbh90),
           rgbToHex(...rgbh120),
           rgbToHex(...rgbh180),
           rgbToHex(...rgbh270),
           rgbToHex(...rgbopp) ]
}

/*
    Helper function to shift the hue, used in the
    helper function complementaryColours().
*/
function shiftHue(r, g, b, number) {
  
  // Convert to HSL and shift H by number.
  hsl = rgbToHSL(r, g, b),
  hueShift = hsl[0] + number;
  
  // Ensure the new hue is between 0°-360° inclusive and convert back to RGB.
  if (hueShift > 360) hueShift -= 360;
  newRGB = hslToRGB(hueShift, hsl[1], hsl[2]);

  return newRGB;
}

/*
    Helper function to shift the lightness, used in the
    helper function complementaryColours().
*/
function shiftLightness(r, g, b, number) {
  
  // Convert to HSL and shift L by number.
  hsl = rgbToHSL(r, g, b),
  lightShift = hsl[2] + number;

  // Ensure the new lightness is between 0%-100% inclusive and convert back to RGB.
  if (lightShift > 100) lightShift -= 100;
  else if (lightShift < 0) lightShift += 100;
  newRGB = hslToRGB(hsl[0], hsl[1], lightShift);

  return newRGB;
}

/*
    Helper function used in the main function outputColourInfo()
    to set the colour of the font to black or white in hexadecimal.
*/
function setFontColour(r, g, b) {
  
  // Check the intensity of the colour and, using 186 as a threshold, output black or white.
  if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) return "#000"
  else return "#fff";
}

/*
    Receives an RGB string and uses regex to output it as an array.
*/
function separateRGB(rgb) {

  rgb = rgb.match(/([0-2]?\d?\d(?:\.\d?\d?)?)/g);

  // Round to ensure r, g, and b are whole numbers.
  r = Math.round(rgb[0]),
  g = Math.round(rgb[1]),
  b = Math.round(rgb[2]);

  // If rounded up to 256, round down to 255.
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  return [r, g, b]
}



/*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    CONVERSION HELPER FUNCTIONS.
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

function rgbToHex(r, g, b) {

  // Convert each RGB value to hex.
  rHex = Number(r).toString(16),
  gHex = Number(g).toString(16),
  bHex = Number(b).toString(16);

  // Ensure each hex value is 2-digits long.
  rHex = rHex.padStart(2, rHex[0]),
  gHex = gHex.padStart(2, gHex[0]),
  bHex = bHex.padStart(2, bHex[0]);

  return rHex + gHex + bHex;
}

/*
    Adapted from CSS-Tricks.
    https://css-tricks.com/converting-color-spaces-in-javascript/
*/
function hexToRGB(h) {

  // Remove “#” if it's there.
  h = h.replace(/^#/, "");

  // Prefix with “0x” to indicate the number is a hexadecimal.
  // If the hex is 3 digits long.
  if (h.length == 3) {
    r = "0x" + h[0] + h[0];
    g = "0x" + h[1] + h[1];
    b = "0x" + h[2] + h[2];

  // If the hex is 6 digits long.
  } else if (h.length == 6) {
    r = "0x" + h[0] + h[1];
    g = "0x" + h[2] + h[3];
    b = "0x" + h[4] + h[5];
  }
  
  // Return as an array while converting to integer.
  return [+r, +g, +b];
}

function rgbToDecimal(r, g, b) {

  // Use bit shifting on r and g.
  rDecimal = parseInt(r) << 16,
  gDecimal = parseInt(g) << 8,
  bDecimal = parseInt(b);

  // Wrap Number constructor around to remove leading zeros.
  return Number(rDecimal + gDecimal + bDecimal);
}

/*
    Credit for this function goes to CSS-Tricks.
    https://css-tricks.com/converting-color-spaces-in-javascript/
*/
function hslToRGB(h,s,l) {
  
  // Divide saturation and lightness by 100 to obtain values between 0 and 1.
  s /= 100, l /= 100;

  /*
    Find the colour intensity/chroma (c), the second largest component (x),
    and the value to add to each RGB value to match the lightness (m).
  */ 
  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  /*
    Assign c and x according to the pattern below and leave one channel at 0.
  */
  // If the hue is between Red and Yellow.
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  // If the hue is between Yellow and Green.
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  // If the hue is between Green and Cyan.
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  // If the hue is between Cyan and Blue.
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  // If the hue is between Blue and Magenta.
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  // If the hue is between Magenta and Red.
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  // Add m to and multiply by 255 each RGB channel, then round.
  r = Math.round((r + m) * 255),
  g = Math.round((g + m) * 255),
  b = Math.round((b + m) * 255);
    
  return [r, g, b];
}

/*
    Credit for this function goes to CSS-Tricks.
    https://css-tricks.com/converting-color-spaces-in-javascript/
*/
function rgbToHSL(r, g, b) {
  
  // Make r, g, and b fractions of 1.
  r /= 255, g /= 255, b /= 255;

  // Find greatest and smallest channel values.
  cmin = Math.min(r, g, b),
  cmax = Math.max(r, g, b),
  delta = cmax - cmin;

  // Calculate hue.
  // If there's no difference between the channel values.
  if (delta == 0)     h = 0;
  // If Red is max.
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // If Green is max.
  else if (cmax == g) h = (b - r) / delta + 2;
  // If Blue is max.
  else                h = (r - g) / delta + 4;

  // Multiply the result by 60 to get the degree value, and round.
  h = Math.round(h * 60);

  // Make negative hues positive behind 360°.
  if (h < 0) h += 360;

  // Calculate lightness.
  l = (cmax + cmin) / 2,
  // Calculate saturation.
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100 while rounding and converting to integer.
  s = Math.round(+(s * 100)),
  l = Math.round(+(l * 100));

  return [h, s, l];
}

/*
    Adapted from Adam Sassano.
    https://stackoverflow.com/questions/3423214/convert-hsb-hsv-color-to-hsl/#66469632
*/
function hslToHSV(h, s, l) {
  
  // Divide saturation and lightness by 100 to obtain values between 0 and 1.
  s /= 100, l /= 100;
  
  // Find the “V” / value of HSV.
  v = l + s * Math.min(l, 1 - l),
  
  // Calculate saturation.
  v === 0 ? s = 0 : s = 2 * (1 - (l / v));

  // Multiply l and s by 100 while rounding.
  s = Math.round(s * 100),
  v = Math.round(v * 100);

  return [h, s, v];
}

/*
    Adapted from JavaScripter.
    http://www.javascripter.net/faq/rgb2cmyk.htm
*/
function rgbToCMYK(r, g, b) {

  // If r, g, and b are 0, return the CMYK for black.
  if (r==0 && g==0 && b==0) return [0, 0, 0, 1];

  // Turn r, g, and b into fractions.
  c = 1 - (r / 255),
  m = 1 - (g / 255),
  y = 1 - (b / 255);
 
  // Calculate Key (black), Cyan, Magenta, and Yellow.
  k = Math.min(c, Math.min(m,y)),
  c = (c - k) / (1 - k),
  m = (m - k) / (1 - k),
  y = (y - k) / (1 - k);

  // Multiply c, m, y and k by 100 while rounding.
  c = Math.round(c * 100),
  m = Math.round(m * 100),
  y = Math.round(y * 100),
  k = Math.round(k * 100);
 
  return [c, m, y, k];
 }