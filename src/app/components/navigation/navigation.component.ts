import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private container: HTMLElement;
  private overlay: HTMLElement;

  private isMenuOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isMenuOpen = false;

    this.container = document.getElementById('navigation-container');
    this.overlay = document.getElementById('navigation-overlay');

    this.initializeIntersectionObserver(document.getElementsByClassName('section'));
  }

  private initializeIntersectionObserver(elements: HTMLCollectionOf<Element>): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const
            id = entry.target.id,
            element = document.getElementById('navigation-item-' + id);

          if (!element) {
            return;
          }

          if (entry.isIntersecting) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }

        });
      }, {
      threshold: [0.15]
    }
    );

    Array.from(elements).forEach((element) => {
      observer.observe(element);
    });

    return;
  }

  public toggleMenu(): void {
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;

      this.container.classList.add('active');
      this.overlay.classList.add('active')
    } else {
      this.isMenuOpen = false;

      this.container.classList.remove('active');
      this.overlay.classList.remove('active')
    }

    return;
  }

  public scrollTo(id: string): void {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({ behavior: 'smooth' });
    return this.toggleMenu();
  }
}
