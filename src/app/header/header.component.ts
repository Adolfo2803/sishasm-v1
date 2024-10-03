import { Component, EventEmitter, Output ,input} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() sideNavToggle=new EventEmitter<boolean>();
menuStatus: boolean = false;


  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggle.emit(this.menuStatus)
  }

}
