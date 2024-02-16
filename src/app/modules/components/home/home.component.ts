
  import { Component, OnInit,Directive, ElementRef,AfterViewInit,Input,ViewChild } from '@angular/core';
  // import Hls from 'hls.js';
import * as HLS from 'hls.js';
declare var Hls;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('videohls2') videoElementRef!: ElementRef;
  videoElement!: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.videoElement = this.videoElementRef?.nativeElement;

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs")
      console.log(Hls);
      console.log(this.videoElement);

      var hls = new Hls();
      // hls.loadSource('/assets/video/d7251d6260de4f0192f374ddc98b772d/modulo3_6.m3u8');
      hls.loadSource('https://d1a79jkkzk4r01.cloudfront.net/introduce/introduce.m3u8');
      hls.attachMedia(this.videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // this.videoElement.play();
        console.log("1");
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.log(data);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log('fatal network error encountered, try to recover');
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log('fatal media error encountered, try to recover');
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              hls.destroy();
              break;
          }
        }
      });
    }

    else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      // alert("You're using an Apple product!");
      this.videoElement.src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
      console.log("2");
    }
  }

}

