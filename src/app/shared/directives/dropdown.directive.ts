import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.isOpen ? false : this.isOpen = this.elRef.nativeElement.contains(event.target) ? true : false;
    }
    constructor(private elRef: ElementRef) { }
}