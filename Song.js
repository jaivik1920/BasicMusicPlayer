import React, { useState } from 'react';
import './app.css';
import Mdata from './Mdata.js';
import {Howl} from 'howler';


function Song(props) {
    var logic=0;
    var myinterval;
   const [srcimg,setimg]=useState('https://d2tml28x3t0b85.cloudfront.net/tracks/artwork/09c6c340136011e9a2aa7d7e33940a9b/0a8d6ea0136011e99d7c9bb1d3b22877-49552280_598324553953266_4578413143008477184_n.png');
   const [sname,setsong]=useState('./Music/Akon-Right Now Na Na Lyrics ( 128kbps ).mp3');
   const[searchsongname,setsongname]=useState('');

   //const[searchsname,setsongname]=useState('');

   var sound = new Howl({
    src: [sname],
    volume: 1,
  });

   

   const play=()=>{
    var timemanager=(sound.duration()/60);
    document.getElementById('timemanager').innerHTML=timemanager.toFixed(2);
    document.getElementById('playbtn').classList.value="fa fa-play";
       if(logic===0){
         sound.play();
         document.getElementById('playbtn').classList.value="fa fa-pause";
         logic=1;
       }
       else{
           sound.pause();
           document.getElementById('playbtn').classList.value="fa fa-play";
           logic=0;
           console.log('hii');
           stopinterval();
         
           
       }
        
        var dur=100/sound.duration();
        var dur2=dur;
        myinterval =setInterval(()=>{
               document.getElementById('progress').value=dur2;
                dur2=dur2+dur;
                if(dur2>=100){
                    document.getElementById('timemanager').innerHTML=0;
                    stopinterval();
                }
                timemanager=timemanager-(1/60);
                document.getElementById('timemanager').innerHTML=timemanager.toFixed(2);
            },1000); 

     
    };
    const stopinterval=()=>{ 
        sound.pause();
        //sound.stop();
       document.getElementById('playbtn').classList.value="fa fa-play";
      document.getElementById('progress').value="0";
       clearInterval(myinterval);
       document.getElementById('timemanager').innerHTML='';
    };

    const forward=(event)=>{
        stopinterval();
        var j=props.forward();
        console.log(j);
        setimg(Mdata[j].mpic);
        sound.pause();
        setsong(Mdata[j].mname);
        document.getElementById('playbtn').style.color="black";
        document.getElementById('playbtn').classList.value="fa fa-play";
    }
    const backward=()=>{
        stopinterval();
        document.getElementById('progress').value="0";
        var j=props.backward();
        setimg(Mdata[j].mpic);
        setsong(Mdata[j].mname);
        document.getElementById('playbtn').style.color="black";
        document.getElementById('playbtn').classList.value="fa fa-play";

    }
    const searchEvent=(event)=>{
        setsongname(event.target.value);
     }
     const search=()=>{
        stopinterval();
        sound.pause();
        sound.pause();
         var logic=0;
         var song;
         var searchsong;
         var pic;
         var realsongname;
         Mdata.map(cval=>{
             song=cval.sname;
            // console.log(sname);
             if(song.includes(searchsongname)){
                 searchsong=song;
                 pic=cval.mpic;
                 realsongname=cval.mname;
                 logic=1;
             }
             
         });
         if(logic){
             document.getElementById('searchSong').innerHTML=searchsong;
             setimg(pic);
             sound.pause();
             sound.stop();
             setsong(realsongname);
             document.getElementById('search').value='';
         }
         else{
             document.getElementById('searchSong').innerHTML='not found';
         }
     }
   
    return (
        <>
        <div className="searchcontainer">
        <input type="text" placeholder="Search Your Songs"
        id="search"
        onChange={searchEvent}
        />
         <i id="backbtn" className="fa fa-search" onClick={search}></i>
    </div>
    <div id="searchSong"></div>        

            <div className="imgcontainer">
                <img src={srcimg} alt=""/>
                <progress id="progress" value="0" max="100">  </progress>
                <div id="timemanager"></div>
                <div className="iconcontainer">
                    <i id="backbtn" className="fa fa-backward" onClick={backward}></i>
                    <i id="playbtn" className="fa fa-play" onClick={play}></i>
                    <i id="forwardbtn"  className="fa fa-forward" onClick={forward}></i>
                </div>
            </div>
    </>
  );
}
export default Song;