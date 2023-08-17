const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); //OUTPUT_GIF(1000)
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Cat1","png");
}

function setup_layers(pScope){

  new PLayer(null, 255);  //background

  var layer1 = new PLayer(Cat1); //layer set up
  layer1.mode( SWIRL(4) ); 
  //SWIRL: how many times the picture happends in the distance part
  //RING: back and forth in the area
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 200, 400 );

  var layer3 = new PLayer(balls);
  layer2.mode( SWIRL(1) );
  layer2.set_boundary( 0, 200 );
}

//___________________________________________________________________________diving line

function Cat1(x, y, animation, pScope){
  scale(0.3); //size
  scale(animation.frame*2); //frame = size change
  scale(animation .wave(2)); //wave: get to 0 (disappear) for how many times
  Cat1x = animation.wave(); //wave(2)*100 = wriggling
  pScope.draw_image("Cat1",Cat1x,y)
}

//___________________________________________________________________________diving line

function balls(x, y, animation, pScope){
  
  scale(animation.frame*2); 

  fill(138,43,226);
  ellipse(0,100,50,50); // ball

}

//___________________________________________________________________________diving line

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(255);
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(0)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
