# Neural Activity

## Next steps 
2. Make sure the various classes fill these interfaces.
4. Rehacktor to DisplayDriver
5. Erase unneeded methods

```javascript
game = new MazeGame(displayDriver, displayDriver2, keyboardDriver);
game2 = new LightningMazeGame(displayDriver, keyboardDriver);
gameMaster.addGame(game);
gameMaster.addGame(game2);
gameMaster.start();
```

## Design day after today


### Interface Enum
* #values()
* #isValid(value)

### Interface Renderer
* #drawRectangle
* #drawSquare
* #drawCircle
* #drawText
* #drawLine
* #getWidth

Every Renderer has a de-facto canvas it's drawing on.

DisplayDriver is a Renderer that ultimately draws.

OffsetRenderer is a Renderer that adds +x and +y before passing on to DisplayDriver

### Interface GameObject
* #getDisplayObjects()

GameObject represents a concept in the game: a maze, a goal, an character, etc.
GameObject has a #getDisplayObjects
GameObjects deal in displayObjects.

### Interface DisplayObject
* #isDone()
* #draw()
* #setAlpha()

DisplayObject has a #draw method that executes draw commands with a renderer argument
DisplayObject can have a list of DisplayObjects. Its #draw will call their #draw-s
DisplayObjects deal in draw commands.

### Interface Display
* #addDisplayObject(displayObject)
* #removeDisplayObject(displayObject)
* #render()

Display has a Renderer, an ordered list of displayObjects, and a #render function to call the displayObjects' #draw-s.
Displays deal in displayObjects

### Interface Exhibitor
* #addGameObject(object)
* #resetDisplay()
* #drawLoop()
* #startDisplay()
* #stopDisplay()

Exhibitor has an ordered list of gameObjects and a display
Exhibitors are responsible for setting, clearing, and resetting thier displays
Exhibitors deal in gameObjects
#addGameObject(object)
#resetDisplay()
#drawLoop()
#startDisplay()
#stopDisplay()

### Interface Game
* #start()
* #stop()
* #gameLoop()

A Game has multiple gameObjects and exhibitors. It assigns the gameObjects to the exhibitors. It takes a set of displayDrivers, a soundDriver, and a keyboardDriver. It creates gameObjects and directs them. It has a #mainLoop()

### Interface KeyDownListener
* #keyDown(keyCode)

Most games will be keyDownListeners.

### Interface GameEndListener
* #gameEnd(data)

### Interface KeyboardDriver
* #addKeyDownListener(keyDownListener)

### Interface GameMaster
* #start()
* #gotoGame(number)
* #nextGame()
* #previousGame()
* #mainLoop()

A GameMaster has multiple games.

```javascript
// This is the overall multi-game wiring.
canvas = document.getElementById("myCanvas");
canvas2 = document.getElementById("myCanvas2");
displayDriver = new DisplayDriver(canvas);
displayDriver2 = new DisplayDriver(canvas2);
gameMaster = new GameMaster();
keyboardDriver = new keyboardDriver();
game = new MazeGame(displayDriver, displayDriver2, keyboardDriver);
game2 = new LightningMazeGame(displayDriver, keyboardDriver);
gameMaster.addGame(game);
gameMaster.addGame(game2);
gameMaster.start();
```

### New implementation for blue flash

The blue win-flash should be an ever-present gameObject, the last object on the exhibitor's list. It has a displayObject. #start sets a timeout for #stop. #start messages #start to its displayObject. #stop messages #stop to the displayObject. Flash's displayObject changes #draw behavior based on its #start and #stop


## Design today

* GameMaster - connects individual games to I/O
* Storyteller - starts and stops each game in sequence
* KeyboardDriver - reads from keyboard
** Publishes keyboard events
* DisplayDriver - writes to screen
** Takes a canvas
** Subscribes to display events
** Is only thing that can interact with the canvas
* SoundDriver - writes to speaker
** Takes an audioContext
** Subscribes to audio events
** Is the only thing that interacts with the speaker
* Renderer
** Offsets

## Where I left off

* test-first: Have Renderer handle all interactions with canvas/context
* test-first: Hand each drawable object a renderer instead of canvas/context
* Write Display#createRenderer(x, y)
* Have MazeGame constructor take a renderer instead of a display.
* test-first: give MazeGame a #getDisplayObjects() (MazeGame is a DisplayObjectProvider)
* test-first: Write an Exhibitor which calls #getDisplayObjects on providers, clears displays, and inserts display objects into the displays in proper order.
* Write MazeGame#subscribeTo(eventType, objectToTrigger)
** Events: win, lose, validMove
* Have MultiMaze#handleEvent(event)
** event.data
** event.type

## Mazes
** only discover walls by bumping into them
** display 1 is x/y, display2 is x/z
** You can only see a little at a time like a torch
** You can only see where the bad thoughts have been
** Blue maze and yellow maze superimposed. Running into a wall switches which you're in.

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

## Testing

`> npm test`

Uses
* requirejs - dependency management
* mocha - unit test framework
* simple-mock - test doubles

## Further things you can do

[Add better timing.](http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing)