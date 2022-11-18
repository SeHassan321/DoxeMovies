import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
 trendingPeople:any =[];

  imgPath = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService: MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrendingPerson().subscribe((response) => {
      this._MoviesService.trendingPeople = response.results
      this.trendingPeople= this._MoviesService.trendingPeople;
      //this.trendingPeopledetails = response.results[0].known_for

      //console.log(this.trendingPeopledetails[0])//لو انا كنت عامل انترفيس  شايل الداتا
      // باستخدام موقع كويك تيب كان هيديني اقتراحات للاري ده
    
    })

    
  }


}
