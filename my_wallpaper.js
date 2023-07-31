var eyeheight = 30; //30






function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
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
  let centerX = width / 13.44;
  let centerY = height / 8;

  // Draw BMO/Beemo
  draw_body(centerX, centerY);
  draw_face(centerX, centerY);
  draw_eyes(centerX, centerY - 50);
  draw_mouth(centerX, centerY);
  draw_buttons(centerX, centerY);
}

function draw_body(x, y) {
  fill(201, 228, 206); // Green color for body
  rect(x - 90, y - 90, 180, 180, 20); // Square body
}

function draw_face(x, y) {
  fill(201, 228, 150); // Green color for body
  rect(x - 75, y - 75, 150, 100, 20); // Square body
}

function draw_eyes(x, y) {
  fill(255); // White color for eyes
  ellipse(x - 30, y, 30, eyeheight); // Left eye
  ellipse(x + 30, y, 30, eyeheight); // Right eye
  fill(0); // Black color for pupils
  ellipse(x - 30, y, 15, 15); // Left pupil
  ellipse(x + 30, y, 15, 15); // Right pupil
}

function draw_mouth(x, y) {
  fill(255); // White color for mouth
  rect(x - 40, y, 80, 20, 10); // Mouth
}

function draw_buttons(x, y) {
  // Top-left button
  fill(238, 187, 209); // Pink color for top-left button
  ellipse(x , y + 55, 30, 30); // Circle button

  // Top-right button
  fill(255, 204, 0); // Yellow color for top-right button
  triangle(x + 50, y + 41, x + 65, y + 70, x + 35, y + 70); // Triangle button

  // Bottom-left button
  fill(173, 216, 230); // Light blue color for bottom-left button
  rect(x - 60, y + 40, 15, 30, 5); // Rectangle button

}
