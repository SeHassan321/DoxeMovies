import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  constructor(private _moviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) { }
  imgPath = "https://image.tmdb.org/t/p/w500"
  movieID = ""
  movieDetails :any={}
  ngOnInit(): void {
    this.movieID=  this._ActivatedRoute.snapshot.params["id"]
    this._moviesService.getMovieDetails(this.movieID).subscribe((response)=>{
       this.movieDetails=response
      })
   
  }
  

}
