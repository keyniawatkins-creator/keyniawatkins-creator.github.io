$(function () {
// initialize canvas and context when able to
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
window.addEventListener("load", loadJson);

function setup() {
if (firstTimeSetup) {
halleImage = document.getElementById("player");
projectileImage = document.getElementById("projectile");
cannonImage = document.getElementById("cannon");
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);
firstTimeSetup = false;
//start game
setInterval(main, 1000 / frameRate);
}

// Create walls - do not delete or modify this code
createPlatform(-50, -50, canvas.width + 100, 50); // top wall
createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
createPlatform(-50, -50, 50, canvas.height + 500); // left wall
createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

//////////////////////////////////
// ONLY CHANGE BELOW THIS POINT //
//////////////////////////////////

// TODO 1 - Enable the Grid
toggleGrid();


// TODO 2 - Create Platforms
createPlatform(400,700, 200,20,"red");
createPlatform(600,600,200,20,"orange");
createPlatform(800,500,200,20,"yellow");
createPlatform(1000,400,200,20,"green");
createPlatform(1200,500,200,20,"blue");
createPlatform(1400,600,200,20,"purple");
createPlatform(275, 350, 200,20,"pink");
createPlatform(315, 424, 200,20,"cyan");



// TODO 3 - Create Collectables
createCollectable("database",2130,450,0.5,0.7);
createCollectable("diamond",620,550,0.5,0.7);
createCollectable("max",880,300,1.5,0.7);
createCollectable('steve', 2100, 724, 0.5, 0.7);
createCollectable('database', 350, 725, 0.5, 0.7);
createCollectable('database', 575, 400, 0.5, 0.7);


// TODO 4 - Create Cannons
createCannon("top",950,2000);
createCannon("left",580,2000);
createCannon("right",420,2000);
createCannon('bottom', 600, 1000);
createCannon('right', 700, 1000);  

//////////////////////////////////
// ONLY CHANGE ABOVE THIS POINT //
//////////////////////////////////
}

registerSetup(setup);
});
