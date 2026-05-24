import { Component, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  isScrolled = signal(false);
  mobileOpen = signal(false);
  inicioOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  toggleDropdown(menu: 'inicio') {
    this.inicioOpen.set(menu === 'inicio' ? !this.inicioOpen() : false);
  }

  closeAll() {
    this.inicioOpen.set(false);
    this.mobileOpen.set(false);
  }
}
