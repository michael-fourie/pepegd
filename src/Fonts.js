import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {font-family: "Pixelated Display"; src: url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.eot"); src: url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.woff") format("woff"), url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/d14098fec1a21bb32ccb0ee2ab07bb09.svg#Pixelated Display") format("svg"); }    `}
  />
);

export default Fonts;
