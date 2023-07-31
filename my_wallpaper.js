//your parameter variables go here!
let rect_width  = 40;
let rect_height = 30;


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
  background(240,240, 255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //angleMode(RADIANS)
  stroke(0)

  fill(255, 142, 36)
  ellipse(100, 100, 120, 30);
  ellipse(100, 100, 30, 120);
 
 

  fill(255, 255, 0);
  ellipse(100, 100, 60, 60);

  arc(100, 100, 50, 30, 0, 180);

}
