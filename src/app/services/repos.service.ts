import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }

  loadRepos(): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${environment.githubUser}/repos`);
  }
}
