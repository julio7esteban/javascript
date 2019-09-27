function Mediaplayer(config ){
    this.media = config.propiedad
    this.plugins =config.plugins || [];

    this._initplugins();

  }
  Mediaplayer.prototype._initplugins = function(){
    this.plugins.forEach(plugin => {

      plugin.run(this);
    });
  }
  Mediaplayer.prototype.mute =function(){
  this.media.muted = true;
  }
  Mediaplayer.prototype.unmute =function(){
    this.media.muted =false;
    }
Mediaplayer.prototype.toggleMute = function(){
  (this.media.muted) ? this.unmute() : this.mute()
}

  Mediaplayer.prototype.play = function(){

   this.media.play();
  }
  Mediaplayer.prototype.pause = function(){

   this.media.pause();
  }


  export default Mediaplayer;
  