import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onSelect(menuSelected: any) {
    switch (menuSelected) {
      case 'recipe':
        console.log('Selected recipes');
        this.featureSelected.emit(menuSelected);
        break;

      case 'shopping-list':
        console.log('Selected shopping-list');
        this.featureSelected.emit(menuSelected);
        break;

      default:
          this.featureSelected.emit('recipe');
        break;
    }
  }

}
