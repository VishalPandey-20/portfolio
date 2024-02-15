import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  @Output() isOpen = new EventEmitter<boolean>();
  constructor() {}
}
