import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isNavbarScrolled: boolean = false;

  @ViewChild('header')
  header!: ElementRef;

  constructor(private elementRef: ElementRef) {}

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

  @HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const headerHeight = this.header.nativeElement.offsetHeight;
  const headerOffset = this.header.nativeElement.offsetTop;

  // Calculate the scroll position at which 50% of the header is scrolled
  const halfwayScrolled = headerOffset + (headerHeight / 2);

  // Apply the scrolled class when the scroll position is greater than 50% of the header height
  this.isNavbarScrolled = scrollPosition > halfwayScrolled;
}
}
