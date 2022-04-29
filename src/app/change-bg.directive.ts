import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() isCorrect : boolean=false;
  constructor(private el:ElementRef,private render:Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background-color','green');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid green');
    }
    else{
      this.render.setStyle(this.el.nativeElement,'background-color','red');
      this.render.setStyle(this.el.nativeElement,'color','white');
      this.render.setStyle(this.el.nativeElement,'border','2px solid red');

    }
  }
}
