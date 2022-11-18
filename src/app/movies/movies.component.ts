import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  trendingMovie: any[] = [];
  imgPath = "https://image.tmdb.org/t/p/w500"


  // ab3tYaDoluly(imgprefix:string)
  // {
  //   this.imgPath=imgprefix
  // }
  constructor(private _MoviesService: MoviesService) {}


  ngOnInit(): void {
    this._MoviesService.getTrendingMovie().subscribe((response) => {
      this.trendingMovie = response.results
    })
  }

}
