import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  characters = [
    {name:'Harshita', side:'Light'},
    {name:'Monal', side:'Light'},
    {name:'Saksham', side:'Dark'},
    {name:'Sanjay', side:'Dark'}
  ]
  chosenList = 'All';

  getCharacters(){
    if (this.chosenList === 'All')
      return this.characters.slice();
    return this.characters.filter((char) => {return char.side===this.chosenList});
  }

  onChoose(selectedTab:string){
    this.chosenList=selectedTab;
  }

  onCharUpdate(charInfo:any){
    const pos = this.characters.findIndex((char)=>char.name===charInfo.name);
    this.characters[pos].side = charInfo.side;
  }
}
