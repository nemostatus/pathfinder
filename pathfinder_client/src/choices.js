export const asteroidmanuever = {
  prompt: "Your ship takes damage and is spinning out of control.",
  choice1: "Turn on thrusters",
  choice2: "Do nothing",
  level: "Ship Wreck",
  hearts: 3,
};

export const asteroidbeam = {
  prompt:
    "Your hyper beam clears an escape route for your ship at the cost of expending your ships battery. The battery \
     is at 40%",
  choice1: "Engage power saving mode.",
  choice2:
    "Have your engineer reroute power from other areas of the ship to the battery.",
  level: "Low Battery",
  hearts: 5,
};
/////////////////////////////////////////
export const shipwreckthruster = {
  prompt:
    "You turn on your thruster, blackout and end up  with 5% battery power on Plutos atmosphere.\
    In the distance you see an alien craft.  ",
  choice1: "Fire !",
  choice2: "Signal alien craft.",
  level: "Final Decision",
  hearts: 3,
};

export const shipwreckdonothing = {
  prompt:
    "You do nothing and end up crashing into an asteroid. You and your crew ill be remembered.",
  choice1: "GAME",
  choice2: "OVER",
  level: "Game Over",
  hearts: 0,
};
////////////////////////////////////////////////////////////////
export const lowbatterypowersave = {
  prompt:
    "You engage power saving mode for your ship. Your ship is now significantly slower\
       and moves at a dangerously slow pace. After expending your resources your crew grows weary \
       and meet their maker. They will be remembered. ",
  choice1: "GAME ",
  choice2: "OVER",
  level: "Game Over",
  hearts: 0,
};

export const lowbatteryreroute = {
  prompt:
    "Your engineer reroutes all of the seemingly non essential components of the ship to the battery. \
        At %100 charge your ship charges at a very swift pace to Pluto. Wait.... your engineer explains that after \
        running diagnostics that the navigation system has been compromised in the reroute. You have been heading \
        in the wrong direction for weeks now. Trying to navigate by gut you eventually run into a mysterious black hole. ",
  choice1: "Turn Right",
  choice2: "Turn left.",
  level: "Black Hole",
  hearts: 5,
};
////////////////////
export const finalsdecisionsignal = {
  prompt:
    " You signal to the craft explaining you come in peace and they send out a response \
        Your team works on deciphering it. Your crew is enlightened with the signal sent over and \
        the alien craft assists you in landing safely and helping you build an amazing base.  ",
  choice1:
    "The aliens send over a signal that cant be deciphered but you have a gut instinct they come in peace\
       Before you know it they fly swiftly to your ship and connect to it via their advanced technology. You see a\
       beam of white light and realize that everything is okay and you have nothing to worry about anymore.  ",
  choice2: "YOU WIN!",
  level: "Win",
  hearts: 3,
};

export const finalsdecisionfire = {
  prompt:
    " As your mega ultimate super beam charges up in a furious fashion you see a  \
        flash of light sweep in your direction, you tell your crew they will be remembered. ",
  choice1: "GAME ",
  choice2: "OVER",
  level: "Game Over",
  hearts: 0,
};

///////////////////
export const blackhole = {
  prompt:
    "Your engineer reroutes all of the seemingly non essential components of the ship to the battery. \
        At %100 charge your ship charges at a very swift pace to Pluto. Wait.... your engineer explains that after \
        running diagnostics that the navigation system has been compromised in the reroute. You have been heading \
        in the wrong direction for weeks now. Trying to navigate by gut you eventually run into a mysterious black hole. \
        Wait something is very wrong! ",
  choice1: "Turn Right",
  choice2: "Turn left.",
  level: "Black Hole",
  hearts: Math.floor(Math.random() * 100),
};

export const gameover = {
  prompt:
    "You and your crew fought valiantly until the end, you have everything to be proud of. ",
  choice1: "GAME ",
  choice2: "OVER",
  level: "Game Over",
  hearts: 0,
};
