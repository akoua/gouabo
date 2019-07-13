import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
// tslint:disable-next-line:import-spacing
import Plyr from  'plyr';
import { FormControl } from '@angular/forms';
import { Observable, timer, Subscription } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { VgControlsHidden, VgAPI, BitrateOption } from 'videogular2/core';
import { IDRMLicenseServer } from 'videogular2/streaming';
import { VgDASH } from 'videogular2/src/streaming/vg-dash/vg-dash';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';
import { Plat } from 'src/app/shared/models/plat.model';

export interface IMediaStream {
  type: 'vod' | 'dash' | 'hls';
  source: string;
  label: string;
  token?: string;
  licenseServers?: IDRMLicenseServer;
}

@Component({
  selector: 'app-menu-movie',
  templateUrl: './menu-movie.component.html',
  styleUrls: ['./menu-movie.component.css']
})
export class MenuMovieComponent implements OnInit {

  @ViewChild(PlyrComponent) plyr: PlyrComponent;
  // or get it from plyrInit event
  player: Plyr;
  
  searchControl = new FormControl();
  modelFiltered = new Observable<string[]>();
  
  // tslint:disable-next-line:member-ordering
  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      
    }];
    
    @ViewChild(VgDASH) vgDash: VgDASH;
    @ViewChild(VgHLS) vgHls: VgHLS; 
    @ViewChild('player') public el: ElementRef;
    currentStream: IMediaStream;
    api: VgAPI;
    api$: Observable<VgAPI>;
    bitrates: BitrateOption[];
    subscriptions: Subscription[] = [];
    commentaires: string[] = []
    streams : IMediaStream[] = [

      {
        type: 'vod',
        label: 'VOD',
        source: '../../../assets/Angular/Angular 4 Development and Production Environments with Firebase.mp4'
      },
      {
        type: 'vod',
        label: 'VOD',
        source: '../../../assets/Angular/Angular Router Guards for Firebase Users_6.mp4'
      },
      {
        type: 'dash',
        label: 'DASH: Multi rate Streaming',
        source: '../../../assets/Angular/Anonymous Authentication with Angular and Firebase - Lazy Registration_7.mp4'
      },
      {
        type: 'dash',
        label: 'DASH: Live Streaming',
        source: '../../../assets/Angular/Custom Usernames with Firebase Authentication_5.mp4'
      },
      {
        type: 'dash',
        label: 'DASH: DRM with Widevine',
        source: '../../../assets/Angular/Google Sign-In with Firestore Custom User Data.mp4',      
      },
      {
        type: 'hls',
        label: 'HLS: Streaming',
        source: '../../../assets/Angular/How to Connect Firebase Users to their Data - 3 Methods_10.mp4'
      }
    ];
    plats: Plat[] = [];
    models: any[] = [
      {
        name: 'Derek',
        status: 'Teaching children to read',
        about: 'I\'m a model',        
        rows: 1,
        cols: 1,
      }
    ];    
    
    ingredients: string[] = [
      "400g de pulpe du fruit de palmier à huile (sauce graine)",
      "1 kg de poulet fumé",
      "crabe",
      "1 oignon découpé en dés et 1 oignon coupé en deux",
      "2 tomates découpées en dés et 1 tomate coupée en deux",
      "sel",
      "1 C à S de bouillon de poulet"          
    ];   
    step : number = 0;

    constructor(
      private controlsHidden: VgControlsHidden
    ) { }
    
    ngOnInit() {
      this.modelFiltered = this.searchControl.valueChanges.pipe(
        startWith(null),
        tap(search => console.log(this.models.filter(model => console.log(model.name.toLowerCase()) )) ),
        map(search => {
          if (!search) {
          return this.models.map(model => model.name);
        } else {
          return this.models.filter(model => {
            return model.name.toLowerCase().startsWith(search);
          });
        }
      })
    );
    

    console.log('je suis Oninit');     
    this.currentStream = this.streams[0];
    this.controlsHidden.state(false);        
  }  


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  onPlayerReady(api: VgAPI){    
    this.api$ = Observable.create((x: VgAPI) => {
      const ap = api;
    });
    this.api$.subscribe(x => {
      console.log('Regarde moi ', x);  
    })
    this.api = api;        
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onhideControls.bind(this)));
  }

  playVideo(): void {
    //console.log('je suis vraimenet play');
    //this.api.play();
}
  hideControls(): void {    
    this.api.state = true;
  }

  showControls(): void {
    this.api.state = false;
  }

  onhideControls(state: boolean): void {
    console.log('Are controls hidden ?', state);
  }
 

  setBitrate(option: BitrateOption) {
    switch (this.currentStream.type) {
        case 'dash':
            this.vgDash.setBitrate(option);
            break;

        case 'hls':
            this.vgHls.setBitrate(option);
            break;
    }
}

onClickStream(stream: IMediaStream) {
    this.api.pause();
    this.bitrates = null;

    let timer$ = timer(0, 10);
    
    timer$.subscribe(
        () => {
            this.currentStream = stream;            
        }
    );
}

playPlaylist(stream: IMediaStream): void  {
  console.log("playPlaylist ", event);
  this.currentStream = stream;
}



mouseEnter(event: Event): void {
  console.log("mouseEnter ",this.el); 
}

}
