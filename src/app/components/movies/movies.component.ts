import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies : any[] = [];
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.movies = this.moviesService.getMovies();
   console.log(this.movies)
  }
 
}
