import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContectMeComponent } from './components/contect-me/contect-me.component';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  isOpened: boolean = false;
  constructor(private _router: Router, private _service: DrawerService) {}
  home() {
    this._router.navigate(['home']);
  }
  about() {
    this._router.navigate(['about-me']);
  }

  isOpen() {
    this._router.navigate(['contect-me']);
  }

  workExperience() {
    this._router.navigate(['experience']);
  }

  form() {
    this._router.navigate(['form']);
  }
}
