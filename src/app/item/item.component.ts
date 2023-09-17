import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent {
  @Input() chars:any;
  @Output() sideChanged = new EventEmitter<{name:string,side:string}>();

  onAssign(side:string){
    this.sideChanged.emit({name:this.chars.name,side:side});
  }
}
