var eyeSize = 30; //30. Changes the size of both the eye and pupil.

var eyeHeight = 50; //60. changesHeight of both the eye and pupil.

var mouthHeight = 90; //100. changes the height of the mouth.

var mouthShape = 10; //10. changes the curve of the mouth, numbers below 0 and above 10 make no chnage or cause errros. 

//let coulour = color(255, 204, 0);   in My_symbol function, colour of mouth can be changed. 




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
  
}

function wallpaper_background() {
  background(240, 240, 255); //light honeydew green colour


}

function my_symbol() {
  // Set the center of the BMO/Beemo
  let centerX = width / 14.7; //13.44
  let centerY = height / 8;
  let coulour = color(255);


  // Draw BMO/Beemo
  
  draw_body(centerX, centerY);
  draw_face(centerX, centerY);
  draw_eyes(centerX, centerY - 50);
  draw_buttons(centerX, centerY);
  draw_mouth(centerX, centerY, coulour);

}

function draw_body(x, y) {
  fill(98,175,183); // Green color for body
  rect(x - 90, y - 90, 180, 180, 20); // Square body
}

function draw_face(x, y) {
  fill(99,189,164); // Green color for body
  rect(x - 75, y - 75, 150, 100, 20); // Square body
}

function draw_eyes(x, y) {
  fill(255); // White color for eyes
  ellipse(x - 30, eyeHeight, eyeSize, eyeSize); // Left eye
  ellipse(x + 30, eyeHeight, eyeSize, eyeSize); // Right eye
  fill(0); // Black color for pupils
  ellipse(x - 30, eyeHeight, eyeSize/2, eyeSize/2); // Left pupil
  ellipse(x + 30, eyeHeight, eyeSize/2, eyeSize/2); // Right pupil
  


}

function draw_mouth(x, y, coulour) {

  fill(coulour);// White color for mouth
  rect(x - 40, mouthHeight, 80, 20, 10); // Mouth
  


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







