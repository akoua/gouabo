import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";
import { VgAPI } from 'videogular2/core';

@Directive({
    selector: '[keyPress]'
})
export class keypressDirective implements OnInit{

    @Input('keyPress') api: VgAPI ;
    @HostBinding('style.backgroundColor') backgroundColor = 'white';
    @HostBinding('style.borderRadius') borderRadius = '5px';
    
    //@HostBinding('style.marginLeft') marginLeft = '10%';
    constructor(private el: ElementRef,
    private renderer: Renderer2){

    }

    ngOnInit(): void {  
        //console.log(this.el.nativeElement);
        //this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        this.backgroundColor;
        this.borderRadius;        
    }

    @HostListener('document:keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
        console.log("Pressed key", event.keyCode, "element: ", this.el);
        if (this.el.nativeElement.nodeName === 'VG-PLAYER') {
            console.log('regarde VgPlayer: ', this.api);
            console.log(this.api.currentTime,'/', this.api.duration);
        }
      }
}