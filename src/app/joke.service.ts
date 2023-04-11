import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Joke } from './joke.model';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private apiEndpoint = 'http://localhost:8080/joke';

  constructor(private http: HttpClient) {}

  getRandomJoke(): string {
    this.http.get<string>(this.apiEndpoint).subscribe((response: string) => {
      const data = JSON.parse(response);
      console.log(data);
    });
    return 'All out of Chuck Norris Jokes';
  }
}
