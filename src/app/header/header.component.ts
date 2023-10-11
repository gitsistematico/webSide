import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowDivIf = true;
  constructor() { }

  toggleDisplayDivIf( type: number = 0) {    
    if (type == 1) {      
      this.isShowDivIf = !this.isShowDivIf;
    }
  }
  
  
}
