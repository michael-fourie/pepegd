import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
@font-face {font-family: "Minecraft"; src: url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.eot"); src: url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.woff") format("woff"), url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/320cca572227f02a57aa55f479564218.svg#Minecraft") format("svg"); }    `}
  />
);

export default Fonts;
