import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import Plyr from  'plyr';

@Component({
  selector: 'app-menu-movie',
  templateUrl: './menu-movie.component.html',
  styleUrls: ['./menu-movie.component.css']
})
export class MenuMovieComponent implements OnInit {

  
  @ViewChild(PlyrComponent)
plyr: PlyrComponent;
 
// or get it from plyrInit event
player: Plyr;
 

  constructor() { }

  ngOnInit() {
  }

  videoSources: Plyr.Source[] = [
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
  ];

  optionsVideo: Plyr.Options = {
    settings: ['captions', 'quality', 'speed'],
    captions: { active: true, update: true, language: 'fr' },
    quality: {
      default: '480',
      options: ['360', '720', '1080']
    }
  };
   
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }
   
  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }


  models: any[] = [
    {
      name: 'Derek',
      status: 'Teaching children to read',
      about: "I'm a model",
      messages: [],
      rows: 1,
      cols: 1,
    },
    {
      name: 'Hansel',
      status: 'Kitesurfing',
      about: "I'm a model",
      messages: [],
      rows: 1,
      cols: 1,
    },
    {
      name: 'Valentina',
      status: 'Kitesurfing',
      about: "I'm a model",
      messages: [],
      rows: 1,
      cols: 1,
    },
    {
      name: 'Mugatu',
      status: 'Designing the masterplan',
      about: "I'm a tirant",
      messages: [],
      rows: 1,
      cols: 1,
    },
    {
      name: 'Katinka',
      status: 'Teaching children to read',
      about: "I'm a model",
      messages: [],
      rows: 1,
      cols: 1,
    },
    {
      name: 'Rufus',
      status: 'Kitesurfing',
      about: "I'm a model",
      messages: [],
      rows: 1,
      cols: 1,
    },
  ]

}
