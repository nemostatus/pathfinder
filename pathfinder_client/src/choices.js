export  const asteroidManuever = {
    
    prompt: 'Your ship takes damage and is spinning out of control.',
   choice1:  'Turn on thrusters',
   choice2: 'Do nothing',
   level:"ship wreck",
   hearts: 3
}

export  const asteroidBeam= {
    
    prompt: 'Your hyper beam clears an escape route for your ship at the cost of expending your ships battery. The battery \
     is at 40%',
   choice1:  'Engage power saving mode.',
   choice2: 'Have your engineer reroute power from other areas of the ship to the battery.',
   level:"",
   hearts: 5
}
/////////////////////////////////////////
export const shipWreckThruster ={
    prompt: 'You turn on your thruster, blackout and end up on with 5% battery power on Plutos atmosphere.\
    In the distance you see an alien craft.  ',
   choice1:  'Fire !',
   choice2: 'Signal alien craft.',
   level:"4",
   hearts: 3
    }

    export const shipWreckDoNothing ={
        prompt: 'You do nothing and end up crashing into an asteroid. You and your crew ill be remembered.',
       choice1:  '',
       choice2: '',
       level:"Game Over",
       hearts: 0
        }
    ////////////////////////////////////////////////////////////////
