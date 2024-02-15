import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-contect-me',
  templateUrl: './contect-me.component.html',
  styleUrls: ['./contect-me.component.css'],
})
export class ContectMeComponent implements OnInit {
  constructor(private _service: DrawerService) {}
  ngOnInit() {
    console.log(this._service.isOpen);
  }
}
