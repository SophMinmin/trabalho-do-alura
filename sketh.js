setup() {
    createCanvas(550, 450);
    background("rgb(66,37,97)")
  }
  
  function draw() {
    stroke("black");
    fill("rgb(32,103,128)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }