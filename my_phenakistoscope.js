const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK); 
  // pScope.output_mode(OUTPUT_GIF(1000)); 
  // pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("Cat","png", 4);
  pScope.load_image_sequence("Cat2","png", 14);
  pScope.load_image_sequence("Tree","png", 2);
}

function setup_layers(pScope){
  new PLayer(null, 255);  //background

  var layer0 = new PLayer(bkgrd); 

  var layer4 = new PLayer(Tree);

  var layer1 = new PLayer(Cat); //brown cat
  layer1.mode(RING); 
  layer1.set_boundary( 500, 1000 );

  var layer2 = new PLayer(Cat2); //black vat
  layer2.mode(RING); 
  layer2.set_boundary( 500, 1000 );

  var layer3 = new PLayer(balls);
  layer3.mode(RING);
  
  var layer5 = new PLayer(eye);
  layer3.mode(RING);

  //layer4.mode(RING);
 

}

//___________________________________________________________________________diving line

function bkgrd(x, y, animation, pScope){
  pScope.fill_background(227,207,87);
  fill(255,153,18);
  ellipse(0,0,1800,1800);
  fill(255,200,9);
  ellipse(0,0,1780,1780);
  // fill(176,48,96);
  // ellipse(0,0,1600,1600);
  // fill(210,105,30);
  // ellipse(0,0,1570,1570);
  fill(245,222,175);
  ellipse(0,0,1500,1500);//1550
  fill(178,34,34);
  ellipse(0,0,500,500);//800
}

function Cat(x, y, animation, pScope){
  angleMode(DEGREES);
  push();
  translate(700,520);
  rotate(-51);
  scale(0.5); //size
  pScope.draw_image_from_sequence("Cat",0, 0, animation.frame)
  pop();
}

function Cat2(x, y, animation, pScope){
  angleMode(DEGREES);
  push();
  translate(700,500);
  rotate(120);
  scale(0.35); //size
  pScope.draw_image_from_sequence("Cat2",0, 0, animation.frame)
  pop();
}
//___________________________________________________________________________diving line

function balls(x, y, animation, pScope){
  angleMode(DEGREES);
  push();
  translate(265,265);
  rotate(60);
  scale(0.1 + animation.frame*0.5);
  fill(218,165,105);

  beginShape();
  curveVertex(0, -150);
  curveVertex(0, -150);
  curveVertex(-150, 50);
  curveVertex(-150, 250);
  curveVertex(0, 450);
  curveVertex(0, 450);
  endShape();

  beginShape();
  curveVertex(0, -150);
  curveVertex(0, -150);
  curveVertex(150, 50);
  curveVertex(150, 250);
  curveVertex(0, 450);
  curveVertex(0, 450);
  endShape();//eyeballs

  fill(255,153,18);
  ellipse(0,150,300,300);

  noStroke();
  fill(255,200,9);
  ellipse(0,150,180,180);
  fill(255,215,0);
  ellipse(0,150,130,130);

  stroke(1);
  fill(255,215,0);
  beginShape();
  curveVertex(-150, 150);
  curveVertex(-150, 150);
  curveVertex(-50, 125);
  curveVertex(50, 130);
  curveVertex(150, 130);
  curveVertex(150, 150);
  endShape();
  beginShape();
  curveVertex(-150, 150);
  curveVertex(-150, 150);
  curveVertex(-50, 180);
  curveVertex(50, 180);
  curveVertex(150, 150);
  curveVertex(150, 150);
  endShape();

  fill(0);
  beginShape();
  curveVertex(-140, 150);
  curveVertex(-140, 150);
  curveVertex(-50, 140);
  curveVertex(50, 140);
  curveVertex(140, 150);
  curveVertex(140, 150);
  endShape();
  beginShape();
  curveVertex(-140, 150);
  curveVertex(-140, 150);
  curveVertex(-50, 170);
  curveVertex(50, 170);
  curveVertex(140, 150);
  curveVertex(140, 150);
  endShape();

  fill(11,23,70);
  ellipse(0,160,30,30);
  pop();//pupil
}

//___________________________________________________________________________diving line

function Tree(x, y, animation, pScope){
  angleMode(DEGREES);
  push();
  translate(550,550);//450,450
  rotate(130);//160
  scale(0.5); 
  pScope.draw_image_from_sequence("Tree",0, 0, animation.frame)
  pop();
}

//___________________________________________________________________________diving line

function eye(x, y, animation, pScope){
  push();
  translate(0,0);
  rotate(0);
  scale(1);
  fill(100);
  ellipse(0,0,460,460);
  fill(192,255,255);
  ellipse(0,0,450,450);
  
  fill(176,224,230);
  ellipse(0,50,350,350);
  fill(0,255,255);
  ellipse(0,50,300,300);
  fill(100);
  ellipse(0,50,280,280);
  fill(65,105,225);
  ellipse(0,50,260,260);
  fill(100);
  ellipse(0,50,240,240);
  fill(0,0,225);
  ellipse(0,50,200,200);
  fill(100);
  ellipse(0,50,180,180);
  fill(0);
  ellipse(0,50,70,70);
  pop();
}
  //SWIRL: how many times the picture happends in the distance part
  //RING: back and forth in the area
  //scale(animation.frame*2); //frame = size change
  //scale(animation .wave(2)); //wave: get to 0 (disappear) for how many times
  //Cat1x = animation.wave(); //wave(2)*100 = wriggling