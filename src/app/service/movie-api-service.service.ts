import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '08cc33bd5ae3a747598ce2ad84376e66';

  bannerApiData() : Observable<any>{
   return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
 }

 trendingMovieApiData() : Observable<any> {
  return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
}

searchMovie(data:any) : Observable<any> {
  return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
}
movieDetails(data: any): Observable<any> {
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}
movieVideo(data:any) : Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}
movieCast(data:any) : Observable<any>{
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}
actionMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
}

advMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
}

animationMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
}

comedyMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
}

documentaryMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
}

scienceFictionMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
}

thrillerMovies() : Observable<any>{
  return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
}

 }
 