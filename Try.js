import React from 'react';
import {Howl, Howler} from 'howler';

function Try(){

    const play=()=>{
    var sound = new Howl({
        src: ['./Music/Ha_Ho_Gayi_Galti_Mujse_super_song(128k).mp3'],
        volume: 1,
      });
      
      sound.play();
    };

    return(
     <>
        <button onClick={play}>Click Me</button>
     </>   
    );
}

export default Try;