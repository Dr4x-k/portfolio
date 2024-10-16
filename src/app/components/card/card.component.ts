import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  projects = [
    {
      title: "Portfolio",
      description: "A portfolio website showcasing my skills and projects",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/your-username/portfolio",
          icon: "ri-github-fill"
        }
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website showcasing my skills and projects",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/your-username/portfolio",
          icon: "ri-github-fill"
        }
      ]
    }
  ]
}
