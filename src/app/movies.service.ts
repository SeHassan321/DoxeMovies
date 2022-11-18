import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  trendingPeople: any[] = [];
  movieDetails :any={}
  constructor(private _httpClient: HttpClient) { }
  getTrendingTV(): Observable<any> {

    return this._httpClient.get('http://api.themoviedb.org/3/trending/tv/day?api_key=3b2644a5882395ceb64d3d195c1f0556')
  }
  getTrendingMovie(): Observable<any> {

    return this._httpClient.get('http://api.themoviedb.org/3/trending/movie/day?api_key=3b2644a5882395ceb64d3d195c1f0556')
  }
  getTrendingPerson(): Observable<any> {

    return this._httpClient.get('http://api.themoviedb.org/3/trending/person/day?api_key=3b2644a5882395ceb64d3d195c1f0556')
  }
  getMovieDetails(id: string): Observable<any> {

    return this._httpClient.get(`http://api.themoviedb.org/3/movie/${id}?api_key=3b2644a5882395ceb64d3d195c1f0556`)

  }
  gettvDetails(id :string):Observable<any>{

    return this._httpClient.get(`http://api.themoviedb.org/3/tv/${id}?api_key=3b2644a5882395ceb64d3d195c1f0556`)
  }
  getpersonDetails(id :string):Observable<any>{

    return this._httpClient.get(`http://api.themoviedb.org/3/person/${id}?api_key=3b2644a5882395ceb64d3d195c1f0556`)
  }
}
