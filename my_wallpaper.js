var eyeSize = 30; //30. Changes the size of both the eye and pupil.
var eyeHeight = 60; //60. changesHeight of both the eye and pupil.
var mouthHeight = 90; //90. changes the height of the mouth.
var mouthShape = 10; //10. changes the curve of the mouth, numbers below 0 and above 10 make no chnage or cause errros. 
var newMouthShape = 5; // Define a new mouth shape value
//var bodyColor = color(98, 175, 183);  In my_symbol Default body color (98,175,183)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
  
}

function wallpaper_background() {
  background(240, 240, 255); //light honeydew green colour
}

function my_symbol() {

  var bodyColor = color(98, 175, 183); // Default body color (98,175,183)

  // Draw BMO/Beemo
  
  draw_body(10, 10, bodyColor); // x and y = 100
  draw_face(25, 25);
  draw_eyes(100, 100 - 50);
  draw_buttons(100, 100);
  draw_mouth(60, 90);

}

function draw_body(x, y, bodyColor) {
  fill(bodyColor); // Green color for body
  rect(x, y, 180, 180, 20); // Square body
}

function draw_face(x, y) {
  fill(99,189,164); // Green color for body
  rect(x, y, 150, 100, 20); // Square body
}

function draw_eyes(x, y) {
  fill(255); // White color for eyes
  ellipse(x - 30, eyeHeight, eyeSize, eyeSize); // Left eye
  ellipse(x + 30, eyeHeight, eyeSize, eyeSize); // Right eye
  fill(0); // Black color for pupils
  ellipse(x - 30, eyeHeight, eyeSize/2, eyeSize/2); // Left pupil
  ellipse(x + 30, eyeHeight, eyeSize/2, eyeSize/2); // Right pupil
  
}

function draw_mouth(x, y) {
  fill(255);// White color for mouth
  if (mouthShape >= 0 && mouthShape <= 10) { // Check if the mouth shape value is valid
    rect(x, mouthHeight, 80, 20, mouthShape); // Mouth with the defined mouth shape
  } else {
    rect(x, mouthHeight, 80, 20, newMouthShape); // Use the new mouth shape value if the original one is invalid
  }

  //rect(x, mouthHeight, 80, 20, mouthShape); // Mouth
}

function draw_buttons(x, y) {

  // Top-left button
  fill(242,5,83); // Pink color for top-left button
  ellipse(x , y + 55, 30, 30); // Circle button

  // Top-right button
  fill(0,0,255); // Yellow color for top-right button
  triangle(x + 50, y + 41, x + 65, y + 70, x + 35, y + 70); // Triangle button

  // Bottom-left button
  fill(255,236,71); // Light blue color for bottom-left button
  rect(x - 60, y + 40, 15, 30, 5); // Rectangle button
}
