// 1. First we need to be able to parse individual notes. Write a function `parseNote` that takes a note string (e.g. "C#*2") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.

// 2. Now let's parse a whole song string. Write a function `parseSong` that takes a song string as above, and returns an array of note objects. You should use the `parseNote` function.

// 3. Finally, let's build our amazing Jukebox! Create an HTML page that, when loaded, prompts the user for a song string and plays the song. When the song if finished playing, prompt the user for another song, forever! To keep things clean, please use two script tags in your page. One to load the provided `player.js` file, and one to load your own `jukebox.js` file.
var parseNote = function(noteString) {

  // console.log("typeof noteString is " + typeof noteString)
  var breakpoint = noteString.indexOf("*");
  var beats = 1;

  if (breakpoint == -1){  // if the "*" isn't found
    breakpoint = noteString.length  // reset breakpoint to end of string
  } else {
    beats = parseInt(noteString.slice(breakpoint+1, noteString.length)); 
  }
  var pitch = noteString.slice(0,breakpoint);
  debugger;
  var note = {"pitch": pitch, "beats": beats}; // make the object
  console.log(note);
  return note;
}

// parseNote("C#*2")

var parseSong = function(songString) {
  var songArray = songString.split(" ");  // this is an array of noteStrings
// loop through array, making each string into a note object
// then put all these note objects into an array called song
  var song = [];
  for(var i=0; i<songArray.length; i+=1){    
    var note = parseNote(songArray[i]);
    // console.log("parseSong says " + note);
    song.push(note);
  }
  // console.log(song);
  return song;
}

// parseSong("A*1");
// parseSong("A*1 C#*2 D*4");

var userLoop = function() { 
  userSays = prompt("Please give me a song in ridiculous format: ", "A*1 C#*2 D*4");
  var userSong = parseSong(userSays);
  playSong(userSong, 400, userLoop); // when the playSong function finishes it calls the userLoop again.
}

userLoop();  // run the userLoop, which calls everything else

