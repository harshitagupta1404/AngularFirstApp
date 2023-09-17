import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listChars:any;
  @Output() updateInfo = new EventEmitter<{name:string,side:string}>();

  onSideChange(updatedChar:any){
    this.updateInfo.emit(updatedChar);
  }
}