
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
  @ViewChild('videohls1') videoHls1!: ElementRef;
  @ViewChild('videohls2') videoHls2!: ElementRef;
  @ViewChild('videohls3') videoHls3!: ElementRef;
  @ViewChild('videohls4') videoHls4!: ElementRef;
  @ViewChild('videohls5') videoHls5!: ElementRef;
  @ViewChild('videohls6') videoHls6!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.loadSourceVideoHLS(this.videoHls1,'https://d1piva4jon12ui.cloudfront.net/introduce/modulo3_6.m3u8');
    this.loadSourceVideoHLS(this.videoHls4,'https://d1piva4jon12ui.cloudfront.net/hls/introduce/modulo3_6.m3u8');
    this.loadSourceVideoHLS(this.videoHls5,'https://d1piva4jon12ui.cloudfront.net/video/introduce/modulo3_6.m3u8');
    this.loadSourceVideoHLS(this.videoHls6,'https://d1a79jkkzk4r01.cloudfront.net/introduce/modulo3_6.m3u8');
    
    
    this.loadSourceVideoHLS(this.videoHls2,'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8');
    this.loadSourceVideoHLS(this.videoHls3,'https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8');

    // this.loadSourceVideoHLS(this.videoHls1,'/assets/video/introduce/modulo3_6.m3u8');
    // this.loadSourceVideoHLS(this.videoHls2,'/assets/video/introduce/modulo3_6.m3u8');
  }

  loadSourceVideoHLS(videoElementRef: ElementRef,urlSource: String ): void {
    var videoElement!: HTMLVideoElement;

    videoElement = videoElementRef?.nativeElement;

    if (Hls.isSupported()) {
      console.log("Video streaming supported by HLSjs")
      console.log(Hls);
      console.log(videoElement);

      var hls = new Hls();
      // hls.loadSource('/assets/video/d7251d6260de4f0192f374ddc98b772d/modulo3_6.m3u8');
      // hls.loadSource('https://d1a79jkkzk4r01.cloudfront.net/introduce/introduce.m3u8');
      hls.loadSource(urlSource);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // videoElement.play();
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
    }else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      // alert("You're using an Apple product!");
      videoElement.src = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
      console.log("2");
    }
  }

}

