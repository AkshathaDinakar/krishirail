import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isSidebarOpened = true;

  toggleSidebar() {
    this.isSidebarOpened = !this.isSidebarOpened;
  }

  isSidebarOpen() {
    return this.isSidebarOpened;
  }
}
