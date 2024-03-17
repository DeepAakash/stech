import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(event: Event): void {
    const dropdownItem = event.currentTarget as HTMLElement;
    dropdownItem.classList.toggle('show-dropdown');
    
    const dropdownContainer = dropdownItem.querySelector('.dropdown__container') as HTMLElement;
    if (dropdownItem.classList.contains('show-dropdown')) {
      dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
    } else {
      dropdownContainer.style.height = '0';
    }
  }
}