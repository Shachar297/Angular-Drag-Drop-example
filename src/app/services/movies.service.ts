import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import movies from "../../assets/movies.json";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getMovies(){
    return movies;
  }
}
