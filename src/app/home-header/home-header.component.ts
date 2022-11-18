import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @Input() trendingMovies: any[] = []
  imgPath = "https://image.tmdb.org/t/p/w500"

  @Output() imgPathshared: EventEmitter<string> = new EventEmitter;



  constructor() { }


  customOptions: OwlOptions =
    {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 100,
      margin: 5,
      autoWidth: true,
      autoplay: true,
      autoplaySpeed: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 8
        }
      },
      nav: true
    }

  saveyaaa(): void {
    this.imgPathshared.emit("https://image.tmdb.org/t/p/w500")
  }

  ngOnInit(): void {

    this.saveyaaa();
  }

}
