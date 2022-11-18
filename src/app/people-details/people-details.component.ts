import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { PersonDetails } from '../person-details';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  personDetails:any=[]
  known_for:any=[]
  trendingPeople = this._moviesService.trendingPeople;


  imgPath = "https://image.tmdb.org/t/p/w500"

  filterMethod() {
    var personID = this._ActivatedRoute.snapshot.params["id"];
    this.personDetails = this.trendingPeople.filter(x => x.id == personID);
    this.known_for=this.personDetails['0'].known_for
    console.log(this.known_for)
    // for (var i = 0; i <4; i++) {
    // this.personDetails.known_for[1]
    // console.log(this.personDetails.known_for[1])
    // }


    }
    
    google(title:string) {
      title = title.replace(/^"(.*)"$/, '$1');
      window.location.pathname=`/${title}`; 
      console.log(window.location.href)
  }

  constructor(private _moviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.filterMethod()
    
  }
}