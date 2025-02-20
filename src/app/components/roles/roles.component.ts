import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  firstName : string = "Angular Tutorials";
  version : string = "18";
  defaultData : number = 0;
  currentDate : Date = new Date();

  text : string = "";

  showMessage() : void {
    alert("Show alert!");
  }

  showMessageAlert(message: string) {
    alert(message);
  }

  clickMe(){
    this.defaultData += 1;
    console.log(this.defaultData) ;
  } 
}
