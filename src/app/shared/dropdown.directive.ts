import { Directive, Input, Renderer2, ElementRef, HostBinding, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @Input() isOpen: boolean = false;
  @HostBinding('class.open') menuState: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.isOpen = false;
   }

   @HostListener('click') clickMenu(eventData: Event) {
    // if (!this.isOpen) {
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    //   this.isOpen = !this.isOpen;
    // } else {
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    //   this.isOpen = !this.isOpen;
    // }
    this.menuState = !this.menuState;
  }

}
