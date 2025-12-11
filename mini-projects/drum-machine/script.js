const drumName = {
b1 : "Heater 1",
b2 : "Heater 2",
b3 : "Heater 3",
b4 : "Heater 4",
b5 : "Clap",
b6 : "Open-HH",
b7 : "Kick-n'-Hat",
b8 : "Kick",
b9 : "Closed-HH"
};

const display = document.getElementById("display");

const pads = document.querySelectorAll(".drum-pad");

pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
    display.innerText = drumName[pad.id]
  });
});


document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  audio.play();
});

