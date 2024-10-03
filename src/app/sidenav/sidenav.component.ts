import { Component, Output,Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
@Input() sideNavStatus:boolean= false;



  list = [
    {
     
    }
  ]

}
