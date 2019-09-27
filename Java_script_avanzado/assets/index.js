import Mediaplayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
        const  video = document.querySelector("video");
        const button = document.querySelector("button");
        
        const player = new Mediaplayer({propiedad:video,plugins:[
          new AutoPlay()
        ]});
        var btnplay  = document.getElementById('btnplay');
        var btnpausa =  document.getElementById('btnmute');
        btnplay.onclick = function() {
          if( video.paused ){
           player.play();

         }else{
           player.pause();

         }
         
        }

        btnpausa.onclick = () => player.toggleMute();
       

        