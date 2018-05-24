import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  file: MediaObject = this.media.create('http://radio182.bugaboo.tv/liveedge_goodtime_radio/smil:audio.smil/playlist.m3u8');

  constructor(public navCtrl: NavController, private media: Media) {
    this.file.play();
  }

  play(){
    console.log('play');
    this.file.play();
  }

  pause(){
    console.log('pause');
    this.file.pause();
  }


}
