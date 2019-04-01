import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appColor]'
})
export class ColorDirective implements OnInit{

    @Input('appColor') textColor = 'transparent' ;
    @HostBinding('style.backgroundColor') backgroundColor = 'white';
    @HostBinding('style.borderRadius') borderRadius = '5px';
    //@HostBinding('style.marginLeft') marginLeft = '10%';
    constructor(private el: ElementRef,
    private renderer: Renderer2){

    }

    ngOnInit(): void {  
        console.log(this.el.nativeElement);
        //this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        this.backgroundColor;
        this.borderRadius;        
    }

    @HostListener('click') doClick(){
        //this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
        //this.backgroundColor = this.textColor;        
    }
}