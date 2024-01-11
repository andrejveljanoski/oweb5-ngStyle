import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DriverComponent } from './driver.component';
import { DRIVERS } from './db-data';
import { Driver } from './klasa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DriverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  
  
})
export class AppComponent {
  title = 'angular1';
  maks = DRIVERS[1];
  checo = DRIVERS[2];
  lewis = DRIVERS[3];
  vozaci = DRIVERS;

  appklik(suzi:Driver){
    console.log("app e kliknat",suzi);
  }
}
