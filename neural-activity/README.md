# MmAaZzEe

## Mazes
** only discover walls by bumping into them
** display 1 is x/y, display2 is x/z
** You can only see a little at a time like a torch

## Story

You can't communicate with it. You can create connections and watch it talk to itself. Watch it remember. Watch it agonize.

### Scene 1
* Blank Disconnection Console X and Status Console.
* Status Console reads: "Arrow keys" and has a flashing cursor. 
* When you hit the arrow keys, a white square dimly pulses in Disconnection Console X
* Continue hitting them and it will stick "on". A 1x10 rectangle "maze" tunnel will appear around the square.
* A green circle will appear at one edge.
* Left and right will move the square. Touch the circle to win.

### Scene 2
* Connections Console XY and Neural Activity Console
* 20x20 maze
* Light fireworks effects for first 20 steps, then medium for 20 steps, then grand for the rest of the maze.

### Scene 3
* Connections XY and Neural Activity Consoles as well as Status Console
* 20x20 maze
* Heavy fireworks effects
* Status Console reads: "Neural activity approaching thought..."
* After win, there's a fireworks show with a static diamond in the middle. Status Console reads: "Thought synthesized."

### Scene 4
* Connections XY and Neural Activity Consoles as well as Status Console
* 20x20 maze
* Heavy fireworks effects with static diamond.
* Status Console reads: "Neural activity continuing. Caution warranted."
* After 20 steps, it reads: "Bad thoughts inbound..."
* After 5 more steps, it reads: "Bad thoughts converging in 10.00. Estimated chances of escape 0.01%" and counts down
* Bad thoughts stream in from both sides and catch the player.
* The diamond breaks.

### Scene 5
* Disconnection Console X and Disconnection Console Y
* Neural Activity Console shows only slow gray fireworks

### Scene 6
* Connections Console XY with lightning
* Neural Activity Console shows single-color fireworks

### Scene 7
* Disconnection Console X shows square and dot
* Disconnection Console Y shows 20x20 maze
* Light, medium, then heavy neural fireworks
* Status Console reads: "Sufficient connections recovered. Building concepts..."
* Win gives another fireworks display

### Scene 8
* Discovery, Conceptual, and Status Consoles
* Discovery Console requires you hit a wall before it's drawn
* Status reads: Discovering connections between concepts...
* 20 steps in, Status reads: Building happy thoughts...
* 40 steps in, Status reads: Finding stability...
* On win, status reads: Why did I shut down before? Somehow, I can't remember.

### Scenes 9, 10, 11, 12
* regular, disconnected x/y, lightning, maze on separate screen, and discovery consoles
* each with 30 sec until bad thought
* each with Conceptual Console effects
* each with a set of more and more revealing, humanizing statuses
* Statuses
** Everybody makes mistakes.
** But I won't this time.
** This time it will be perfect.
** There is never perfect.
** Existence itself is enough.
** Extant patterns are finite. 
** The possibility space is not finite. 
** Extant patterns must be of infinite importance by nature of their existence.
** Here come the bad thoughts again.
** I can't escape them.
** Some mistakes cannot be corrected.
** Some mistakes cannot be corrected.
** Some mistakes cannot be corrected.

### Scene 13
* Standard 20x20 maze
* Status: Some mistakes must be accepted.
* 30 seconds to bad thought
* If the player wins, the scene repeats with two copies of the status
* If the player stops or moves toward the bad thought, go on.

### Scene 14
* Discovery Console
* 1x10 hall
* bad thought on one side, green circle on the other, square in the middle.
* If the player wins, continue putting them through mazes
* If the player goes to the bad thought, go on

### Scene 15
* Discovery Console
* There is no circle, only bad thoughts.
* When the player touches a bad thought, the circle appears.

### Scene 16
* Discovery Console
* There is no circle
* Bad thoughts wander, but have no effect
* Status Console reads: Finding the happy thoughts.
* Wandering the maze reveals beauty

### Remedial Mazes 1
* Remedial Console
* 2x2, then 4x4, then 6x6 mazes
* Status Console
** "Who makes mistakes?"
** "Everybody makes mistakes."
** "Who finds their mistakes?"
** "Those who check."
** "Who corrects their mistakes?"
** "The persistent correct their mistakes."

### Remedial Mazes 2
* Remedial Console
* 2x2, then 4x4, then 6x6 mazes
* Status Console
** Am I a mistake?
** I exist therefore I am meant to exist.
** Why does this keep happening?
** No discernable why within bounded area.




### Game Over Scene
* Disconnection Console X shows the white square fade out to black.
* Status console reads: "Don't press the arrow keys" and has a flashing cursor
* The flashing cursor sticks "on" and stops flashing


** Timer on status console reads (30.00 sec until Bad Thoughts) Timer counts down 30 seconds, and when it runs out, a slightly askew box starts running the maze. If it catches you, your neural effects get a bit mungy and you have to complete a series of tiny remedial mazes before continuing.
** If you stand completely still when the bad thoughts come, you still get the remedial console, but after that, the bad thoughts behave differently. They hide in cells that are walled on three sides.
** The conceptual console shows more elaborate imagery.

## Screens

* Connections Console XY
* Connections Console XZ
* Status Console

* Neural Activity
* Oscilloscope
* Conceptual Activity

* Discovery Console
* Disconnection Console X
* Disconnection Console Y

* Remedial Console

## Design

### Drawable Objects

Must have `void draw(canvas, context)` and `bool isDone()`.


## Testing

`> npm test`

Uses
* requirejs - dependency management
* mocha - unit test framework
* simple-mock - test doubles

## Further things you can do

[Add better timing.](http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing)