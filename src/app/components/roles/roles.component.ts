import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {

   title:string = "Angular";
   version: number = 18;
   currentDate: Date = new Date();
}
