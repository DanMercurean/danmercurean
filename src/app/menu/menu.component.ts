import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
@Input() darkMode = true;
// menuOpened = false;

// openMenu(){
//   this.menuOpened = true;
// }

}
