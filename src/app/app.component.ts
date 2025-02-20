import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from "./components/roles/roles.component";
import { DestinationComponent } from "./components/destination/destination.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RolesComponent, DestinationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clydeProject';
  currentState: string = '';

  onChange(state: string) {
    this.currentState = state;
  }
}
