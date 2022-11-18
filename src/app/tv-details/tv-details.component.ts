import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  constructor(private _moviesService: MoviesService, private _ActivatedRoute: ActivatedRoute) { }
  imgPath = "https://image.tmdb.org/t/p/w500"
  
  tvDetails :any={}
  ngOnInit(): void {
    let tvID = ""
    tvID=  this._ActivatedRoute.snapshot.params["id"]
    this._moviesService.gettvDetails(tvID).subscribe((response)=>{
       this.tvDetails=response
      })

}}
