import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  navItems = [
    {
      title: 'Inicio',
      label: 'inicio',
      url: '/#home',
    },
    {
      title: 'Experiencia',
      label: 'experiencia',
      url: '/#experience',
    },
    {
      title: 'Sobre mí',
      label: 'sobre-mi',
      url: '/#aboutme',
    },
  ];

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const sections = document.querySelectorAll('section');
      const navItems = document.querySelectorAll('nav a');

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navItems.forEach((item: Element) => {
                if (item.getAttribute('aria-label') === entry.target.id) {
                  item.classList.add('text-blue-500');
                } else {
                  item.classList.remove('text-blue-500');
                }
              });
            }
          });
        },
        { threshold: 0.3 }
      );

      sections.forEach((section) => {
        this.observer?.observe(section);
      });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
