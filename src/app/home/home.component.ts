import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingTV: any[] = [];
  trendingMovies: any[] = [];
  trendingPeople: any[] = [];

  imgPath = ""


  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrendingMovie().subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 10)
    })

    this._MoviesService.getTrendingTV().subscribe((response) => {
      this.trendingTV = response.results.slice(0, 10)
    })

    this._MoviesService.getTrendingPerson().subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10)


    })

  }
}