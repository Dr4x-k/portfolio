import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../models/proyectos';
import { ReposService } from '../../services/repos.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  repos: Partial<Proyectos> = {};
  allRepos: Partial<Proyectos>[] = []; // Almacenar todos los proyectos

  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    // this.reposService
    //   .loadRepos()
    //   .pipe(
    //     map((repos: any[]) =>
    //       repos.map((repo) => ({
    //         Nombre: repo.name,
    //         Descripcion: repo.description,
    //         Lenguajes: repo.lenguage,
    //         RepoUrl: repo.html_url,
    //       }))
    //     )
    //   )
    //   .subscribe((mappedRepos: Partial<Record<keyof Proyectos, any>>[]) => {
    //     this.allRepos = mappedRepos; // Almacenar todos los proyectos
    //     if (this.allRepos.length > 0) {
    //       this.repos = this.allRepos[0]; // Asignar solo el primer proyecto
    //     }
    //   });
  }
}
