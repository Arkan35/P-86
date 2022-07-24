var canvas = new fabric.Canvas('myCanvas');

function new_image()
{

fabric.Image.fromURL('https://www.funimada.com/assets/images/cards/big/bday-541.gif', function(Img) {
block_image_object = Img;
block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({
top:0,
left:0
});
canvas.add(block_image_object);
});

// function playSound(){
//     var x = new Audio()
//     x.play();
// }
var audio = new Audio("bday.mp3");

document.onclick = function() {
  audio.play();
}
}
