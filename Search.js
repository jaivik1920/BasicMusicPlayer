import React, { useState } from 'react';
import './app.css';
import Mdata from './Mdata.js';

const Search=()=>{
    const[searchsongname,setsongname]=useState('');
    const searchEvent=(event)=>{
       setsongname(event.target.value);
    }
    const search=()=>{
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
        }
        else{
            document.getElementById('searchSong').innerHTML='not found';
        }
        console.log('clicked');
    }
return(
<>
    <div className="searchcontainer">
        <input type="text" placeholder="Search Your Songs"
        value={searchsongname} 
        onChange={searchEvent}
        />
         <i id="backbtn" className="fa fa-search" onClick={search}></i>
    </div>
    <div id="searchSong"></div>

</>
);



}
export default Search;