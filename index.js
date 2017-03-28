var sharp = require("sharp");
var src = "red.jpg";
// function threshold(image) {
//   function changePixel(r, g, b, a) {
//     return [0, 0, 0, 0];
//   }
//   return require('./PixelManipulation.js')(image, {
//     changePixel: changePixel
//   });
// }

var image = sharp(src);
meta = "lol";
image.metadata(function(err,metadata){
  if(err) throw err;
  meta = metadata;
  console.log(global.meta);
});
